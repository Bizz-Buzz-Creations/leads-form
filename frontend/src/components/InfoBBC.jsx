import jsonData from "../serviceInfo.json"

const InfoBBC = () => {
  return (
    <div className="h-[calc(100vh-95px)] overflow-y-auto px-2 pb-2">
      <h2 className="text-3xl font-semibold text-center pb-1 rounded text-slate-700">Our Services</h2>
      {jsonData.map((service, index) => (
        <div key={index} className="bg-white rounded-xl shadow-md space-y-2 mt-4 p-6 max-w-xl">
          <h2 className="uppercase text-xl font-semibold text-slate-700">{service.serviceName}</h2>
          <p className="text-slate-600">{service.serviceDescription}</p>
          <a className="text-blue-600 hover:text-blue-500 hover:underline" href={service.readMore} target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      ))}
    </div>
  )
}

export default InfoBBC