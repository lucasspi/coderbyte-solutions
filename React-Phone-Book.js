import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

function PhoneBookForm({ addEntryToPhoneBook }) {

  const [entries, setEntries] = useState([])

  const [values, setValues] = useState({
      userFirstname: 'Coder',
      userLastname: 'Byte',
      userPhone: '8885559999',
  })

  const handleChange = (event) => {
    setValues({...values, [event.target.name]: event.target.value});
  }

  const clearForm = () => {
    setValues({
      userFirstname: '',
      userLastname: '',
      userPhone: '',
    })
  }

  const handleSubmit = () => {
    setEntries(entries.concat(values))
    clearForm()
  }

  return (
    <div>
    <form onSubmit={e => { e.preventDefault() }} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input 
        value={values.userFirstname || ''}
        onChange={handleChange}
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname' 
        type='text'
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        value={values.userLastname || ''}
        onChange={handleChange}
        style={style.form.inputs}
        className='userLastname'
        name='userLastname' 
        type='text' 
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        value={values.userPhone || ''}
        onChange={handleChange}
        style={style.form.inputs}
        className='userPhone' 
        name='userPhone' 
        type='text'
      />
      <br/>
      <input 
        onClick={handleSubmit}
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Add User' 
      />
    </form>
    <InformationTable entries={entries} />
    </div>
  )
}

function InformationTable(props) {
  const {entries} = props;
  const [sortedEntries, setSortedEntries] = useState([]);

  const compare = (a,b) => {
    const comparison = a.userLastname.toLowerCase() > b.userLastname.toLowerCase() ? 1 : -1;
    return comparison;
  }

  useEffect(() => {
    setSortedEntries(entries.sort(compare))
  }, [entries])

  return (
    <table style={style.table} className='informationTable'>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
        {entries.map((entry) => {
          return (
            <tr key={entry.userPhone}>
            <td>{entry.userFirstname}</td>
            <td>{entry.userLastname}</td>
            <td>{entry.userPhone}</td>
          </tr>
          )
        
        })}
      </thead> 
    </table>
  );
}

function Application(props) {
  return (
    <section>
      <PhoneBookForm />
    </section>
  );
}

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);
