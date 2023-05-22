
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="w-8/12 md:w-4/12 mx-auto text-center">
            <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
            <h3 className="text-3xl uppercase border-t-2 border-b-2 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;