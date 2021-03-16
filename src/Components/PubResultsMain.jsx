// PubResultsMain.jsx
// This is the view that loads when user selects "all results" from the NAV
import SavedMoviePairs from './SavedMoviePairs';

const PubResultsMain = () => {
  return (
    <div className="wrapper centralContainer">
      <h2>Here are all the publically available film matches</h2>
      <SavedMoviePairs />
    </div>
  );
};
export default PubResultsMain;
