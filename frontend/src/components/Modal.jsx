import './modal.css';
import 'bootstrap/dist/css/bootstrap.css';

const Modal = ({ handleClose, show, children, answers }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const answersForModal = answers;
  const rawScore = [];
    Object.keys(answersForModal).forEach(key => rawScore.push(Number(answersForModal[key])));
    const totalScore = rawScore.reduce((previous, current) => previous + current);
    const message = () => {
      if(totalScore >= 71){
        return "you feel so lonely You should contact your close friends or family!";
      }else if(totalScore >= 46 && totalScore <= 70) {
        return "Are you feeling a little lonely?\nDon't forget your family and friends!";
      }else if(totalScore >= 20 && totalScore <= 45) {
        return "Good conditon!!"
      }
    }

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <p className='display-4 text-primary'>{totalScore}/80</p>
        <p className='display-7 text-info'><dt>{message()}</dt></p>
        {/* <button type="button" className="btn btn-primary btn-sm m-2">
          Past 
        </button> */}
        <button type="button" onClick={handleClose} className="btn btn-primary btn-sm m-2">
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal