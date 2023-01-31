function App() {
  const [repos, setRepos] = React.useState([]);
  const [page, setPage] = React.useState(1);

  const getData = () => {
    fetch(`https://api.github.com/orgs/facebook/repos?per_page=5&page=${page}`)
      .then(res => res.json())
      .then(data => {setRepos(repos.concat(data))})
      .catch(err => alert(`something went wrong (${err})`));
  }

  const RenderList = () => {
    return (
      repos.map(repo => (
        <ul key={repo.name}>
          <h3>{repo.name}</h3> 
          <p>{repo.visibility}</p> 
          <p>{repo.description}</p> 
          <ul>{repo.topics.map(topic => <li key={topic}>{topic}</li>)}</ul>
        </ul>
      ))
    );
  }

  React.useEffect(() => {
    getData();
  }, [page]);

  return (
    <div>
      <RenderList />
      <button onClick={() => setPage(curPage => curPage + 1)}>More</button>
    </div>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);