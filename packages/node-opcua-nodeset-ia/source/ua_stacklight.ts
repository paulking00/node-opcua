// ----- this file has been automatically generated - do not edit
import { DataType, Variant } from "node-opcua-variant"
import { UABaseDataVariable } from "node-opcua-nodeset-ua/source/ua_base_data_variable"
import { UAFolder } from "node-opcua-nodeset-ua/source/ua_folder"
import { UABasicStacklight, UABasicStacklight_Base } from "./ua_basic_stacklight"
/**
 * Entry point to a stacklight with the possibility
 * to show the stacklightb s health status.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/IA/                   |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |9:StacklightType ns=9;i=1010                      |
 * |isAbstract      |false                                             |
 */
export interface UAStacklight_Base extends UABasicStacklight_Base {
    /**
     * deviceHealth
     * Contains the health status information of the
     * stacklight.
     */
    deviceHealth?: UABaseDataVariable<any, any>;
    /**
     * deviceHealthAlarms
     * Contains alarms of the stacklights providing more
     * detailed information on the health of the
     * stacklight.
     */
    deviceHealthAlarms?: UAFolder;
}
export interface UAStacklight extends UABasicStacklight, UAStacklight_Base {
}