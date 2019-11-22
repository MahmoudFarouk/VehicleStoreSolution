FROM mcr.microsoft.com/dotnet/core/aspnet:3.0-buster-slim AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/core/sdk:3.0-buster AS build
WORKDIR /src
COPY ["VehicleStoreAPI/VehicleStoreAPI.csproj", "VehicleStoreAPI/"]
RUN dotnet restore "VehicleStoreAPI/VehicleStoreAPI.csproj"
COPY . .
WORKDIR "/src/VehicleStoreAPI"
RUN dotnet build "VehicleStoreAPI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "VehicleStoreAPI.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "VehicleStoreAPI.dll"]


