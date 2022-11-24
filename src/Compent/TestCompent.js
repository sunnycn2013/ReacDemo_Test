import React, { useState, useCallback }  from 'react';
// you should import `lodash` as a whole module
// the exported component can be either a function or a class

export default function TestCompent() {

  const [ keyword, setKeyword ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ options, setOptions ] = useState([]);


  const onKeywordChange = useCallback((val) => {
    // setLoading(true);
  });

  const clickOption = useCallback(async (msg) => {
    // alert(msg)
  })

  

  return (
    <div className="wrapper">
      <div className="control">
        {/* <input
          type="text" 
          className={classnames("input" , loading ? 'is-loading' : '')}
          onInput={(e) => {

            onKeywordChange(e.target.value)
          }}/> */}
          <input type="text" value={"aaaa"}/>
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
