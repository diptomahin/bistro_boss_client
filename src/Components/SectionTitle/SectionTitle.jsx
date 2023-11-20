
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center">
            <p className="text-[#D99904] text-lg py-2">---{subHeading}---</p>
            <h3 className="text-2xl font-semibold border-y-4 py-2 my-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;