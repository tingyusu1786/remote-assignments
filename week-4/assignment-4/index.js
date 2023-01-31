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
        <li key={repo.name} className="repo">
          <h3>{repo.name}</h3> 
          <p className="visibility">{repo.visibility}</p> 
          <p className="desc">{repo.description}</p> 
          <ul className="topics">{repo.topics.map(topic => <li key={topic} className="topic">{topic}</li>)}</ul>
        </li>
      ))
    );
  }

  React.useEffect(() => {
    getData();
  }, [page]);

  return (
    <>
      <ul className="list-block">
        <RenderList />
      </ul>
      <button onClick={() => setPage(curPage => curPage + 1)}>More</button>
    </>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);