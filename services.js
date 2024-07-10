export default class Services {

  constructor(constants) {
    this.constants = constants;
  }

  async mapRouteIDsToURLs(accessToken) {
    const response = await fetch(this.constants.getAdminServicesEndpointUrl(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + accessToken
      }
    });

    const data = await response.json();

    if(data.services !== undefined) {

      this.servicesMap = new Map();

      for(let i in data.services) {
        const service = data.services[i];

        const publicEndpoint = service.public_endpoint;

        const URL = `${this.constants.getApiUrl()}${publicEndpoint}`
        
        this.servicesMap.set(service.route_id, URL);
      }
    }
  }

  getRoutesList() {
    return Array.from(this.servicesMap.keys());
  }

  getRouteURL(routeID) {
    return this.servicesMap.get(routeID);
  }
}