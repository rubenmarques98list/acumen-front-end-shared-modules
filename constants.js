export default class Constants{

    constructor(envContext) {
        this.envContext = envContext;
    }

    acumenApplicationTitle = this.envContext.VITE_ACUMEN_APPLICATION_TITLE;
    apiGatewayProtocol = this.envContext.VITE_ACUMEN_API_GATEWAY_PROTOCOL;
    apiGatewayHostname = window.location.hostname;
    apiGatewayPort = this.envContext.VITE_ACUMEN_API_GATEWAY_PORT;

    getApplicationTitle() {
        return import.meta.env.VITE_ACUMEN_APPLICATION_TITLE
    }
    
    getApiUrl() {
        return `${this.apiGatewayProtocol}://${this.apiGatewayHostname}:${this.apiGatewayPort}`
    }

    loginEndpoint = this.envContext.VITE_LOGIN_ENDPOINT;

    getLoginEndpointUrl() {
        return `${this.getApiUrl()}${this.loginEndpoint}`;
    }

    refreshTokenEndpoint = this.envContext.VITE_REFRESH_TOKEN_ENDPOINT

    getRefreshTokenEndpointUrl() {
        return `${this.getApiUrl()}${this.refreshTokenEndpoint}`;
    }

    logoutEndpoint = this.envContext.VITE_LOGOUT_ENDPOINT;

    getLogoutEndpointURL() {
        return `${this.getApiUrl()}${this.logoutEndpoint}`;
    }

    adminServicesEndpoint = this.envContext.VITE_ADMIN_SERVICES_ENDPOINT

    getAdminServicesEndpointUrl() {
        return `${this.getApiUrl()}${this.adminServicesEndpoint}`
    }

    authAccessRightsRouteID = this.envContext.VITE_AUTH_ACCESS_RIGHTS_ROUTE_ID
}