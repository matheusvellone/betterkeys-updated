/// <reference types="node" />
import http, { IncomingMessage } from "node:http";
import { WebSocket, Server } from "ws";
import { HttpServerHelper } from "@spt-aki/helpers/HttpServerHelper";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { LocalisationService } from "@spt-aki/services/LocalisationService";
import { JsonUtil } from "@spt-aki/utils/JsonUtil";
import { RandomUtil } from "@spt-aki/utils/RandomUtil";
import { IWebSocketConnectionHandler } from "./ws/IWebSocketConnectionHandler";
export declare class WebSocketServer {
    protected logger: ILogger;
    protected randomUtil: RandomUtil;
    protected jsonUtil: JsonUtil;
    protected localisationService: LocalisationService;
    protected httpServerHelper: HttpServerHelper;
    protected webSocketConnectionHandlers: IWebSocketConnectionHandler[];
    protected webSocketServer: Server;
    constructor(logger: ILogger, randomUtil: RandomUtil, jsonUtil: JsonUtil, localisationService: LocalisationService, httpServerHelper: HttpServerHelper, webSocketConnectionHandlers: IWebSocketConnectionHandler[]);
    getWebSocketServer(): Server;
    setupWebSocket(httpServer: http.Server): void;
    protected getRandomisedMessage(): string;
    protected wsOnConnection(ws: WebSocket, req: IncomingMessage): void;
}
