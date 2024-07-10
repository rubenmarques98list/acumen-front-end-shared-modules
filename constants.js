export default class Constants {

    constructor(envContext) {
        this.envContext = envContext;

        this.acumenApplicationTitle = this.envContext.VITE_ACUMEN_APPLICATION_TITLE;
        this.apiGatewayProtocol = this.envContext.VITE_ACUMEN_API_GATEWAY_PROTOCOL;
        this.apiGatewayHostname = window.location.hostname;
        this.apiGatewayPort = this.envContext.VITE_ACUMEN_API_GATEWAY_PORT;

        this.loginEndpoint = this.envContext.VITE_LOGIN_ENDPOINT;
        this.refreshTokenEndpoint = this.envContext.VITE_REFRESH_TOKEN_ENDPOINT
        this.logoutEndpoint = this.envContext.VITE_LOGOUT_ENDPOINT;
        this.adminServicesEndpoint = this.envContext.VITE_ADMIN_SERVICES_ENDPOINT
        this.authAccessRightsRouteID = this.envContext.VITE_AUTH_ACCESS_RIGHTS_ROUTE_ID

        this.authRolesRouteID = this.envContext.VITE_AUTH_ROLES_ROUTE_ID
        this.usersRouteID = this.envContext.VITE_AUTH_USERS_ROUTE_ID
    }

    getApplicationTitle() {
        return this.envContext.VITE_ACUMEN_APPLICATION_TITLE
    }

    getApiUrl() {
        return `${this.apiGatewayProtocol}://${this.apiGatewayHostname}:${this.apiGatewayPort}`
    }

    getLoginEndpointUrl() {
        return `${this.getApiUrl()}${this.loginEndpoint}`;
    }

    getRefreshTokenEndpointUrl() {
        return `${this.getApiUrl()}${this.refreshTokenEndpoint}`;
    }

    getLogoutEndpointURL() {
        return `${this.getApiUrl()}${this.logoutEndpoint}`;
    }

    getAdminServicesEndpointUrl() {
        return `${this.getApiUrl()}${this.adminServicesEndpoint}`
    }


}