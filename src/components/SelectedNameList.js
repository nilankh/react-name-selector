
const SelectedNames = ({ names }) => (
    <div>
      <h3>Selected Names</h3>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li> 
        ))}
      </ul>
    </div>
  );
  

export default SelectedNames;