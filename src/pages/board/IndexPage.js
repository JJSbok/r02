import BasicLayout from "../../layouts/BasicLayout";
import {Outlet} from "react-router-dom";

const IndexPage = () => {

    return(
        <BasicLayout>
            <div className="mt-4 p4 bg-green-900 text-2xl text-white flex justify-center">
                <div className="underline font-extrabold m-2 p-2">List</div>
                <div className="underline font-extrabold m-2 p-2">Register</div>
            </div>
            <div>
                <div className="h-[50vh] bg-white w-full border-2">
                    <Outlet>

                    </Outlet>
                </div>

            </div>
        </BasicLayout>
    );
}

export default IndexPage;