using  VehicleStoreAPI.Common.Enums;

namespace VehicleStoreAPI.Common
{

    public class ServiceResponse
    {
        public ResponseStatus Status { get; set; }
        public string Message { get; set; }
        public string Exception { get; set; }
    }

    public class ServiceResponse<T> : ServiceResponse
    {
        public T Data { get; set; }
    }


}