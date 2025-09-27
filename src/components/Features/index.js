import { RiSpeakLine,RiTestTubeLine,RiRobotLine,RiBookLine } from "react-icons/ri";
import './index.css'
const features = [
    {
      icon: <RiSpeakLine size={40} />,
      title: "Speaking Practice",
      description: "Improve your fluency with interactive speaking exercises."
    },
    {
      icon: <RiTestTubeLine size={40} />,
      title: "Mock Tests",
      description: "Simulate real exams to boost your confidence."
    },
    {
      icon: <RiRobotLine size={40} />,
      title: "AI Band Predictor",
      description: "Get AI-based band predictions and personalized tips."
    },
    {
      icon: <RiBookLine size={40} />,
      title: "Study Material",
      description: "Access curated resources and practice questions."
    }
  ];

const Features=()=>{
    return(
        <>
        <h1 className="featureHeading">What We Offer</h1>
        <ul className="featureContainer">
            {features.map((each)=>(
                <li className="FeaturesCard">
                    {each.icon}
                    
                    <h5 className="cardHeading">{each.title}</h5>
                    <p className="cardSubtext">{each.description}</p>
                </li>
            ))}
        </ul>
        </>
    )
}
export default Features