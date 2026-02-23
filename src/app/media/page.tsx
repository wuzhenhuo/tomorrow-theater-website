
import Link from 'next/link';
import mediaReports from '../media-reports.json'; // Adjusted path

interface MediaReport {
  title: string;
  date: string;
  source: string;
  link: string;
}

const MediaPage = () => {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white rounded-lg shadow-xl">
        <h1 className="text-5xl font-extrabold mb-4">媒體報道</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          各界媒體對「明日劇場」的關注與報道，共同見證我們的成長與探索。
        </p>
      </section>

      <section className="py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {(mediaReports as MediaReport[]).map((report, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3 min-h-[3em]">{report.title}</h2>
                <p className="text-sm text-gray-500 mb-1"><strong>日期：</strong>{report.date}</p>
                <p className="text-sm text-gray-500 mb-4"><strong>來源：</strong>{report.source}</p>
              </div>
              <Link 
                href={report.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 inline-block bg-blue-600 text-white font-medium py-2 px-6 rounded-md hover:bg-blue-700 transition-colors text-center"
              >
                查看原文
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MediaPage;

