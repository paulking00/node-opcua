// ----- this file has been automatically generated - do not edit
import { Variant } from "node-opcua-variant"
import { UAString } from "node-opcua-basic-types"
import { DTDataSetReaderTransport } from "./dt_data_set_reader_transport"
/**
 * |           |                                                  |
 * |-----------|--------------------------------------------------|
 * | namespace |http://opcfoundation.org/UA/                      |
 * | nodeClass |DataType                                          |
 * | name      |BrokerDataSetReaderTransportDataType              |
 * | isAbstract|false                                             |
 */
export interface DTBrokerDataSetReaderTransport extends DTDataSetReaderTransport  {
  queueName: UAString; // String ns=0;i=12
  resourceUri: UAString; // String ns=0;i=12
  authenticationProfileUri: UAString; // String ns=0;i=12
  requestedDeliveryGuarantee: Variant; // Variant ns=0;i=15008
  metaDataQueueName: UAString; // String ns=0;i=12
}