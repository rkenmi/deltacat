window.BENCHMARK_DATA = {
  "lastUpdate": 1700691680254,
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
        "date": 1700691676630,
        "tool": "pytest",
        "benches": [
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[1-incremental-pkstr-sknone-norcf_V1]",
            "value": 2.158623266172861,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 463.2582330000332 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[1-incremental-pkstr-sknone-norcf_V2]",
            "value": 2.4307274755081174,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 411.3994720000278 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[2-incremental-pkstr-skstr-norcf_V1]",
            "value": 2.401755235389595,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 416.36216100005186 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[2-incremental-pkstr-skstr-norcf_V2]",
            "value": 2.4282505741102574,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 411.81911399996807 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[3-incremental-pkstr-multiskstr-norcf_V1]",
            "value": 2.407238351961715,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 415.4137869999772 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[3-incremental-pkstr-multiskstr-norcf_V2]",
            "value": 2.3598265729470564,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 423.75995399999056 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[4-incremental-duplicate-pk_V1]",
            "value": 2.3965420295053392,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 417.26787500005 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[4-incremental-duplicate-pk_V2]",
            "value": 2.3577482757032637,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 424.1334879999954 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[5-incremental-decimal-pk-simple_V1]",
            "value": 2.35964451568386,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 423.79264900000635 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[5-incremental-decimal-pk-simple_V2]",
            "value": 2.386652360276615,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 418.9969250000445 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[6-incremental-integer-pk-simple_V1]",
            "value": 2.313802890260179,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 432.1889319999741 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[6-incremental-integer-pk-simple_V2]",
            "value": 2.3205883634587874,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 430.9251980000113 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[7-incremental-timestamp-pk-simple_V1]",
            "value": 2.3005782560960855,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 434.67332500000566 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[7-incremental-timestamp-pk-simple_V2]",
            "value": 2.3428454420177904,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 426.8313999999691 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[8-incremental-decimal-timestamp-pk-multi_V1]",
            "value": 2.3717781454378244,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 421.62459499996885 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[8-incremental-decimal-timestamp-pk-multi_V2]",
            "value": 2.392643641027097,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 417.9477389999988 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[9-incremental-decimal-pk-multi-dup_V1]",
            "value": 2.3661810674727164,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 422.6219259999766 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[9-incremental-decimal-pk-multi-dup_V2]",
            "value": 2.3594554330613042,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 423.82661100003816 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[10-incremental-decimal-pk-partitionless_V1]",
            "value": 2.390792478636747,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 418.27135099998713 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[10-incremental-decimal-pk-partitionless_V2]",
            "value": 2.1622016287700045,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 462.4915580000106 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[11-incremental-decimal-hash-bucket-single_V1]",
            "value": 2.334565939792935,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 428.3451509999736 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[11-incremental-decimal-hash-bucket-single_V2]",
            "value": 2.3268597612793105,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 429.76375999995753 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[1-rebase-then-incremental-sanity_V1]",
            "value": 2.396679054514237,
            "unit": "iter/sec",
            "range": "stddev: 0.03154811194969186",
            "extra": "mean: 417.2440186000131 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[1-rebase-then-incremental-sanity_V2]",
            "value": 2.6501260273264027,
            "unit": "iter/sec",
            "range": "stddev: 0.06494509121328587",
            "extra": "mean: 377.34054519997926 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[2-rebase-then-incremental-pk-multi_V1]",
            "value": 2.6426073671196524,
            "unit": "iter/sec",
            "range": "stddev: 0.06251537529961151",
            "extra": "mean: 378.41414220000615 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[2-rebase-then-incremental-pk-multi_V2]",
            "value": 2.60326747096476,
            "unit": "iter/sec",
            "range": "stddev: 0.06515431932243512",
            "extra": "mean: 384.13263760000973 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[3-rebase-then-incremental-no-sk-no-partition-key_V1]",
            "value": 2.423479523463642,
            "unit": "iter/sec",
            "range": "stddev: 0.009579197102951085",
            "extra": "mean: 412.62985319999643 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[3-rebase-then-incremental-no-sk-no-partition-key_V2]",
            "value": 2.475317104445833,
            "unit": "iter/sec",
            "range": "stddev: 0.005301662482467753",
            "extra": "mean: 403.98864379999395 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[4-rebase-then-incremental-partial-deltas-on-incremental-deltas_V1]",
            "value": 2.5596943346540337,
            "unit": "iter/sec",
            "range": "stddev: 0.06749844990408127",
            "extra": "mean: 390.6716463999828 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[4-rebase-then-incremental-partial-deltas-on-incremental-deltas_V2]",
            "value": 2.528922268623992,
            "unit": "iter/sec",
            "range": "stddev: 0.06604266239115827",
            "extra": "mean: 395.4253605999952 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[5-rebase-then-incremental-partial-deltas-on-incremental-deltas-2_V1]",
            "value": 2.564700682552132,
            "unit": "iter/sec",
            "range": "stddev: 0.0663383384682773",
            "extra": "mean: 389.9090473999877 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[5-rebase-then-incremental-partial-deltas-on-incremental-deltas-2_V2]",
            "value": 2.4032178972288643,
            "unit": "iter/sec",
            "range": "stddev: 0.006334599707510339",
            "extra": "mean: 416.10875200001374 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[6-rebase-then-incremental-hash-bucket-GT-records-per-compacted-file-v2-only_V2]",
            "value": 2.2329314328278316,
            "unit": "iter/sec",
            "range": "stddev: 0.07557909269066622",
            "extra": "mean: 447.8417856000078 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[7-rebase-then-incremental-no-pk-compactor-v2-only_V2]",
            "value": 2.5336535741051582,
            "unit": "iter/sec",
            "range": "stddev: 0.07494348727100636",
            "extra": "mean: 394.68694940001114 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[8-rebase-then-incremental-delete-type-delta-on-incremental_V1]",
            "value": 2.4397157057061425,
            "unit": "iter/sec",
            "range": "stddev: 0.07692169241747122",
            "extra": "mean: 409.8838227999863 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[8-rebase-then-incremental-delete-type-delta-on-incremental_V2]",
            "value": 2.279855098757051,
            "unit": "iter/sec",
            "range": "stddev: 0.00916539902946361",
            "extra": "mean: 438.6243671999978 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[9-rebase-then-incremental-delete-type-delta-on-incremental-multi-pk_V2]",
            "value": 2.2905362493292274,
            "unit": "iter/sec",
            "range": "stddev: 0.00819877908532446",
            "extra": "mean: 436.57898899999736 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[10-rebase-then-incremental-delete-type-delta-on-incremental-multi-pk-delete-all_V2]",
            "value": 2.2842057763796624,
            "unit": "iter/sec",
            "range": "stddev: 0.00699801841690171",
            "extra": "mean: 437.7889287999892 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[11-rebase-then-incremental-empty-csv-delta-case_V1]",
            "value": 2.4520309768487825,
            "unit": "iter/sec",
            "range": "stddev: 0.07813985413340994",
            "extra": "mean: 407.8251903999785 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[11-rebase-then-incremental-empty-csv-delta-case_V2]",
            "value": 2.501638031305827,
            "unit": "iter/sec",
            "range": "stddev: 0.07135419270807816",
            "extra": "mean: 399.73808660000714 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[12-rebase-then-incremental-single-hash-bucket_V1]",
            "value": 2.3092642405586217,
            "unit": "iter/sec",
            "range": "stddev: 0.0037371631982574672",
            "extra": "mean: 433.03836019999835 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[12-rebase-then-incremental-single-hash-bucket_V2]",
            "value": 2.3051129465926286,
            "unit": "iter/sec",
            "range": "stddev: 0.009988742139881874",
            "extra": "mean: 433.81822200000215 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[13-rebase-then-incremental-drop-duplicates-false-on-incremental-v2-only_V2]",
            "value": 2.4737645053808324,
            "unit": "iter/sec",
            "range": "stddev: 0.07937509384615048",
            "extra": "mean: 404.24219759999005 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[14-rebase-then-empty-incremental-delta_V1]",
            "value": 2.457326479951442,
            "unit": "iter/sec",
            "range": "stddev: 0.0794433446479538",
            "extra": "mean: 406.94633299998486 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[14-rebase-then-empty-incremental-delta_V2]",
            "value": 2.4387017452444684,
            "unit": "iter/sec",
            "range": "stddev: 0.08389638716960149",
            "extra": "mean: 410.05424380001614 msec\nrounds: 5"
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
        "date": 1700691676630,
        "tool": "pytest",
        "benches": [
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[1-incremental-pkstr-sknone-norcf_V1]",
            "value": 2.158623266172861,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 463.2582330000332 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[1-incremental-pkstr-sknone-norcf_V2]",
            "value": 2.4307274755081174,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 411.3994720000278 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[2-incremental-pkstr-skstr-norcf_V1]",
            "value": 2.401755235389595,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 416.36216100005186 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[2-incremental-pkstr-skstr-norcf_V2]",
            "value": 2.4282505741102574,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 411.81911399996807 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[3-incremental-pkstr-multiskstr-norcf_V1]",
            "value": 2.407238351961715,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 415.4137869999772 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[3-incremental-pkstr-multiskstr-norcf_V2]",
            "value": 2.3598265729470564,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 423.75995399999056 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[4-incremental-duplicate-pk_V1]",
            "value": 2.3965420295053392,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 417.26787500005 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[4-incremental-duplicate-pk_V2]",
            "value": 2.3577482757032637,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 424.1334879999954 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[5-incremental-decimal-pk-simple_V1]",
            "value": 2.35964451568386,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 423.79264900000635 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[5-incremental-decimal-pk-simple_V2]",
            "value": 2.386652360276615,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 418.9969250000445 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[6-incremental-integer-pk-simple_V1]",
            "value": 2.313802890260179,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 432.1889319999741 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[6-incremental-integer-pk-simple_V2]",
            "value": 2.3205883634587874,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 430.9251980000113 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[7-incremental-timestamp-pk-simple_V1]",
            "value": 2.3005782560960855,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 434.67332500000566 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[7-incremental-timestamp-pk-simple_V2]",
            "value": 2.3428454420177904,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 426.8313999999691 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[8-incremental-decimal-timestamp-pk-multi_V1]",
            "value": 2.3717781454378244,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 421.62459499996885 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[8-incremental-decimal-timestamp-pk-multi_V2]",
            "value": 2.392643641027097,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 417.9477389999988 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[9-incremental-decimal-pk-multi-dup_V1]",
            "value": 2.3661810674727164,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 422.6219259999766 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[9-incremental-decimal-pk-multi-dup_V2]",
            "value": 2.3594554330613042,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 423.82661100003816 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[10-incremental-decimal-pk-partitionless_V1]",
            "value": 2.390792478636747,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 418.27135099998713 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[10-incremental-decimal-pk-partitionless_V2]",
            "value": 2.1622016287700045,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 462.4915580000106 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[11-incremental-decimal-hash-bucket-single_V1]",
            "value": 2.334565939792935,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 428.3451509999736 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[11-incremental-decimal-hash-bucket-single_V2]",
            "value": 2.3268597612793105,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 429.76375999995753 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[1-rebase-then-incremental-sanity_V1]",
            "value": 2.396679054514237,
            "unit": "iter/sec",
            "range": "stddev: 0.03154811194969186",
            "extra": "mean: 417.2440186000131 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[1-rebase-then-incremental-sanity_V2]",
            "value": 2.6501260273264027,
            "unit": "iter/sec",
            "range": "stddev: 0.06494509121328587",
            "extra": "mean: 377.34054519997926 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[2-rebase-then-incremental-pk-multi_V1]",
            "value": 2.6426073671196524,
            "unit": "iter/sec",
            "range": "stddev: 0.06251537529961151",
            "extra": "mean: 378.41414220000615 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[2-rebase-then-incremental-pk-multi_V2]",
            "value": 2.60326747096476,
            "unit": "iter/sec",
            "range": "stddev: 0.06515431932243512",
            "extra": "mean: 384.13263760000973 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[3-rebase-then-incremental-no-sk-no-partition-key_V1]",
            "value": 2.423479523463642,
            "unit": "iter/sec",
            "range": "stddev: 0.009579197102951085",
            "extra": "mean: 412.62985319999643 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[3-rebase-then-incremental-no-sk-no-partition-key_V2]",
            "value": 2.475317104445833,
            "unit": "iter/sec",
            "range": "stddev: 0.005301662482467753",
            "extra": "mean: 403.98864379999395 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[4-rebase-then-incremental-partial-deltas-on-incremental-deltas_V1]",
            "value": 2.5596943346540337,
            "unit": "iter/sec",
            "range": "stddev: 0.06749844990408127",
            "extra": "mean: 390.6716463999828 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[4-rebase-then-incremental-partial-deltas-on-incremental-deltas_V2]",
            "value": 2.528922268623992,
            "unit": "iter/sec",
            "range": "stddev: 0.06604266239115827",
            "extra": "mean: 395.4253605999952 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[5-rebase-then-incremental-partial-deltas-on-incremental-deltas-2_V1]",
            "value": 2.564700682552132,
            "unit": "iter/sec",
            "range": "stddev: 0.0663383384682773",
            "extra": "mean: 389.9090473999877 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[5-rebase-then-incremental-partial-deltas-on-incremental-deltas-2_V2]",
            "value": 2.4032178972288643,
            "unit": "iter/sec",
            "range": "stddev: 0.006334599707510339",
            "extra": "mean: 416.10875200001374 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[6-rebase-then-incremental-hash-bucket-GT-records-per-compacted-file-v2-only_V2]",
            "value": 2.2329314328278316,
            "unit": "iter/sec",
            "range": "stddev: 0.07557909269066622",
            "extra": "mean: 447.8417856000078 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[7-rebase-then-incremental-no-pk-compactor-v2-only_V2]",
            "value": 2.5336535741051582,
            "unit": "iter/sec",
            "range": "stddev: 0.07494348727100636",
            "extra": "mean: 394.68694940001114 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[8-rebase-then-incremental-delete-type-delta-on-incremental_V1]",
            "value": 2.4397157057061425,
            "unit": "iter/sec",
            "range": "stddev: 0.07692169241747122",
            "extra": "mean: 409.8838227999863 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[8-rebase-then-incremental-delete-type-delta-on-incremental_V2]",
            "value": 2.279855098757051,
            "unit": "iter/sec",
            "range": "stddev: 0.00916539902946361",
            "extra": "mean: 438.6243671999978 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[9-rebase-then-incremental-delete-type-delta-on-incremental-multi-pk_V2]",
            "value": 2.2905362493292274,
            "unit": "iter/sec",
            "range": "stddev: 0.00819877908532446",
            "extra": "mean: 436.57898899999736 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[10-rebase-then-incremental-delete-type-delta-on-incremental-multi-pk-delete-all_V2]",
            "value": 2.2842057763796624,
            "unit": "iter/sec",
            "range": "stddev: 0.00699801841690171",
            "extra": "mean: 437.7889287999892 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[11-rebase-then-incremental-empty-csv-delta-case_V1]",
            "value": 2.4520309768487825,
            "unit": "iter/sec",
            "range": "stddev: 0.07813985413340994",
            "extra": "mean: 407.8251903999785 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[11-rebase-then-incremental-empty-csv-delta-case_V2]",
            "value": 2.501638031305827,
            "unit": "iter/sec",
            "range": "stddev: 0.07135419270807816",
            "extra": "mean: 399.73808660000714 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[12-rebase-then-incremental-single-hash-bucket_V1]",
            "value": 2.3092642405586217,
            "unit": "iter/sec",
            "range": "stddev: 0.0037371631982574672",
            "extra": "mean: 433.03836019999835 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[12-rebase-then-incremental-single-hash-bucket_V2]",
            "value": 2.3051129465926286,
            "unit": "iter/sec",
            "range": "stddev: 0.009988742139881874",
            "extra": "mean: 433.81822200000215 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[13-rebase-then-incremental-drop-duplicates-false-on-incremental-v2-only_V2]",
            "value": 2.4737645053808324,
            "unit": "iter/sec",
            "range": "stddev: 0.07937509384615048",
            "extra": "mean: 404.24219759999005 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[14-rebase-then-empty-incremental-delta_V1]",
            "value": 2.457326479951442,
            "unit": "iter/sec",
            "range": "stddev: 0.0794433446479538",
            "extra": "mean: 406.94633299998486 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[14-rebase-then-empty-incremental-delta_V2]",
            "value": 2.4387017452444684,
            "unit": "iter/sec",
            "range": "stddev: 0.08389638716960149",
            "extra": "mean: 410.05424380001614 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}