import video from './assets/loading.mp4';
import './LoadingPage.css';
const LoadingPage = () => {
  return (
    <div className="loading-container">
    <video className="loading-video" autoPlay loop muted>
      <source src={video} type="video/mp4" />
        
    </video>
      <h2>Loading</h2>
        <div className="spinner">
        <div className="dot dot1"></div>
        <div className="dot dot2"></div>
        <div className="dot dot3"></div>
        <div className="dot dot4"></div>
        <div className="dot dot5"></div>
        <div className="dot dot6"></div>
        <div className="dot dot7"></div>
        <div className="dot dot8"></div>
      </div>
      <p>Please wait while we fetch the products.</p>
    </div>
  );
}
export default LoadingPage;