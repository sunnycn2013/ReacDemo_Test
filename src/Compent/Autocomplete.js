import React, { useState, useCallback }  from 'react';
// import classnames from 'classnames';
// you should import `lodash` as a whole module
import lodash from 'lodash';
import axios from 'axios';

const ITEMS_API_URL = 'https://example.com/api/items';
const DEBOUNCE_DELAY = 500;

// the exported component can be either a function or a class

export default function Autocomplete() {

  const [ keyword, setKeyword ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ options, setOptions ] = useState([]);

  const fetchOptions = lodash.debounce(async (val) => {
    const { status, data }  = await axios.get(ITEMS_API_URL + `?q=${val}`);
    if (status === 200) {
      setOptions(data.slice(0, 10))
    }
    setLoading(false);
  }, DEBOUNCE_DELAY);

  const onKeywordChange = useCallback((val) => {
    setLoading(true);
    fetchOptions(val);
  });

  const clickOption = useCallback(async (msg) => {
    alert(msg)
  })

  

  return (
    <div className="wrapper">
      <div className="control">
{/* 
          type="text" 
          className={classnames("input" , loading ? 'is-loading' : '')}
          onInput={(e) => {

            onKeywordChange(e.target.value)
          }}/> */}

      </div>

      {options.length ? (
        <div className="list is-hoverable">
          {options.map((opt => {
            return <a class="list-item" onClick={clickOption}>{opt}</a>
          }))}
        </div>
      ) : null}
    </div>
  );
}
