function useCancelledEffect(effect, deps) {
  useEffect(() => {
    let isCurrent = true;
    const checkCurrent = () => isCurrent;

    // Get the clean up function if the effect uses one
    const cleanup = effect(checkCurrent);
    return () => {
      isCurrent = false;
      // Call the clean up function
      cleanup && cleanup();
    };
  }, deps);
}

function Article({ id }) {
  const [article, setArticle] = useState(null);

  useCancelledEffect(
    didCancel => {
      async function fetchData() {
        const article = await API.fetchArticle(id);
        if (!didCancel) {
          setArticle(article);
        }
      }

      fetchData();

      return () => {};
    },
    [id]
  );

  // ...
}
