// PubResultsMain.jsx
// This is the view that loads when user selects "all results" from the NAV
import SavedMoviePairs from './SavedMoviePairs';

const PubResultsMain = () => {
  return (
    <>
      <h2>Here are all the publically available film matches</h2>
      <SavedMoviePairs />
    </>
  );
};
export default PubResultsMain;
