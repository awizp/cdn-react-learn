import { Link } from "react-router";

const ProjectLink = ({ data }) => {
    return (
        <div className="w-full h-screen py-15">
            <div className="container mx-auto px-3 md:px-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {data && (
                        data.map((datum) => {

                            const { id, projectId, projectDay, title, learn, link } = datum;

                            return <Link to={`${link}`} key={id}>
                                <div className="w-full rounded-xl border-2 border-blacky p-8 space-y-5 transition hover:-translate-y-0.75 duration-300 cursor-pointer">
                                    <div className="space-y-1">
                                        <h3 className="text-xl font-bold">Project {projectId}</h3>
                                        <p className="text-gray font-semibold">Day {projectDay}</p>
                                    </div>

                                    <h2 className="text-2xl font-bold mb-5">{title}</h2>

                                    <div className="flex flex-wrap gap-2">
                                        {learn.map((item) => <p className="bg-gray-300 text-zinc-600 rounded-full px-3 py-1.5 text-xs font-bold">{item}</p>)}
                                    </div>
                                </div>
                            </Link>;
                        })
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectLink;