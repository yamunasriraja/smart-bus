import { useLocation } from "react-router-dom";

function BusResultsPage(){

  const location = useLocation();

  const { from, to } = location.state || {};

  return(

    <div>

      <h2>Available Buses</h2>

      <p>
        Showing buses from <b>{from}</b> to <b>{to}</b>
      </p>

    </div>

  );
}

export default BusResultsPage;