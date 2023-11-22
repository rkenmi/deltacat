window.BENCHMARK_DATA = {
  "lastUpdate": 1700694961021,
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
        "date": 1700691693862,
        "tool": "pytest",
        "benches": [
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[1-incremental-pkstr-sknone-norcf_V1]",
            "value": 1.8230396354375649,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 548.5344260000034 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[1-incremental-pkstr-sknone-norcf_V2]",
            "value": 2.322956530101045,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 430.4858859999854 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[2-incremental-pkstr-skstr-norcf_V1]",
            "value": 2.3939366258231907,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 417.722002000005 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[2-incremental-pkstr-skstr-norcf_V2]",
            "value": 2.4190165743564216,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 413.3911320000152 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[3-incremental-pkstr-multiskstr-norcf_V1]",
            "value": 2.3188586090040446,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 431.2466469999663 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[3-incremental-pkstr-multiskstr-norcf_V2]",
            "value": 2.329883053011196,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 429.20609200001536 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[4-incremental-duplicate-pk_V1]",
            "value": 2.3763630185568974,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 420.811126999979 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[4-incremental-duplicate-pk_V2]",
            "value": 2.4504860966782576,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 408.08229900000015 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[5-incremental-decimal-pk-simple_V1]",
            "value": 2.3769576376492636,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 420.70585700002994 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[5-incremental-decimal-pk-simple_V2]",
            "value": 2.4033587804164704,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 416.0843600000135 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[6-incremental-integer-pk-simple_V1]",
            "value": 2.3763453545556406,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 420.81425499998204 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[6-incremental-integer-pk-simple_V2]",
            "value": 2.3504349049662165,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 425.45317799999793 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[7-incremental-timestamp-pk-simple_V1]",
            "value": 2.3422169421573504,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 426.9459340000026 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[7-incremental-timestamp-pk-simple_V2]",
            "value": 2.396185060602292,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 417.33003699999927 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[8-incremental-decimal-timestamp-pk-multi_V1]",
            "value": 2.3606254678300247,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 423.6165430000369 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[8-incremental-decimal-timestamp-pk-multi_V2]",
            "value": 1.8933301145711257,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 528.1699120000098 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[9-incremental-decimal-pk-multi-dup_V1]",
            "value": 1.7213812961871897,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 580.9288170000286 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[9-incremental-decimal-pk-multi-dup_V2]",
            "value": 2.3346308153038753,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 428.3332480000013 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[10-incremental-decimal-pk-partitionless_V1]",
            "value": 2.3907111328768926,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 418.2855829999994 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[10-incremental-decimal-pk-partitionless_V2]",
            "value": 2.3602082632664723,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 423.691424000026 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[11-incremental-decimal-hash-bucket-single_V1]",
            "value": 2.3538408421326165,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 424.8375600000145 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[11-incremental-decimal-hash-bucket-single_V2]",
            "value": 2.21140733465205,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 452.2007250000115 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[1-rebase-then-incremental-sanity_V1]",
            "value": 2.7120314223163553,
            "unit": "iter/sec",
            "range": "stddev: 0.0495891656361153",
            "extra": "mean: 368.7272912000026 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[1-rebase-then-incremental-sanity_V2]",
            "value": 2.590970090848099,
            "unit": "iter/sec",
            "range": "stddev: 0.003071474023580329",
            "extra": "mean: 385.9558254000035 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[2-rebase-then-incremental-pk-multi_V1]",
            "value": 2.5093174268356737,
            "unit": "iter/sec",
            "range": "stddev: 0.0027627806611765756",
            "extra": "mean: 398.5147472000108 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[2-rebase-then-incremental-pk-multi_V2]",
            "value": 2.667830065384345,
            "unit": "iter/sec",
            "range": "stddev: 0.05601726789486249",
            "extra": "mean: 374.83646839999665 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[3-rebase-then-incremental-no-sk-no-partition-key_V1]",
            "value": 2.7146733379930796,
            "unit": "iter/sec",
            "range": "stddev: 0.0561669149346586",
            "extra": "mean: 368.36844639999526 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[3-rebase-then-incremental-no-sk-no-partition-key_V2]",
            "value": 2.708447020171399,
            "unit": "iter/sec",
            "range": "stddev: 0.054426957521657306",
            "extra": "mean: 369.2152707999867 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[4-rebase-then-incremental-partial-deltas-on-incremental-deltas_V1]",
            "value": 2.6586274381225703,
            "unit": "iter/sec",
            "range": "stddev: 0.05511432473674677",
            "extra": "mean: 376.13393499999574 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[4-rebase-then-incremental-partial-deltas-on-incremental-deltas_V2]",
            "value": 2.468954250814026,
            "unit": "iter/sec",
            "range": "stddev: 0.005740865232954345",
            "extra": "mean: 405.029781199994 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[5-rebase-then-incremental-partial-deltas-on-incremental-deltas-2_V1]",
            "value": 2.466560414972579,
            "unit": "iter/sec",
            "range": "stddev: 0.00744388422160269",
            "extra": "mean: 405.42286899999453 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[5-rebase-then-incremental-partial-deltas-on-incremental-deltas-2_V2]",
            "value": 2.64097726807341,
            "unit": "iter/sec",
            "range": "stddev: 0.0609021231393256",
            "extra": "mean: 378.6477119999972 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[6-rebase-then-incremental-hash-bucket-GT-records-per-compacted-file-v2-only_V2]",
            "value": 2.3342008783043653,
            "unit": "iter/sec",
            "range": "stddev: 0.05841304145344094",
            "extra": "mean: 428.4121427999935 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[7-rebase-then-incremental-no-pk-compactor-v2-only_V2]",
            "value": 2.629839821837049,
            "unit": "iter/sec",
            "range": "stddev: 0.06206527594001405",
            "extra": "mean: 380.25129580000794 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[8-rebase-then-incremental-delete-type-delta-on-incremental_V1]",
            "value": 2.4236385111052363,
            "unit": "iter/sec",
            "range": "stddev: 0.0036058661129585146",
            "extra": "mean: 412.6027851999993 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[8-rebase-then-incremental-delete-type-delta-on-incremental_V2]",
            "value": 2.412663196700421,
            "unit": "iter/sec",
            "range": "stddev: 0.008041680136977276",
            "extra": "mean: 414.4797340000082 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[9-rebase-then-incremental-delete-type-delta-on-incremental-multi-pk_V2]",
            "value": 2.553627275962173,
            "unit": "iter/sec",
            "range": "stddev: 0.060825276680483396",
            "extra": "mean: 391.59982720000244 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[10-rebase-then-incremental-delete-type-delta-on-incremental-multi-pk-delete-all_V2]",
            "value": 2.550597593257937,
            "unit": "iter/sec",
            "range": "stddev: 0.06477545837847358",
            "extra": "mean: 392.06498219998593 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[11-rebase-then-incremental-empty-csv-delta-case_V1]",
            "value": 2.5533051342569517,
            "unit": "iter/sec",
            "range": "stddev: 0.06278934777913388",
            "extra": "mean: 391.64923399999907 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[11-rebase-then-incremental-empty-csv-delta-case_V2]",
            "value": 2.548712144902993,
            "unit": "iter/sec",
            "range": "stddev: 0.06431364975977584",
            "extra": "mean: 392.3550182000099 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[12-rebase-then-incremental-single-hash-bucket_V1]",
            "value": 2.3903165747558273,
            "unit": "iter/sec",
            "range": "stddev: 0.0027358740792996464",
            "extra": "mean: 418.3546273999923 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[12-rebase-then-incremental-single-hash-bucket_V2]",
            "value": 2.3846415702177026,
            "unit": "iter/sec",
            "range": "stddev: 0.004418387722958736",
            "extra": "mean: 419.350233800003 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[13-rebase-then-incremental-drop-duplicates-false-on-incremental-v2-only_V2]",
            "value": 2.5306448040294036,
            "unit": "iter/sec",
            "range": "stddev: 0.06893292317174789",
            "extra": "mean: 395.15620619999936 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[14-rebase-then-empty-incremental-delta_V1]",
            "value": 2.5420791673745855,
            "unit": "iter/sec",
            "range": "stddev: 0.06629949248586958",
            "extra": "mean: 393.3787794000068 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[14-rebase-then-empty-incremental-delta_V2]",
            "value": 2.529781507481653,
            "unit": "iter/sec",
            "range": "stddev: 0.06317955853502852",
            "extra": "mean: 395.2910545999998 msec\nrounds: 5"
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
        "date": 1700691693862,
        "tool": "pytest",
        "benches": [
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[1-incremental-pkstr-sknone-norcf_V1]",
            "value": 1.8230396354375649,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 548.5344260000034 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[1-incremental-pkstr-sknone-norcf_V2]",
            "value": 2.322956530101045,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 430.4858859999854 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[2-incremental-pkstr-skstr-norcf_V1]",
            "value": 2.3939366258231907,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 417.722002000005 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[2-incremental-pkstr-skstr-norcf_V2]",
            "value": 2.4190165743564216,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 413.3911320000152 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[3-incremental-pkstr-multiskstr-norcf_V1]",
            "value": 2.3188586090040446,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 431.2466469999663 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[3-incremental-pkstr-multiskstr-norcf_V2]",
            "value": 2.329883053011196,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 429.20609200001536 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[4-incremental-duplicate-pk_V1]",
            "value": 2.3763630185568974,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 420.811126999979 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[4-incremental-duplicate-pk_V2]",
            "value": 2.4504860966782576,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 408.08229900000015 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[5-incremental-decimal-pk-simple_V1]",
            "value": 2.3769576376492636,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 420.70585700002994 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[5-incremental-decimal-pk-simple_V2]",
            "value": 2.4033587804164704,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 416.0843600000135 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[6-incremental-integer-pk-simple_V1]",
            "value": 2.3763453545556406,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 420.81425499998204 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[6-incremental-integer-pk-simple_V2]",
            "value": 2.3504349049662165,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 425.45317799999793 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[7-incremental-timestamp-pk-simple_V1]",
            "value": 2.3422169421573504,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 426.9459340000026 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[7-incremental-timestamp-pk-simple_V2]",
            "value": 2.396185060602292,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 417.33003699999927 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[8-incremental-decimal-timestamp-pk-multi_V1]",
            "value": 2.3606254678300247,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 423.6165430000369 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[8-incremental-decimal-timestamp-pk-multi_V2]",
            "value": 1.8933301145711257,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 528.1699120000098 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[9-incremental-decimal-pk-multi-dup_V1]",
            "value": 1.7213812961871897,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 580.9288170000286 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[9-incremental-decimal-pk-multi-dup_V2]",
            "value": 2.3346308153038753,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 428.3332480000013 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[10-incremental-decimal-pk-partitionless_V1]",
            "value": 2.3907111328768926,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 418.2855829999994 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[10-incremental-decimal-pk-partitionless_V2]",
            "value": 2.3602082632664723,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 423.691424000026 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[11-incremental-decimal-hash-bucket-single_V1]",
            "value": 2.3538408421326165,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 424.8375600000145 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[11-incremental-decimal-hash-bucket-single_V2]",
            "value": 2.21140733465205,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 452.2007250000115 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[1-rebase-then-incremental-sanity_V1]",
            "value": 2.7120314223163553,
            "unit": "iter/sec",
            "range": "stddev: 0.0495891656361153",
            "extra": "mean: 368.7272912000026 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[1-rebase-then-incremental-sanity_V2]",
            "value": 2.590970090848099,
            "unit": "iter/sec",
            "range": "stddev: 0.003071474023580329",
            "extra": "mean: 385.9558254000035 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[2-rebase-then-incremental-pk-multi_V1]",
            "value": 2.5093174268356737,
            "unit": "iter/sec",
            "range": "stddev: 0.0027627806611765756",
            "extra": "mean: 398.5147472000108 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[2-rebase-then-incremental-pk-multi_V2]",
            "value": 2.667830065384345,
            "unit": "iter/sec",
            "range": "stddev: 0.05601726789486249",
            "extra": "mean: 374.83646839999665 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[3-rebase-then-incremental-no-sk-no-partition-key_V1]",
            "value": 2.7146733379930796,
            "unit": "iter/sec",
            "range": "stddev: 0.0561669149346586",
            "extra": "mean: 368.36844639999526 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[3-rebase-then-incremental-no-sk-no-partition-key_V2]",
            "value": 2.708447020171399,
            "unit": "iter/sec",
            "range": "stddev: 0.054426957521657306",
            "extra": "mean: 369.2152707999867 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[4-rebase-then-incremental-partial-deltas-on-incremental-deltas_V1]",
            "value": 2.6586274381225703,
            "unit": "iter/sec",
            "range": "stddev: 0.05511432473674677",
            "extra": "mean: 376.13393499999574 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[4-rebase-then-incremental-partial-deltas-on-incremental-deltas_V2]",
            "value": 2.468954250814026,
            "unit": "iter/sec",
            "range": "stddev: 0.005740865232954345",
            "extra": "mean: 405.029781199994 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[5-rebase-then-incremental-partial-deltas-on-incremental-deltas-2_V1]",
            "value": 2.466560414972579,
            "unit": "iter/sec",
            "range": "stddev: 0.00744388422160269",
            "extra": "mean: 405.42286899999453 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[5-rebase-then-incremental-partial-deltas-on-incremental-deltas-2_V2]",
            "value": 2.64097726807341,
            "unit": "iter/sec",
            "range": "stddev: 0.0609021231393256",
            "extra": "mean: 378.6477119999972 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[6-rebase-then-incremental-hash-bucket-GT-records-per-compacted-file-v2-only_V2]",
            "value": 2.3342008783043653,
            "unit": "iter/sec",
            "range": "stddev: 0.05841304145344094",
            "extra": "mean: 428.4121427999935 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[7-rebase-then-incremental-no-pk-compactor-v2-only_V2]",
            "value": 2.629839821837049,
            "unit": "iter/sec",
            "range": "stddev: 0.06206527594001405",
            "extra": "mean: 380.25129580000794 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[8-rebase-then-incremental-delete-type-delta-on-incremental_V1]",
            "value": 2.4236385111052363,
            "unit": "iter/sec",
            "range": "stddev: 0.0036058661129585146",
            "extra": "mean: 412.6027851999993 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[8-rebase-then-incremental-delete-type-delta-on-incremental_V2]",
            "value": 2.412663196700421,
            "unit": "iter/sec",
            "range": "stddev: 0.008041680136977276",
            "extra": "mean: 414.4797340000082 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[9-rebase-then-incremental-delete-type-delta-on-incremental-multi-pk_V2]",
            "value": 2.553627275962173,
            "unit": "iter/sec",
            "range": "stddev: 0.060825276680483396",
            "extra": "mean: 391.59982720000244 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[10-rebase-then-incremental-delete-type-delta-on-incremental-multi-pk-delete-all_V2]",
            "value": 2.550597593257937,
            "unit": "iter/sec",
            "range": "stddev: 0.06477545837847358",
            "extra": "mean: 392.06498219998593 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[11-rebase-then-incremental-empty-csv-delta-case_V1]",
            "value": 2.5533051342569517,
            "unit": "iter/sec",
            "range": "stddev: 0.06278934777913388",
            "extra": "mean: 391.64923399999907 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[11-rebase-then-incremental-empty-csv-delta-case_V2]",
            "value": 2.548712144902993,
            "unit": "iter/sec",
            "range": "stddev: 0.06431364975977584",
            "extra": "mean: 392.3550182000099 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[12-rebase-then-incremental-single-hash-bucket_V1]",
            "value": 2.3903165747558273,
            "unit": "iter/sec",
            "range": "stddev: 0.0027358740792996464",
            "extra": "mean: 418.3546273999923 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[12-rebase-then-incremental-single-hash-bucket_V2]",
            "value": 2.3846415702177026,
            "unit": "iter/sec",
            "range": "stddev: 0.004418387722958736",
            "extra": "mean: 419.350233800003 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[13-rebase-then-incremental-drop-duplicates-false-on-incremental-v2-only_V2]",
            "value": 2.5306448040294036,
            "unit": "iter/sec",
            "range": "stddev: 0.06893292317174789",
            "extra": "mean: 395.15620619999936 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[14-rebase-then-empty-incremental-delta_V1]",
            "value": 2.5420791673745855,
            "unit": "iter/sec",
            "range": "stddev: 0.06629949248586958",
            "extra": "mean: 393.3787794000068 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[14-rebase-then-empty-incremental-delta_V2]",
            "value": 2.529781507481653,
            "unit": "iter/sec",
            "range": "stddev: 0.06317955853502852",
            "extra": "mean: 395.2910545999998 msec\nrounds: 5"
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
        "date": 1700691715661,
        "tool": "pytest",
        "benches": [
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[1-incremental-pkstr-sknone-norcf_V1]",
            "value": 2.1109535152964973,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 473.719573999972 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[1-incremental-pkstr-sknone-norcf_V2]",
            "value": 2.0646118929247272,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 484.35253299999204 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[2-incremental-pkstr-skstr-norcf_V1]",
            "value": 2.168041948177427,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 461.2456880000195 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[2-incremental-pkstr-skstr-norcf_V2]",
            "value": 2.1983189476992604,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 454.89304499994887 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[3-incremental-pkstr-multiskstr-norcf_V1]",
            "value": 2.142263397724528,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 466.7960069999708 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[3-incremental-pkstr-multiskstr-norcf_V2]",
            "value": 2.161603229988716,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 462.6195899999743 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[4-incremental-duplicate-pk_V1]",
            "value": 2.130533914035801,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 469.3659150000258 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[4-incremental-duplicate-pk_V2]",
            "value": 2.165568481985549,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 461.77251299997124 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[5-incremental-decimal-pk-simple_V1]",
            "value": 2.1899893122607814,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 456.62323300001617 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[5-incremental-decimal-pk-simple_V2]",
            "value": 1.725029450047793,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 579.7002479999946 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[6-incremental-integer-pk-simple_V1]",
            "value": 2.147633696495392,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 465.6287530000327 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[6-incremental-integer-pk-simple_V2]",
            "value": 2.1853987343365295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 457.58240099996783 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[7-incremental-timestamp-pk-simple_V1]",
            "value": 2.1957150620562573,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 455.432500000029 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[7-incremental-timestamp-pk-simple_V2]",
            "value": 2.1344307198675887,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 468.50899899999376 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[8-incremental-decimal-timestamp-pk-multi_V1]",
            "value": 2.200186034089969,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 454.5070209999835 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[8-incremental-decimal-timestamp-pk-multi_V2]",
            "value": 2.1727159100748445,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 460.2534530000071 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[9-incremental-decimal-pk-multi-dup_V1]",
            "value": 2.2275365402978653,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 448.926417999985 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[9-incremental-decimal-pk-multi-dup_V2]",
            "value": 2.216295012092902,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 451.20346999999583 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[10-incremental-decimal-pk-partitionless_V1]",
            "value": 2.0357780666411567,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 491.21267999998963 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[10-incremental-decimal-pk-partitionless_V2]",
            "value": 2.2096484973369868,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 452.5606679999896 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[11-incremental-decimal-hash-bucket-single_V1]",
            "value": 2.2574197861150638,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 442.98362500001076 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[11-incremental-decimal-hash-bucket-single_V2]",
            "value": 2.3075304007091177,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 433.3637380000255 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[1-rebase-then-incremental-sanity_V1]",
            "value": 2.479551343394244,
            "unit": "iter/sec",
            "range": "stddev: 0.0043351491314633",
            "extra": "mean: 403.298767199999 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[1-rebase-then-incremental-sanity_V2]",
            "value": 2.6348450027738113,
            "unit": "iter/sec",
            "range": "stddev: 0.05851448052053069",
            "extra": "mean: 379.5289662000073 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[2-rebase-then-incremental-pk-multi_V1]",
            "value": 2.5116893406549976,
            "unit": "iter/sec",
            "range": "stddev: 0.06067648123766175",
            "extra": "mean: 398.1384098000035 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[2-rebase-then-incremental-pk-multi_V2]",
            "value": 2.5228881432906785,
            "unit": "iter/sec",
            "range": "stddev: 0.06094422071669278",
            "extra": "mean: 396.3711203999992 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[3-rebase-then-incremental-no-sk-no-partition-key_V1]",
            "value": 2.3744866425177418,
            "unit": "iter/sec",
            "range": "stddev: 0.005342149704539592",
            "extra": "mean: 421.1436619999972 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[3-rebase-then-incremental-no-sk-no-partition-key_V2]",
            "value": 2.3570347024169065,
            "unit": "iter/sec",
            "range": "stddev: 0.010257056653818639",
            "extra": "mean: 424.2618909999919 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[4-rebase-then-incremental-partial-deltas-on-incremental-deltas_V1]",
            "value": 2.4653961653825327,
            "unit": "iter/sec",
            "range": "stddev: 0.06512612516778452",
            "extra": "mean: 405.61432440000544 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[4-rebase-then-incremental-partial-deltas-on-incremental-deltas_V2]",
            "value": 2.591520267769161,
            "unit": "iter/sec",
            "range": "stddev: 0.056850403101788925",
            "extra": "mean: 385.8738874000096 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[5-rebase-then-incremental-partial-deltas-on-incremental-deltas-2_V1]",
            "value": 2.5389505881162178,
            "unit": "iter/sec",
            "range": "stddev: 0.0467476207135978",
            "extra": "mean: 393.86351379998814 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[5-rebase-then-incremental-partial-deltas-on-incremental-deltas-2_V2]",
            "value": 2.4309530072562495,
            "unit": "iter/sec",
            "range": "stddev: 0.0044356259074858845",
            "extra": "mean: 411.36130439998624 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[6-rebase-then-incremental-hash-bucket-GT-records-per-compacted-file-v2-only_V2]",
            "value": 2.1572899296195085,
            "unit": "iter/sec",
            "range": "stddev: 0.007039072419319779",
            "extra": "mean: 463.5445548000007 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[7-rebase-then-incremental-no-pk-compactor-v2-only_V2]",
            "value": 2.5027008572029232,
            "unit": "iter/sec",
            "range": "stddev: 0.07023494464984593",
            "extra": "mean: 399.56832920000807 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[8-rebase-then-incremental-delete-type-delta-on-incremental_V1]",
            "value": 2.515618090391163,
            "unit": "iter/sec",
            "range": "stddev: 0.0642331102826121",
            "extra": "mean: 397.5166197999897 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[8-rebase-then-incremental-delete-type-delta-on-incremental_V2]",
            "value": 2.4141617124764965,
            "unit": "iter/sec",
            "range": "stddev: 0.06882616398891488",
            "extra": "mean: 414.22245859999975 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[9-rebase-then-incremental-delete-type-delta-on-incremental-multi-pk_V2]",
            "value": 2.252676086154851,
            "unit": "iter/sec",
            "range": "stddev: 0.009792405842149677",
            "extra": "mean: 443.91646279999577 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[10-rebase-then-incremental-delete-type-delta-on-incremental-multi-pk-delete-all_V2]",
            "value": 2.194673860482126,
            "unit": "iter/sec",
            "range": "stddev: 0.007220272346881312",
            "extra": "mean: 455.64856720001217 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[11-rebase-then-incremental-empty-csv-delta-case_V1]",
            "value": 2.479462305034352,
            "unit": "iter/sec",
            "range": "stddev: 0.06652310051250482",
            "extra": "mean: 403.31324979999863 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[11-rebase-then-incremental-empty-csv-delta-case_V2]",
            "value": 2.47716962811457,
            "unit": "iter/sec",
            "range": "stddev: 0.06976502027278216",
            "extra": "mean: 403.68652540000767 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[12-rebase-then-incremental-single-hash-bucket_V1]",
            "value": 2.4782086958375737,
            "unit": "iter/sec",
            "range": "stddev: 0.06895990134356704",
            "extra": "mean: 403.5172669999952 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[12-rebase-then-incremental-single-hash-bucket_V2]",
            "value": 2.3663631470379367,
            "unit": "iter/sec",
            "range": "stddev: 0.0025994354167980507",
            "extra": "mean: 422.5894074000166 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[13-rebase-then-incremental-drop-duplicates-false-on-incremental-v2-only_V2]",
            "value": 2.300792371541509,
            "unit": "iter/sec",
            "range": "stddev: 0.007229647659552277",
            "extra": "mean: 434.6328735999805 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[14-rebase-then-empty-incremental-delta_V1]",
            "value": 2.4933400021202408,
            "unit": "iter/sec",
            "range": "stddev: 0.06793711490191685",
            "extra": "mean: 401.0684459999993 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[14-rebase-then-empty-incremental-delta_V2]",
            "value": 2.4560772617496958,
            "unit": "iter/sec",
            "range": "stddev: 0.06922376276797063",
            "extra": "mean: 407.15331540002353 msec\nrounds: 5"
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
        "date": 1700691715661,
        "tool": "pytest",
        "benches": [
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[1-incremental-pkstr-sknone-norcf_V1]",
            "value": 2.1109535152964973,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 473.719573999972 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[1-incremental-pkstr-sknone-norcf_V2]",
            "value": 2.0646118929247272,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 484.35253299999204 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[2-incremental-pkstr-skstr-norcf_V1]",
            "value": 2.168041948177427,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 461.2456880000195 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[2-incremental-pkstr-skstr-norcf_V2]",
            "value": 2.1983189476992604,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 454.89304499994887 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[3-incremental-pkstr-multiskstr-norcf_V1]",
            "value": 2.142263397724528,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 466.7960069999708 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[3-incremental-pkstr-multiskstr-norcf_V2]",
            "value": 2.161603229988716,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 462.6195899999743 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[4-incremental-duplicate-pk_V1]",
            "value": 2.130533914035801,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 469.3659150000258 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[4-incremental-duplicate-pk_V2]",
            "value": 2.165568481985549,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 461.77251299997124 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[5-incremental-decimal-pk-simple_V1]",
            "value": 2.1899893122607814,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 456.62323300001617 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[5-incremental-decimal-pk-simple_V2]",
            "value": 1.725029450047793,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 579.7002479999946 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[6-incremental-integer-pk-simple_V1]",
            "value": 2.147633696495392,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 465.6287530000327 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[6-incremental-integer-pk-simple_V2]",
            "value": 2.1853987343365295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 457.58240099996783 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[7-incremental-timestamp-pk-simple_V1]",
            "value": 2.1957150620562573,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 455.432500000029 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[7-incremental-timestamp-pk-simple_V2]",
            "value": 2.1344307198675887,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 468.50899899999376 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[8-incremental-decimal-timestamp-pk-multi_V1]",
            "value": 2.200186034089969,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 454.5070209999835 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[8-incremental-decimal-timestamp-pk-multi_V2]",
            "value": 2.1727159100748445,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 460.2534530000071 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[9-incremental-decimal-pk-multi-dup_V1]",
            "value": 2.2275365402978653,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 448.926417999985 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[9-incremental-decimal-pk-multi-dup_V2]",
            "value": 2.216295012092902,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 451.20346999999583 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[10-incremental-decimal-pk-partitionless_V1]",
            "value": 2.0357780666411567,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 491.21267999998963 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[10-incremental-decimal-pk-partitionless_V2]",
            "value": 2.2096484973369868,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 452.5606679999896 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[11-incremental-decimal-hash-bucket-single_V1]",
            "value": 2.2574197861150638,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 442.98362500001076 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[11-incremental-decimal-hash-bucket-single_V2]",
            "value": 2.3075304007091177,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 433.3637380000255 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[1-rebase-then-incremental-sanity_V1]",
            "value": 2.479551343394244,
            "unit": "iter/sec",
            "range": "stddev: 0.0043351491314633",
            "extra": "mean: 403.298767199999 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[1-rebase-then-incremental-sanity_V2]",
            "value": 2.6348450027738113,
            "unit": "iter/sec",
            "range": "stddev: 0.05851448052053069",
            "extra": "mean: 379.5289662000073 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[2-rebase-then-incremental-pk-multi_V1]",
            "value": 2.5116893406549976,
            "unit": "iter/sec",
            "range": "stddev: 0.06067648123766175",
            "extra": "mean: 398.1384098000035 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[2-rebase-then-incremental-pk-multi_V2]",
            "value": 2.5228881432906785,
            "unit": "iter/sec",
            "range": "stddev: 0.06094422071669278",
            "extra": "mean: 396.3711203999992 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[3-rebase-then-incremental-no-sk-no-partition-key_V1]",
            "value": 2.3744866425177418,
            "unit": "iter/sec",
            "range": "stddev: 0.005342149704539592",
            "extra": "mean: 421.1436619999972 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[3-rebase-then-incremental-no-sk-no-partition-key_V2]",
            "value": 2.3570347024169065,
            "unit": "iter/sec",
            "range": "stddev: 0.010257056653818639",
            "extra": "mean: 424.2618909999919 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[4-rebase-then-incremental-partial-deltas-on-incremental-deltas_V1]",
            "value": 2.4653961653825327,
            "unit": "iter/sec",
            "range": "stddev: 0.06512612516778452",
            "extra": "mean: 405.61432440000544 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[4-rebase-then-incremental-partial-deltas-on-incremental-deltas_V2]",
            "value": 2.591520267769161,
            "unit": "iter/sec",
            "range": "stddev: 0.056850403101788925",
            "extra": "mean: 385.8738874000096 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[5-rebase-then-incremental-partial-deltas-on-incremental-deltas-2_V1]",
            "value": 2.5389505881162178,
            "unit": "iter/sec",
            "range": "stddev: 0.0467476207135978",
            "extra": "mean: 393.86351379998814 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[5-rebase-then-incremental-partial-deltas-on-incremental-deltas-2_V2]",
            "value": 2.4309530072562495,
            "unit": "iter/sec",
            "range": "stddev: 0.0044356259074858845",
            "extra": "mean: 411.36130439998624 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[6-rebase-then-incremental-hash-bucket-GT-records-per-compacted-file-v2-only_V2]",
            "value": 2.1572899296195085,
            "unit": "iter/sec",
            "range": "stddev: 0.007039072419319779",
            "extra": "mean: 463.5445548000007 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[7-rebase-then-incremental-no-pk-compactor-v2-only_V2]",
            "value": 2.5027008572029232,
            "unit": "iter/sec",
            "range": "stddev: 0.07023494464984593",
            "extra": "mean: 399.56832920000807 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[8-rebase-then-incremental-delete-type-delta-on-incremental_V1]",
            "value": 2.515618090391163,
            "unit": "iter/sec",
            "range": "stddev: 0.0642331102826121",
            "extra": "mean: 397.5166197999897 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[8-rebase-then-incremental-delete-type-delta-on-incremental_V2]",
            "value": 2.4141617124764965,
            "unit": "iter/sec",
            "range": "stddev: 0.06882616398891488",
            "extra": "mean: 414.22245859999975 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[9-rebase-then-incremental-delete-type-delta-on-incremental-multi-pk_V2]",
            "value": 2.252676086154851,
            "unit": "iter/sec",
            "range": "stddev: 0.009792405842149677",
            "extra": "mean: 443.91646279999577 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[10-rebase-then-incremental-delete-type-delta-on-incremental-multi-pk-delete-all_V2]",
            "value": 2.194673860482126,
            "unit": "iter/sec",
            "range": "stddev: 0.007220272346881312",
            "extra": "mean: 455.64856720001217 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[11-rebase-then-incremental-empty-csv-delta-case_V1]",
            "value": 2.479462305034352,
            "unit": "iter/sec",
            "range": "stddev: 0.06652310051250482",
            "extra": "mean: 403.31324979999863 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[11-rebase-then-incremental-empty-csv-delta-case_V2]",
            "value": 2.47716962811457,
            "unit": "iter/sec",
            "range": "stddev: 0.06976502027278216",
            "extra": "mean: 403.68652540000767 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[12-rebase-then-incremental-single-hash-bucket_V1]",
            "value": 2.4782086958375737,
            "unit": "iter/sec",
            "range": "stddev: 0.06895990134356704",
            "extra": "mean: 403.5172669999952 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[12-rebase-then-incremental-single-hash-bucket_V2]",
            "value": 2.3663631470379367,
            "unit": "iter/sec",
            "range": "stddev: 0.0025994354167980507",
            "extra": "mean: 422.5894074000166 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[13-rebase-then-incremental-drop-duplicates-false-on-incremental-v2-only_V2]",
            "value": 2.300792371541509,
            "unit": "iter/sec",
            "range": "stddev: 0.007229647659552277",
            "extra": "mean: 434.6328735999805 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[14-rebase-then-empty-incremental-delta_V1]",
            "value": 2.4933400021202408,
            "unit": "iter/sec",
            "range": "stddev: 0.06793711490191685",
            "extra": "mean: 401.0684459999993 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[14-rebase-then-empty-incremental-delta_V2]",
            "value": 2.4560772617496958,
            "unit": "iter/sec",
            "range": "stddev: 0.06922376276797063",
            "extra": "mean: 407.15331540002353 msec\nrounds: 5"
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
          "id": "96dffa9d13925a1af8462b3f336bf6cef19ddc1e",
          "message": "[Testing] Benchmarks",
          "timestamp": "2021-12-03T22:20:44Z",
          "url": "https://github.com/rkenmi/deltacat/pull/2/commits/96dffa9d13925a1af8462b3f336bf6cef19ddc1e"
        },
        "date": 1700694960369,
        "tool": "pytest",
        "benches": [
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[1-incremental-pkstr-sknone-norcf_V1]",
            "value": 2.288922622776194,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 436.886764999997 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[1-incremental-pkstr-sknone-norcf_V2]",
            "value": 2.552550167105911,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 391.76507200005517 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[2-incremental-pkstr-skstr-norcf_V1]",
            "value": 2.52671662354361,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 395.7705389999546 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[2-incremental-pkstr-skstr-norcf_V2]",
            "value": 2.5134411859826478,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 397.8609110000093 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[3-incremental-pkstr-multiskstr-norcf_V1]",
            "value": 2.4372608120986685,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 410.29667199995856 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[3-incremental-pkstr-multiskstr-norcf_V2]",
            "value": 2.512859691396058,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 397.9529789999674 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[4-incremental-duplicate-pk_V1]",
            "value": 2.3456516362743134,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 426.32076500001403 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[4-incremental-duplicate-pk_V2]",
            "value": 2.5622474772192,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 390.2823630000398 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[5-incremental-decimal-pk-simple_V1]",
            "value": 2.4546832095818067,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 407.3845440000241 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[5-incremental-decimal-pk-simple_V2]",
            "value": 1.73743355745693,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 575.561577999963 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[6-incremental-integer-pk-simple_V1]",
            "value": 2.4285585585985494,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 411.7668880000451 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[6-incremental-integer-pk-simple_V2]",
            "value": 2.4126179397123293,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 414.48750899996867 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[7-incremental-timestamp-pk-simple_V1]",
            "value": 2.3258897866982906,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 429.94298600001457 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[7-incremental-timestamp-pk-simple_V2]",
            "value": 2.4402302627629275,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 409.7973930000194 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[8-incremental-decimal-timestamp-pk-multi_V1]",
            "value": 2.4441847557887058,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 409.1343740000184 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[8-incremental-decimal-timestamp-pk-multi_V2]",
            "value": 2.4261525208885613,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 412.1752409999999 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[9-incremental-decimal-pk-multi-dup_V1]",
            "value": 2.4233517352644807,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 412.6516120000474 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[9-incremental-decimal-pk-multi-dup_V2]",
            "value": 2.4564538348963163,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 407.0908990000248 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[10-incremental-decimal-pk-partitionless_V1]",
            "value": 2.478345106468141,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 403.49505699998645 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[10-incremental-decimal-pk-partitionless_V2]",
            "value": 2.4224738421576686,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 412.801155000011 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[11-incremental-decimal-hash-bucket-single_V1]",
            "value": 2.2649600555043796,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 441.50888999996596 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_incremental.py::test_compact_partition_incremental[11-incremental-decimal-hash-bucket-single_V2]",
            "value": 2.4313898557476845,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 411.28739500004485 msec\nrounds: 1"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[1-rebase-then-incremental-sanity_V1]",
            "value": 2.628680472966835,
            "unit": "iter/sec",
            "range": "stddev: 0.00311027280337109",
            "extra": "mean: 380.4190012000049 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[1-rebase-then-incremental-sanity_V2]",
            "value": 2.649542538993755,
            "unit": "iter/sec",
            "range": "stddev: 0.060416774882659986",
            "extra": "mean: 377.4236439999868 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[2-rebase-then-incremental-pk-multi_V1]",
            "value": 2.6077075613933562,
            "unit": "iter/sec",
            "range": "stddev: 0.06302636047007981",
            "extra": "mean: 383.4785828000122 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[2-rebase-then-incremental-pk-multi_V2]",
            "value": 2.727813654704289,
            "unit": "iter/sec",
            "range": "stddev: 0.057202353478346284",
            "extra": "mean: 366.5939564000041 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[3-rebase-then-incremental-no-sk-no-partition-key_V1]",
            "value": 2.589154571803514,
            "unit": "iter/sec",
            "range": "stddev: 0.00414520124906152",
            "extra": "mean: 386.2264581999966 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[3-rebase-then-incremental-no-sk-no-partition-key_V2]",
            "value": 2.5961924601730555,
            "unit": "iter/sec",
            "range": "stddev: 0.006811266861934375",
            "extra": "mean: 385.1794562000009 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[4-rebase-then-incremental-partial-deltas-on-incremental-deltas_V1]",
            "value": 2.7410166046514353,
            "unit": "iter/sec",
            "range": "stddev: 0.05782663423731031",
            "extra": "mean: 364.828143800014 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[4-rebase-then-incremental-partial-deltas-on-incremental-deltas_V2]",
            "value": 2.7189640211117374,
            "unit": "iter/sec",
            "range": "stddev: 0.058337838351262904",
            "extra": "mean: 367.78713960000005 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[5-rebase-then-incremental-partial-deltas-on-incremental-deltas-2_V1]",
            "value": 2.533857947066526,
            "unit": "iter/sec",
            "range": "stddev: 0.0695135284312246",
            "extra": "mean: 394.65511520000973 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[5-rebase-then-incremental-partial-deltas-on-incremental-deltas-2_V2]",
            "value": 2.5181507918766144,
            "unit": "iter/sec",
            "range": "stddev: 0.0049071161986039705",
            "extra": "mean: 397.11680619998333 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[6-rebase-then-incremental-hash-bucket-GT-records-per-compacted-file-v2-only_V2]",
            "value": 2.393164507983335,
            "unit": "iter/sec",
            "range": "stddev: 0.0594006491676349",
            "extra": "mean: 417.8567736000218 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[7-rebase-then-incremental-no-pk-compactor-v2-only_V2]",
            "value": 2.7011748058051275,
            "unit": "iter/sec",
            "range": "stddev: 0.06374008314329363",
            "extra": "mean: 370.20928740001864 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[8-rebase-then-incremental-delete-type-delta-on-incremental_V1]",
            "value": 2.6520736800402966,
            "unit": "iter/sec",
            "range": "stddev: 0.05995051011411874",
            "extra": "mean: 377.0634306000147 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[8-rebase-then-incremental-delete-type-delta-on-incremental_V2]",
            "value": 2.4675154831426807,
            "unit": "iter/sec",
            "range": "stddev: 0.0070598966256348724",
            "extra": "mean: 405.2659474000052 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[9-rebase-then-incremental-delete-type-delta-on-incremental-multi-pk_V2]",
            "value": 2.388712518512432,
            "unit": "iter/sec",
            "range": "stddev: 0.0036427153708963383",
            "extra": "mean: 418.63555879999694 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[10-rebase-then-incremental-delete-type-delta-on-incremental-multi-pk-delete-all_V2]",
            "value": 2.377592170696304,
            "unit": "iter/sec",
            "range": "stddev: 0.003912382951640593",
            "extra": "mean: 420.593578799992 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[11-rebase-then-incremental-empty-csv-delta-case_V1]",
            "value": 2.5315985972501998,
            "unit": "iter/sec",
            "range": "stddev: 0.07097792338193756",
            "extra": "mean: 395.0073290000205 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[11-rebase-then-incremental-empty-csv-delta-case_V2]",
            "value": 2.54769472416113,
            "unit": "iter/sec",
            "range": "stddev: 0.06911383608567206",
            "extra": "mean: 392.511705000004 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[12-rebase-then-incremental-single-hash-bucket_V1]",
            "value": 2.378913152808648,
            "unit": "iter/sec",
            "range": "stddev: 0.004279195841765436",
            "extra": "mean: 420.3600282000025 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[12-rebase-then-incremental-single-hash-bucket_V2]",
            "value": 2.4490826028500483,
            "unit": "iter/sec",
            "range": "stddev: 0.005769468443028502",
            "extra": "mean: 408.31615839999813 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[13-rebase-then-incremental-drop-duplicates-false-on-incremental-v2-only_V2]",
            "value": 2.5253670710561473,
            "unit": "iter/sec",
            "range": "stddev: 0.07243183528933324",
            "extra": "mean: 395.9820382000089 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[14-rebase-then-empty-incremental-delta_V1]",
            "value": 2.5397752074526774,
            "unit": "iter/sec",
            "range": "stddev: 0.06567953239002243",
            "extra": "mean: 393.73563340000146 msec\nrounds: 5"
          },
          {
            "name": "deltacat/tests/compute/test_compact_partition_rebase_then_incremental.py::test_compact_partition_rebase_then_incremental[14-rebase-then-empty-incremental-delta_V2]",
            "value": 2.5652598264793447,
            "unit": "iter/sec",
            "range": "stddev: 0.07591405728065906",
            "extra": "mean: 389.8240597999916 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}