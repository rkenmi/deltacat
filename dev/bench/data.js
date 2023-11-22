window.BENCHMARK_DATA = {
  "lastUpdate": 1700691677528,
  "repoUrl": "https://github.com/rkenmi/deltacat",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "rkenmi",
            "username": "rkenmi"
          },
          "committer": {
            "name": "rkenmi",
            "username": "rkenmi"
          },
          "id": "73f8d8a4b9dad19a7733a2179cc155055b3f1882",
          "message": "[Testing] Benchmarks",
          "timestamp": "2021-12-03T22:20:44Z",
          "url": "https://github.com/rkenmi/deltacat/pull/2/commits/73f8d8a4b9dad19a7733a2179cc155055b3f1882"
        },
        "date": 1700691676387,
        "tool": "pytest",
        "benches": [
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[1-incremental-pkstr-sknone-norcf_V1]",
            "value": 2.252147365082915,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 444.0206779999869 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[1-incremental-pkstr-sknone-norcf_V2]",
            "value": 2.320243179490427,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 430.98930699997595 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[2-incremental-pkstr-skstr-norcf_V1]",
            "value": 2.3123864824906053,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 432.4536610000109 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[2-incremental-pkstr-skstr-norcf_V2]",
            "value": 2.2316953822928176,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 448.0898280000076 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[3-incremental-pkstr-multiskstr-norcf_V1]",
            "value": 2.352050905832906,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 425.1608659999988 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[3-incremental-pkstr-multiskstr-norcf_V2]",
            "value": 2.3321448917310725,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 428.7898249999955 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[4-incremental-duplicate-pk_V1]",
            "value": 2.335314077452908,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 428.20792699998833 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[4-incremental-duplicate-pk_V2]",
            "value": 2.3305805013641545,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 429.07764800000336 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[5-incremental-decimal-pk-simple_V1]",
            "value": 2.1786435654051686,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 459.0011949999848 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[5-incremental-decimal-pk-simple_V2]",
            "value": 2.4004857507741604,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 416.58235200000604 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[6-incremental-integer-pk-simple_V1]",
            "value": 2.291802260669875,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 436.3378190000162 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[6-incremental-integer-pk-simple_V2]",
            "value": 2.3728776759609085,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 421.42922499999713 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[7-incremental-timestamp-pk-simple_V1]",
            "value": 2.285899352125776,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 437.464580000011 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[7-incremental-timestamp-pk-simple_V2]",
            "value": 1.8368131955249767,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 544.421175999986 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[8-incremental-decimal-timestamp-pk-multi_V1]",
            "value": 2.232066408868363,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 448.0153439999981 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[8-incremental-decimal-timestamp-pk-multi_V2]",
            "value": 2.287114684728744,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 437.232119000015 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[9-incremental-decimal-pk-multi-dup_V1]",
            "value": 2.3382406027833658,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 427.6719850000177 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[9-incremental-decimal-pk-multi-dup_V2]",
            "value": 2.327078042062043,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 429.7234480000043 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[10-incremental-decimal-pk-partitionless_V1]",
            "value": 2.3073528197724453,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 433.39709099998913 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[10-incremental-decimal-pk-partitionless_V2]",
            "value": 2.2938601843267095,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 435.94636099999207 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[11-incremental-decimal-hash-bucket-single_V1]",
            "value": 2.2105383138934562,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 452.3784969999838 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[11-incremental-decimal-hash-bucket-single_V2]",
            "value": 2.3357800902284787,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 428.1224950000251 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[1-rebase-then-incremental-sanity_V1]",
            "value": 2.48142415431567,
            "unit": "iter/sec",
            "range": "stddev: 0.011135844842119354",
            "extra": "mean: 402.9943845999924 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[1-rebase-then-incremental-sanity_V2]",
            "value": 2.4689751532667077,
            "unit": "iter/sec",
            "range": "stddev: 0.005109068787314312",
            "extra": "mean: 405.02635219997956 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[2-rebase-then-incremental-pk-multi_V1]",
            "value": 2.617344479467866,
            "unit": "iter/sec",
            "range": "stddev: 0.057048964826604986",
            "extra": "mean: 382.06663580000395 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[2-rebase-then-incremental-pk-multi_V2]",
            "value": 2.6448182686890602,
            "unit": "iter/sec",
            "range": "stddev: 0.05936039811483059",
            "extra": "mean: 378.0978118000007 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[3-rebase-then-incremental-no-sk-no-partition-key_V1]",
            "value": 2.6304937219542888,
            "unit": "iter/sec",
            "range": "stddev: 0.05422775923962334",
            "extra": "mean: 380.1567711999951 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[3-rebase-then-incremental-no-sk-no-partition-key_V2]",
            "value": 2.500919207852901,
            "unit": "iter/sec",
            "range": "stddev: 0.005904181042818533",
            "extra": "mean: 399.8529808000171 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[4-rebase-then-incremental-partial-deltas-on-incremental-deltas_V1]",
            "value": 2.4097741461110886,
            "unit": "iter/sec",
            "range": "stddev: 0.01217274320546146",
            "extra": "mean: 414.97664899999336 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[4-rebase-then-incremental-partial-deltas-on-incremental-deltas_V2]",
            "value": 2.569287693665206,
            "unit": "iter/sec",
            "range": "stddev: 0.06393393496800746",
            "extra": "mean: 389.2129334000174 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[5-rebase-then-incremental-partial-deltas-on-incremental-deltas-2_V1]",
            "value": 2.554309626553189,
            "unit": "iter/sec",
            "range": "stddev: 0.0650636565772435",
            "extra": "mean: 391.49521639998284 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[5-rebase-then-incremental-partial-deltas-on-incremental-deltas-2_V2]",
            "value": 2.6264738107812353,
            "unit": "iter/sec",
            "range": "stddev: 0.06221333847360433",
            "extra": "mean: 380.7386145999885 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[6-rebase-then-incremental-hash-bucket-GT-records-per-compacted-file-v2-only_V2]",
            "value": 2.1279953703264174,
            "unit": "iter/sec",
            "range": "stddev: 0.0035343181332404177",
            "extra": "mean: 469.92583440001 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[7-rebase-then-incremental-no-pk-compactor-v2-only_V2]",
            "value": 2.3847084318660836,
            "unit": "iter/sec",
            "range": "stddev: 0.007413601049105899",
            "extra": "mean: 419.3384761999937 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[8-rebase-then-incremental-delete-type-delta-on-incremental_V1]",
            "value": 2.4833181378187046,
            "unit": "iter/sec",
            "range": "stddev: 0.07068357387303462",
            "extra": "mean: 402.68702779998193 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[8-rebase-then-incremental-delete-type-delta-on-incremental_V2]",
            "value": 2.485939843687418,
            "unit": "iter/sec",
            "range": "stddev: 0.06590962490119955",
            "extra": "mean: 402.26234859999295 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[9-rebase-then-incremental-delete-type-delta-on-incremental-multi-pk_V2]",
            "value": 2.5032558396818807,
            "unit": "iter/sec",
            "range": "stddev: 0.06847683096826189",
            "extra": "mean: 399.47974319999275 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[10-rebase-then-incremental-delete-type-delta-on-incremental-multi-pk-delete-all_V2]",
            "value": 2.2474730776930256,
            "unit": "iter/sec",
            "range": "stddev: 0.012701518980319125",
            "extra": "mean: 444.94415080000635 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[11-rebase-then-incremental-empty-csv-delta-case_V1]",
            "value": 2.294879334032937,
            "unit": "iter/sec",
            "range": "stddev: 0.007946525231928545",
            "extra": "mean: 435.75275839999676 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[11-rebase-then-incremental-empty-csv-delta-case_V2]",
            "value": 2.4470561837027685,
            "unit": "iter/sec",
            "range": "stddev: 0.07190808080176782",
            "extra": "mean: 408.65428700000166 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[12-rebase-then-incremental-single-hash-bucket_V1]",
            "value": 2.4998268169978126,
            "unit": "iter/sec",
            "range": "stddev: 0.07239203357365431",
            "extra": "mean: 400.0277111999935 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[12-rebase-then-incremental-single-hash-bucket_V2]",
            "value": 2.534577769383482,
            "unit": "iter/sec",
            "range": "stddev: 0.0724400626656033",
            "extra": "mean: 394.54303279999294 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[13-rebase-then-incremental-drop-duplicates-false-on-incremental-v2-only_V2]",
            "value": 2.4246371328316294,
            "unit": "iter/sec",
            "range": "stddev: 0.0820011271693076",
            "extra": "mean: 412.43284879999464 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[14-rebase-then-empty-incremental-delta_V1]",
            "value": 2.2496498289561915,
            "unit": "iter/sec",
            "range": "stddev: 0.009563120887652507",
            "extra": "mean: 444.5136247999926 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[14-rebase-then-empty-incremental-delta_V2]",
            "value": 2.305180178721795,
            "unit": "iter/sec",
            "range": "stddev: 0.008989215154934648",
            "extra": "mean: 433.80556939999906 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "rkenmi",
            "username": "rkenmi"
          },
          "committer": {
            "name": "rkenmi",
            "username": "rkenmi"
          },
          "id": "73f8d8a4b9dad19a7733a2179cc155055b3f1882",
          "message": "[Testing] Benchmarks",
          "timestamp": "2021-12-03T22:20:44Z",
          "url": "https://github.com/rkenmi/deltacat/pull/2/commits/73f8d8a4b9dad19a7733a2179cc155055b3f1882"
        },
        "date": 1700691676387,
        "tool": "pytest",
        "benches": [
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[1-incremental-pkstr-sknone-norcf_V1]",
            "value": 2.252147365082915,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 444.0206779999869 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[1-incremental-pkstr-sknone-norcf_V2]",
            "value": 2.320243179490427,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 430.98930699997595 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[2-incremental-pkstr-skstr-norcf_V1]",
            "value": 2.3123864824906053,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 432.4536610000109 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[2-incremental-pkstr-skstr-norcf_V2]",
            "value": 2.2316953822928176,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 448.0898280000076 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[3-incremental-pkstr-multiskstr-norcf_V1]",
            "value": 2.352050905832906,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 425.1608659999988 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[3-incremental-pkstr-multiskstr-norcf_V2]",
            "value": 2.3321448917310725,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 428.7898249999955 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[4-incremental-duplicate-pk_V1]",
            "value": 2.335314077452908,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 428.20792699998833 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[4-incremental-duplicate-pk_V2]",
            "value": 2.3305805013641545,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 429.07764800000336 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[5-incremental-decimal-pk-simple_V1]",
            "value": 2.1786435654051686,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 459.0011949999848 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[5-incremental-decimal-pk-simple_V2]",
            "value": 2.4004857507741604,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 416.58235200000604 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[6-incremental-integer-pk-simple_V1]",
            "value": 2.291802260669875,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 436.3378190000162 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[6-incremental-integer-pk-simple_V2]",
            "value": 2.3728776759609085,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 421.42922499999713 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[7-incremental-timestamp-pk-simple_V1]",
            "value": 2.285899352125776,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 437.464580000011 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[7-incremental-timestamp-pk-simple_V2]",
            "value": 1.8368131955249767,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 544.421175999986 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[8-incremental-decimal-timestamp-pk-multi_V1]",
            "value": 2.232066408868363,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 448.0153439999981 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[8-incremental-decimal-timestamp-pk-multi_V2]",
            "value": 2.287114684728744,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 437.232119000015 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[9-incremental-decimal-pk-multi-dup_V1]",
            "value": 2.3382406027833658,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 427.6719850000177 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[9-incremental-decimal-pk-multi-dup_V2]",
            "value": 2.327078042062043,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 429.7234480000043 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[10-incremental-decimal-pk-partitionless_V1]",
            "value": 2.3073528197724453,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 433.39709099998913 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[10-incremental-decimal-pk-partitionless_V2]",
            "value": 2.2938601843267095,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 435.94636099999207 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[11-incremental-decimal-hash-bucket-single_V1]",
            "value": 2.2105383138934562,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 452.3784969999838 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[11-incremental-decimal-hash-bucket-single_V2]",
            "value": 2.3357800902284787,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 428.1224950000251 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[1-rebase-then-incremental-sanity_V1]",
            "value": 2.48142415431567,
            "unit": "iter/sec",
            "range": "stddev: 0.011135844842119354",
            "extra": "mean: 402.9943845999924 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[1-rebase-then-incremental-sanity_V2]",
            "value": 2.4689751532667077,
            "unit": "iter/sec",
            "range": "stddev: 0.005109068787314312",
            "extra": "mean: 405.02635219997956 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[2-rebase-then-incremental-pk-multi_V1]",
            "value": 2.617344479467866,
            "unit": "iter/sec",
            "range": "stddev: 0.057048964826604986",
            "extra": "mean: 382.06663580000395 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[2-rebase-then-incremental-pk-multi_V2]",
            "value": 2.6448182686890602,
            "unit": "iter/sec",
            "range": "stddev: 0.05936039811483059",
            "extra": "mean: 378.0978118000007 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[3-rebase-then-incremental-no-sk-no-partition-key_V1]",
            "value": 2.6304937219542888,
            "unit": "iter/sec",
            "range": "stddev: 0.05422775923962334",
            "extra": "mean: 380.1567711999951 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[3-rebase-then-incremental-no-sk-no-partition-key_V2]",
            "value": 2.500919207852901,
            "unit": "iter/sec",
            "range": "stddev: 0.005904181042818533",
            "extra": "mean: 399.8529808000171 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[4-rebase-then-incremental-partial-deltas-on-incremental-deltas_V1]",
            "value": 2.4097741461110886,
            "unit": "iter/sec",
            "range": "stddev: 0.01217274320546146",
            "extra": "mean: 414.97664899999336 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[4-rebase-then-incremental-partial-deltas-on-incremental-deltas_V2]",
            "value": 2.569287693665206,
            "unit": "iter/sec",
            "range": "stddev: 0.06393393496800746",
            "extra": "mean: 389.2129334000174 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[5-rebase-then-incremental-partial-deltas-on-incremental-deltas-2_V1]",
            "value": 2.554309626553189,
            "unit": "iter/sec",
            "range": "stddev: 0.0650636565772435",
            "extra": "mean: 391.49521639998284 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[5-rebase-then-incremental-partial-deltas-on-incremental-deltas-2_V2]",
            "value": 2.6264738107812353,
            "unit": "iter/sec",
            "range": "stddev: 0.06221333847360433",
            "extra": "mean: 380.7386145999885 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[6-rebase-then-incremental-hash-bucket-GT-records-per-compacted-file-v2-only_V2]",
            "value": 2.1279953703264174,
            "unit": "iter/sec",
            "range": "stddev: 0.0035343181332404177",
            "extra": "mean: 469.92583440001 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[7-rebase-then-incremental-no-pk-compactor-v2-only_V2]",
            "value": 2.3847084318660836,
            "unit": "iter/sec",
            "range": "stddev: 0.007413601049105899",
            "extra": "mean: 419.3384761999937 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[8-rebase-then-incremental-delete-type-delta-on-incremental_V1]",
            "value": 2.4833181378187046,
            "unit": "iter/sec",
            "range": "stddev: 0.07068357387303462",
            "extra": "mean: 402.68702779998193 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[8-rebase-then-incremental-delete-type-delta-on-incremental_V2]",
            "value": 2.485939843687418,
            "unit": "iter/sec",
            "range": "stddev: 0.06590962490119955",
            "extra": "mean: 402.26234859999295 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[9-rebase-then-incremental-delete-type-delta-on-incremental-multi-pk_V2]",
            "value": 2.5032558396818807,
            "unit": "iter/sec",
            "range": "stddev: 0.06847683096826189",
            "extra": "mean: 399.47974319999275 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[10-rebase-then-incremental-delete-type-delta-on-incremental-multi-pk-delete-all_V2]",
            "value": 2.2474730776930256,
            "unit": "iter/sec",
            "range": "stddev: 0.012701518980319125",
            "extra": "mean: 444.94415080000635 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[11-rebase-then-incremental-empty-csv-delta-case_V1]",
            "value": 2.294879334032937,
            "unit": "iter/sec",
            "range": "stddev: 0.007946525231928545",
            "extra": "mean: 435.75275839999676 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[11-rebase-then-incremental-empty-csv-delta-case_V2]",
            "value": 2.4470561837027685,
            "unit": "iter/sec",
            "range": "stddev: 0.07190808080176782",
            "extra": "mean: 408.65428700000166 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[12-rebase-then-incremental-single-hash-bucket_V1]",
            "value": 2.4998268169978126,
            "unit": "iter/sec",
            "range": "stddev: 0.07239203357365431",
            "extra": "mean: 400.0277111999935 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[12-rebase-then-incremental-single-hash-bucket_V2]",
            "value": 2.534577769383482,
            "unit": "iter/sec",
            "range": "stddev: 0.0724400626656033",
            "extra": "mean: 394.54303279999294 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[13-rebase-then-incremental-drop-duplicates-false-on-incremental-v2-only_V2]",
            "value": 2.4246371328316294,
            "unit": "iter/sec",
            "range": "stddev: 0.0820011271693076",
            "extra": "mean: 412.43284879999464 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[14-rebase-then-empty-incremental-delta_V1]",
            "value": 2.2496498289561915,
            "unit": "iter/sec",
            "range": "stddev: 0.009563120887652507",
            "extra": "mean: 444.5136247999926 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[14-rebase-then-empty-incremental-delta_V2]",
            "value": 2.305180178721795,
            "unit": "iter/sec",
            "range": "stddev: 0.008989215154934648",
            "extra": "mean: 433.80556939999906 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}