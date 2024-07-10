export default {
    // acumenApplicationTitle: import.meta.env.VITE_ACUMEN_APPLICATION_TITLE,
    /* apiGatewayProtocol: import.meta.env.VITE_ACUMEN_API_GATEWAY_PROTOCOL,
    apiGatewayHostname: window.location.hostname,
    apiGatewayPort: import.meta.env.VITE_ACUMEN_API_GATEWAY_PORT, */

    getApplicationTitle: function() {
        return import.meta.env.VITE_ACUMEN_APPLICATION_TITLE
    },
    
    /* getApiUrl: function() {
        return `${this.apiGatewayProtocol}://${this.apiGatewayHostname}:${this.apiGatewayPort}`;
    },

    loginEndpoint: import.meta.env.VITE_LOGIN_ENDPOINT,

    getLoginEndpointUrl: function() {
        return `${this.getApiUrl()}${this.loginEndpoint}`;
    },

    refreshTokenEndpoint: import.meta.env.VITE_REFRESH_TOKEN_ENDPOINT,

    getRefreshTokenEndpointUrl: function() {
        return `${this.getApiUrl()}${this.refreshTokenEndpoint}`;
    },

    logoutEndpoint: import.meta.env.VITE_LOGOUT_ENDPOINT,

    getLogoutEndpointURL: function() {
        return `${this.getApiUrl()}${this.logoutEndpoint}`;
    },

    adminServicesEndpoint: import.meta.env.VITE_ADMIN_SERVICES_ENDPOINT,

    getAdminServicesEndpointUrl: function() {
        return `${this.getApiUrl()}${this.adminServicesEndpoint}`
    },

    authAccessRightsRouteID: import.meta.env.VITE_AUTH_ACCESS_RIGHTS_ROUTE_ID, */
}