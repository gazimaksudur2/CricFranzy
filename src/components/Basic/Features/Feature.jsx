import PropTypes from  'prop-types'

const Feature = ({feature}) => {

    const { index, type, title, description, features, image } = feature;

    console.log(feature);

    return (
        <div className={`flex ${index&1?'flex-row':'flex-row-reverse'} justify-center items-center`}>
            <figure className="w-[50%] flex justify-center items-center">
                <img className="w-[450px]" src={image} alt="" />
            </figure>
            <div className="info w-[40%] space-y-3 flex flex-col justify-center items-start">
                <div className="tag text-sm bg-blue-700 rounded-badge px-1 text-white">{type}</div>
                <div className="title text-3xl font-exo font-semibold">{title}</div>
                <div className="description">{description}</div>
                <ul className="list-decimal px-5">
                    {
                        features.map((featch, idx)=><li key={idx}>{featch}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.object,
}

export default Feature;