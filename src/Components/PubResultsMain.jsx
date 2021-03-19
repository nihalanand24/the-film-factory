// PubResultsMain.jsx
// This is the view that loads when user selects "all results" from the NAV
import SavedMoviePairs from './SavedMoviePairs';

const PubResultsMain = () => {
  return (
    <div className="wrapper pubResultsContainer">
      <h2>All-time saved movie pairs</h2>
      <div className="allResultsInnerBox">
        <SavedMoviePairs />
      </div>
    </div>
  );
};

export default PubResultsMain;
