"use client"
import { pExperience } from "~/app/(pages)/hooks/useExperience"
import ExpElement from "../_components/Experience/expElement";
import { useState } from "react";

const arra: string[] = ["Maze", "Home", "Candidates"]

const Experience = () => {
    const [expState, setExp] = useState(pExperience[0]);

    return (
        <section id="Experience" className="w-auto h-[95vh] my-20 font-code">
            <h2 className="text-center text-4xl py-5 font-main">Experience</h2>
            <div className="flex items-center justify-between lg:mx-28 mx-3 bg-slate-950 my-3 px-16 py-2 rounded-md text-lg font-semibold">
                {arra.map((lang, index) => (
                    <button key={index} onClick={() => setExp(pExperience[index])} className="hover:text-blue-800">
                        <h3>{lang}</h3>
                    </button>
                ))}
            </div>
            <ExpElement img={expState?.img ?? ""} title={expState?.title ?? ""} description={expState?.description ?? []} gitRepo={expState?.gitRepo ?? ""}/>
        </section>
    )
}

export default Experience;