import React, { useState, useEffect } from 'react';
import './indexleft.modulus.css';

function Left() {
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [checkboxes, setCheckboxes] = useState([]);
  const [filteredCheckboxes, setFilteredCheckboxes] = useState([]);
  const [newCheckboxName, setNewCheckboxName] = useState('');

  useEffect(() => {
    const savedCheckboxes = JSON.parse(localStorage.getItem('checkboxes')) || [];
    setCheckboxes(savedCheckboxes);
    setFilteredCheckboxes(savedCheckboxes);
  }, []);

  useEffect(() => {
    localStorage.setItem('checkboxes', JSON.stringify(checkboxes));
    setFilteredCheckboxes(
      checkboxes.filter((checkbox) => checkbox.title.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [checkboxes, searchQuery]);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const addCheckbox = () => {
    if (newCheckboxName.trim() !== '') {
      const newCheckbox = { title: newCheckboxName };
      setCheckboxes([...checkboxes, newCheckbox]);
      setNewCheckboxName('');
    }
  };
  

  return (
    <>
      <div className='button'>
        <button className={`toggle-button ${isPanelOpen ? 'hide-button' : ''}`} onClick={togglePanel}>
          {isPanelOpen?'^':'>'}
        </button>
      </div>
      <div className={`boxpo my-2 ${isPanelOpen ? 'panel-open' : 'panel-closed'}`}>
        <section className="_167Mu3 _2hbLCH">
          <div className="_213eRC _2ssEMF mx-2">
            <div className="_2gmUFU _3V8raom">Filters</div>
            <button className={`toggle-icon ${isPanelOpen ? '' : ''}`} onClick={togglePanel}></button>
          </div>
          <div className="_3FPh42">
            <div className="_2d0we9">
              <div className="_2pBqj6">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 17 18"
                  className="_3WAvPc"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#2874F1" fillRule="evenodd">
                    <path
                      className="-OwdlC"
                      d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"
                    ></path>
                    <path
                      className="-OwdlC"
                      d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"
                    ></path>
                  </g>
                </svg>
                <input
                  type="text"
                  className="_34uFYj"
                  placeholder="Search Filters"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
              {filteredCheckboxes.length > 0 ? (
                filteredCheckboxes.map((checkbox, index) => (
                  <div className="_4921Z t0pPfW" title={checkbox.title} key={index}>
                    <div className="_1Y4Vhm _4FO7b6">
                      <label className="_2iDkf8 t0pPfW">
                        <input type="checkbox" className="_30VH1S" readOnly />
                        <div className="_24_Dny"></div>
                        <div className="_3879cV">{checkbox.title}</div>
                      </label>
                    </div>
                  </div>
                ))
              ) : (
                <div className="_4921Z t0pPfW">
                  <div className="_1Y4Vhm _4FO7b6">
                    <div className="_2iDkf8 t0pPfW">No checkboxes found.</div>
                  </div>
                </div>
              )}
              <div className="_4921Z t0pPfW add-checkbox">
                <div className="_1Y4Vhm _4FO7b6">
                  <label className="_2iDkf8 t0pPfW">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-9h4v2h-4v4h-2v-4H6V9h4V5h2v4z"
                        fill="#2874F1"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder="New Checkbox Name"
                      value={newCheckboxName}
                      onChange={(e) => setNewCheckboxName(e.target.value)}
                    />
                    <button className="add-checkbox-button" onClick={addCheckbox}>
                      Add
                    </button>
                  </label>
                </div>
              </div>
            </div>
            <div className="QvtND5 _2w_U27">
              <span>MORE</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Left;
