
import CardExtent from "components/card/CardExtent";
import { Link } from "react-router-dom";

export default function Card() {
 
  return (
    <div>
     <Link to="dashboard/">
       <CardExtent/>   
       </Link>    
    </div>
  );
}