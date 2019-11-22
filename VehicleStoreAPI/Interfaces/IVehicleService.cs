using VehicleStoreAPI.Common.Enums;
using VehicleStoreAPI.Models;
using System.Collections.Generic;
using VehicleStoreAPI.Common;

namespace VehicleStoreAPI.Interfaces
{
    public interface IVehicleService
    {
        public ServiceResponse<List<Vehicle>> GetAllVehicles();

        public ServiceResponse UpdateVehiclesStatus(params int[] vehicleIds);

        public ServiceResponse<List<Vehicle>> GetVehiclesByStatus(bool status);

    }
}