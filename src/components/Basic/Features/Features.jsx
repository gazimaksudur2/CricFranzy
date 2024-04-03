import Feature from "./Feature";
import FeaturePera from "./FeaturePera";
import { useLoaderData } from 'react-router-dom'

const Features = () => {
    const features = useLoaderData();
    // console.log(features);
    return (
        <div className="min-h-screen mx-auto space-y-10 w-[92%] my-10">
            <FeaturePera/>
            {
                features.map((feature, idx)=><Feature key={idx} feature={feature}/>)
            }
        </div>
    );
};

export default Features;