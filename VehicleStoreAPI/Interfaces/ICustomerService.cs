using VehicleStoreAPI.Common.Enums;
using VehicleStoreAPI.Models;
using System.Collections.Generic;
using VehicleStoreAPI.Common;

namespace VehicleStoreAPI.Interfaces
{
    public interface ICustomerService
    {
        public ServiceResponse<List<Customer>> GetAllCustomers();
        public ServiceResponse<List<Vehicle>> GetCustomerVehicles(int customerId);
    }
}