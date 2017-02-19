declare const ReconnectingWebsocket: (url: string, protocols?: string | string[], options?: {
    constructor?: new (url: string, protocols?: string | string[], options?: any) => WebSocket;
    maxReconnectionDelay?: number;
    minReconnectionDelay?: number;
    reconnectionDelayGrowFactor?: number;
    connectionTimeout?: number;
    maxRetries?: number;
    debug?: boolean;
    options: any;
}) => void;
export = ReconnectingWebsocket;
