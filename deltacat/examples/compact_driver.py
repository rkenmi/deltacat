import argparse
import time

from ray.autoscaler._private.aws.events import AwsEventManager
from ray.autoscaler._private.event_system import ScriptStartedEvent, ScriptInProgressEvent, ScriptCompletedEvent

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--notification_uri")
    parser.add_argument("--trace_id")
    parser.add_argument("--source_table_owner")
    parser.add_argument("--source_table_name")
    parser.add_argument("--source_table_version", default="1")
    parser.add_argument("--destination_table_owner")
    parser.add_argument("--destination_table_name")
    parser.add_argument("--destination_table_version", default="1")
    parser.add_argument("--destination_provider_id")
    args, _ = parser.parse_known_args()
    events_config = {
        "notification_uri": args.notification_uri,
        "parameters": {
            "traceId": args.trace_id,
            "sourceTable": {
                "owner": args.source_table_owner,
                "name": args.source_table_name,
            },
            "sourceTableVersion": args.source_table_version,
            "destinationTable": {
                "owner": args.destination_table_owner,
                "name": args.destination_table_name,
            },
            "destinationTableVersion": args.destination_table_version,
            "destinationProviderId": args.destination_provider_id,
        }
    }
    events_manager = AwsEventManager(events_config)
    events_manager.add_callback(ScriptStartedEvent.start_initializing)
    time.sleep(3)
    events_manager.add_callback(ScriptInProgressEvent.in_progress)
    # compact()
    time.sleep(7)
    events_manager.add_callback(ScriptCompletedEvent.complete_success)
    time.sleep(2)
