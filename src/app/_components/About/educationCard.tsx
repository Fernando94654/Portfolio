import { FaGraduationCap } from 'react-icons/fa';

export interface EducationCardProps {
    school: string;
    degree: string;
    period: string;
    location: string;
    detail: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
    school,
    degree,
    period,
    location,
    detail,
}) => {
    return (
        <div className="group flex items-start gap-4 rounded-xl border border-slate-800/80 bg-slate-950 p-5 transition-all hover:-translate-y-0.5 hover:border-slate-700">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky-400/10 text-sky-300 ring-1 ring-sky-400/40 transition-transform group-hover:scale-105">
                <FaGraduationCap className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-x-4 gap-y-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h4 className="text-base font-semibold text-white sm:text-lg">
                        {school}
                    </h4>
                    <span className="shrink-0 whitespace-nowrap text-sm text-slate-400">
                        {period}
                    </span>
                </div>
                <div className="mt-1 flex flex-col gap-x-4 gap-y-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <p className="text-sm text-slate-300 sm:text-base">
                        {degree} · {detail}
                    </p>
                    <span className="shrink-0 whitespace-nowrap text-sm text-slate-400">
                        {location}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default EducationCard;
