import SampleNav from "./nav/SampleNav";

const BasicLayout = ({children}) => {
  return ( 
    <div className="container mx-auto min-w-[1280px] bg-green-900">
      <div>
        <SampleNav></SampleNav>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}
 
export default BasicLayout;