/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 9.0, "minX": 0.0, "maxY": 811.0, "series": [{"data": [[0.0, 9.0], [0.1, 9.0], [0.2, 10.0], [0.3, 10.0], [0.4, 10.0], [0.5, 10.0], [0.6, 10.0], [0.7, 11.0], [0.8, 11.0], [0.9, 11.0], [1.0, 11.0], [1.1, 11.0], [1.2, 12.0], [1.3, 12.0], [1.4, 12.0], [1.5, 12.0], [1.6, 12.0], [1.7, 13.0], [1.8, 13.0], [1.9, 13.0], [2.0, 13.0], [2.1, 14.0], [2.2, 14.0], [2.3, 14.0], [2.4, 14.0], [2.5, 15.0], [2.6, 15.0], [2.7, 15.0], [2.8, 16.0], [2.9, 16.0], [3.0, 16.0], [3.1, 16.0], [3.2, 17.0], [3.3, 17.0], [3.4, 18.0], [3.5, 18.0], [3.6, 18.0], [3.7, 19.0], [3.8, 19.0], [3.9, 19.0], [4.0, 19.0], [4.1, 19.0], [4.2, 20.0], [4.3, 20.0], [4.4, 20.0], [4.5, 20.0], [4.6, 20.0], [4.7, 21.0], [4.8, 21.0], [4.9, 21.0], [5.0, 22.0], [5.1, 22.0], [5.2, 22.0], [5.3, 23.0], [5.4, 24.0], [5.5, 24.0], [5.6, 24.0], [5.7, 24.0], [5.8, 25.0], [5.9, 26.0], [6.0, 26.0], [6.1, 26.0], [6.2, 27.0], [6.3, 27.0], [6.4, 28.0], [6.5, 28.0], [6.6, 29.0], [6.7, 30.0], [6.8, 32.0], [6.9, 33.0], [7.0, 34.0], [7.1, 35.0], [7.2, 36.0], [7.3, 36.0], [7.4, 37.0], [7.5, 38.0], [7.6, 38.0], [7.7, 40.0], [7.8, 41.0], [7.9, 42.0], [8.0, 43.0], [8.1, 43.0], [8.2, 44.0], [8.3, 46.0], [8.4, 46.0], [8.5, 47.0], [8.6, 48.0], [8.7, 49.0], [8.8, 50.0], [8.9, 51.0], [9.0, 52.0], [9.1, 52.0], [9.2, 52.0], [9.3, 54.0], [9.4, 56.0], [9.5, 56.0], [9.6, 57.0], [9.7, 59.0], [9.8, 60.0], [9.9, 62.0], [10.0, 64.0], [10.1, 64.0], [10.2, 65.0], [10.3, 66.0], [10.4, 66.0], [10.5, 67.0], [10.6, 67.0], [10.7, 68.0], [10.8, 69.0], [10.9, 70.0], [11.0, 70.0], [11.1, 71.0], [11.2, 72.0], [11.3, 73.0], [11.4, 73.0], [11.5, 74.0], [11.6, 74.0], [11.7, 76.0], [11.8, 76.0], [11.9, 77.0], [12.0, 77.0], [12.1, 79.0], [12.2, 81.0], [12.3, 81.0], [12.4, 82.0], [12.5, 83.0], [12.6, 84.0], [12.7, 85.0], [12.8, 86.0], [12.9, 87.0], [13.0, 87.0], [13.1, 88.0], [13.2, 89.0], [13.3, 90.0], [13.4, 91.0], [13.5, 91.0], [13.6, 92.0], [13.7, 93.0], [13.8, 94.0], [13.9, 95.0], [14.0, 96.0], [14.1, 97.0], [14.2, 98.0], [14.3, 99.0], [14.4, 99.0], [14.5, 99.0], [14.6, 100.0], [14.7, 101.0], [14.8, 102.0], [14.9, 104.0], [15.0, 104.0], [15.1, 105.0], [15.2, 107.0], [15.3, 107.0], [15.4, 108.0], [15.5, 108.0], [15.6, 109.0], [15.7, 110.0], [15.8, 110.0], [15.9, 110.0], [16.0, 111.0], [16.1, 112.0], [16.2, 113.0], [16.3, 114.0], [16.4, 114.0], [16.5, 116.0], [16.6, 117.0], [16.7, 117.0], [16.8, 117.0], [16.9, 118.0], [17.0, 119.0], [17.1, 119.0], [17.2, 120.0], [17.3, 120.0], [17.4, 120.0], [17.5, 121.0], [17.6, 122.0], [17.7, 123.0], [17.8, 123.0], [17.9, 124.0], [18.0, 125.0], [18.1, 125.0], [18.2, 126.0], [18.3, 126.0], [18.4, 127.0], [18.5, 128.0], [18.6, 128.0], [18.7, 129.0], [18.8, 130.0], [18.9, 130.0], [19.0, 131.0], [19.1, 132.0], [19.2, 133.0], [19.3, 134.0], [19.4, 134.0], [19.5, 135.0], [19.6, 135.0], [19.7, 136.0], [19.8, 137.0], [19.9, 138.0], [20.0, 139.0], [20.1, 140.0], [20.2, 140.0], [20.3, 141.0], [20.4, 141.0], [20.5, 142.0], [20.6, 143.0], [20.7, 145.0], [20.8, 145.0], [20.9, 146.0], [21.0, 147.0], [21.1, 147.0], [21.2, 148.0], [21.3, 149.0], [21.4, 150.0], [21.5, 151.0], [21.6, 152.0], [21.7, 153.0], [21.8, 154.0], [21.9, 154.0], [22.0, 155.0], [22.1, 156.0], [22.2, 158.0], [22.3, 159.0], [22.4, 159.0], [22.5, 161.0], [22.6, 162.0], [22.7, 163.0], [22.8, 165.0], [22.9, 166.0], [23.0, 168.0], [23.1, 168.0], [23.2, 170.0], [23.3, 170.0], [23.4, 172.0], [23.5, 173.0], [23.6, 175.0], [23.7, 175.0], [23.8, 176.0], [23.9, 177.0], [24.0, 179.0], [24.1, 179.0], [24.2, 180.0], [24.3, 181.0], [24.4, 182.0], [24.5, 183.0], [24.6, 184.0], [24.7, 185.0], [24.8, 185.0], [24.9, 186.0], [25.0, 187.0], [25.1, 188.0], [25.2, 188.0], [25.3, 188.0], [25.4, 188.0], [25.5, 189.0], [25.6, 190.0], [25.7, 191.0], [25.8, 191.0], [25.9, 192.0], [26.0, 193.0], [26.1, 193.0], [26.2, 193.0], [26.3, 194.0], [26.4, 196.0], [26.5, 196.0], [26.6, 197.0], [26.7, 197.0], [26.8, 198.0], [26.9, 200.0], [27.0, 200.0], [27.1, 201.0], [27.2, 201.0], [27.3, 202.0], [27.4, 203.0], [27.5, 203.0], [27.6, 204.0], [27.7, 205.0], [27.8, 205.0], [27.9, 206.0], [28.0, 206.0], [28.1, 207.0], [28.2, 208.0], [28.3, 208.0], [28.4, 209.0], [28.5, 210.0], [28.6, 210.0], [28.7, 210.0], [28.8, 211.0], [28.9, 212.0], [29.0, 213.0], [29.1, 214.0], [29.2, 214.0], [29.3, 215.0], [29.4, 216.0], [29.5, 216.0], [29.6, 217.0], [29.7, 218.0], [29.8, 219.0], [29.9, 219.0], [30.0, 219.0], [30.1, 221.0], [30.2, 221.0], [30.3, 223.0], [30.4, 224.0], [30.5, 225.0], [30.6, 225.0], [30.7, 226.0], [30.8, 227.0], [30.9, 227.0], [31.0, 229.0], [31.1, 229.0], [31.2, 230.0], [31.3, 231.0], [31.4, 231.0], [31.5, 231.0], [31.6, 232.0], [31.7, 233.0], [31.8, 233.0], [31.9, 234.0], [32.0, 235.0], [32.1, 235.0], [32.2, 237.0], [32.3, 238.0], [32.4, 239.0], [32.5, 239.0], [32.6, 240.0], [32.7, 241.0], [32.8, 242.0], [32.9, 242.0], [33.0, 242.0], [33.1, 242.0], [33.2, 243.0], [33.3, 244.0], [33.4, 244.0], [33.5, 244.0], [33.6, 245.0], [33.7, 246.0], [33.8, 246.0], [33.9, 247.0], [34.0, 247.0], [34.1, 248.0], [34.2, 249.0], [34.3, 250.0], [34.4, 250.0], [34.5, 250.0], [34.6, 251.0], [34.7, 252.0], [34.8, 253.0], [34.9, 253.0], [35.0, 253.0], [35.1, 255.0], [35.2, 256.0], [35.3, 257.0], [35.4, 258.0], [35.5, 258.0], [35.6, 258.0], [35.7, 259.0], [35.8, 260.0], [35.9, 261.0], [36.0, 262.0], [36.1, 262.0], [36.2, 263.0], [36.3, 265.0], [36.4, 266.0], [36.5, 266.0], [36.6, 266.0], [36.7, 267.0], [36.8, 268.0], [36.9, 268.0], [37.0, 269.0], [37.1, 270.0], [37.2, 271.0], [37.3, 271.0], [37.4, 272.0], [37.5, 272.0], [37.6, 273.0], [37.7, 274.0], [37.8, 275.0], [37.9, 276.0], [38.0, 276.0], [38.1, 277.0], [38.2, 277.0], [38.3, 278.0], [38.4, 279.0], [38.5, 280.0], [38.6, 283.0], [38.7, 283.0], [38.8, 284.0], [38.9, 284.0], [39.0, 285.0], [39.1, 286.0], [39.2, 287.0], [39.3, 288.0], [39.4, 289.0], [39.5, 289.0], [39.6, 291.0], [39.7, 292.0], [39.8, 292.0], [39.9, 293.0], [40.0, 295.0], [40.1, 296.0], [40.2, 298.0], [40.3, 299.0], [40.4, 300.0], [40.5, 300.0], [40.6, 302.0], [40.7, 303.0], [40.8, 303.0], [40.9, 304.0], [41.0, 305.0], [41.1, 305.0], [41.2, 307.0], [41.3, 308.0], [41.4, 309.0], [41.5, 310.0], [41.6, 310.0], [41.7, 311.0], [41.8, 312.0], [41.9, 313.0], [42.0, 314.0], [42.1, 315.0], [42.2, 316.0], [42.3, 317.0], [42.4, 317.0], [42.5, 318.0], [42.6, 318.0], [42.7, 319.0], [42.8, 320.0], [42.9, 320.0], [43.0, 321.0], [43.1, 321.0], [43.2, 322.0], [43.3, 323.0], [43.4, 323.0], [43.5, 325.0], [43.6, 325.0], [43.7, 326.0], [43.8, 327.0], [43.9, 329.0], [44.0, 329.0], [44.1, 329.0], [44.2, 329.0], [44.3, 330.0], [44.4, 331.0], [44.5, 331.0], [44.6, 332.0], [44.7, 332.0], [44.8, 333.0], [44.9, 333.0], [45.0, 334.0], [45.1, 334.0], [45.2, 335.0], [45.3, 335.0], [45.4, 336.0], [45.5, 336.0], [45.6, 338.0], [45.7, 339.0], [45.8, 339.0], [45.9, 341.0], [46.0, 341.0], [46.1, 341.0], [46.2, 342.0], [46.3, 343.0], [46.4, 343.0], [46.5, 344.0], [46.6, 344.0], [46.7, 345.0], [46.8, 346.0], [46.9, 347.0], [47.0, 348.0], [47.1, 349.0], [47.2, 350.0], [47.3, 351.0], [47.4, 351.0], [47.5, 352.0], [47.6, 352.0], [47.7, 353.0], [47.8, 354.0], [47.9, 355.0], [48.0, 355.0], [48.1, 356.0], [48.2, 356.0], [48.3, 357.0], [48.4, 358.0], [48.5, 359.0], [48.6, 359.0], [48.7, 361.0], [48.8, 362.0], [48.9, 362.0], [49.0, 363.0], [49.1, 363.0], [49.2, 364.0], [49.3, 365.0], [49.4, 366.0], [49.5, 366.0], [49.6, 367.0], [49.7, 367.0], [49.8, 368.0], [49.9, 369.0], [50.0, 370.0], [50.1, 370.0], [50.2, 371.0], [50.3, 372.0], [50.4, 373.0], [50.5, 374.0], [50.6, 375.0], [50.7, 375.0], [50.8, 376.0], [50.9, 377.0], [51.0, 377.0], [51.1, 377.0], [51.2, 378.0], [51.3, 379.0], [51.4, 379.0], [51.5, 380.0], [51.6, 381.0], [51.7, 381.0], [51.8, 381.0], [51.9, 382.0], [52.0, 383.0], [52.1, 384.0], [52.2, 385.0], [52.3, 385.0], [52.4, 386.0], [52.5, 387.0], [52.6, 387.0], [52.7, 388.0], [52.8, 388.0], [52.9, 389.0], [53.0, 392.0], [53.1, 393.0], [53.2, 394.0], [53.3, 394.0], [53.4, 394.0], [53.5, 396.0], [53.6, 397.0], [53.7, 398.0], [53.8, 399.0], [53.9, 399.0], [54.0, 400.0], [54.1, 401.0], [54.2, 401.0], [54.3, 404.0], [54.4, 404.0], [54.5, 406.0], [54.6, 407.0], [54.7, 408.0], [54.8, 409.0], [54.9, 411.0], [55.0, 411.0], [55.1, 413.0], [55.2, 414.0], [55.3, 414.0], [55.4, 415.0], [55.5, 416.0], [55.6, 417.0], [55.7, 418.0], [55.8, 419.0], [55.9, 419.0], [56.0, 420.0], [56.1, 423.0], [56.2, 423.0], [56.3, 423.0], [56.4, 424.0], [56.5, 425.0], [56.6, 426.0], [56.7, 427.0], [56.8, 427.0], [56.9, 428.0], [57.0, 428.0], [57.1, 429.0], [57.2, 431.0], [57.3, 432.0], [57.4, 432.0], [57.5, 433.0], [57.6, 433.0], [57.7, 433.0], [57.8, 434.0], [57.9, 434.0], [58.0, 435.0], [58.1, 435.0], [58.2, 436.0], [58.3, 436.0], [58.4, 437.0], [58.5, 437.0], [58.6, 438.0], [58.7, 439.0], [58.8, 439.0], [58.9, 441.0], [59.0, 441.0], [59.1, 443.0], [59.2, 444.0], [59.3, 445.0], [59.4, 445.0], [59.5, 446.0], [59.6, 447.0], [59.7, 447.0], [59.8, 448.0], [59.9, 449.0], [60.0, 450.0], [60.1, 451.0], [60.2, 452.0], [60.3, 453.0], [60.4, 453.0], [60.5, 455.0], [60.6, 456.0], [60.7, 456.0], [60.8, 457.0], [60.9, 457.0], [61.0, 459.0], [61.1, 459.0], [61.2, 459.0], [61.3, 460.0], [61.4, 461.0], [61.5, 462.0], [61.6, 463.0], [61.7, 463.0], [61.8, 464.0], [61.9, 465.0], [62.0, 466.0], [62.1, 467.0], [62.2, 468.0], [62.3, 468.0], [62.4, 469.0], [62.5, 470.0], [62.6, 470.0], [62.7, 471.0], [62.8, 471.0], [62.9, 471.0], [63.0, 472.0], [63.1, 472.0], [63.2, 473.0], [63.3, 474.0], [63.4, 475.0], [63.5, 477.0], [63.6, 477.0], [63.7, 478.0], [63.8, 479.0], [63.9, 480.0], [64.0, 482.0], [64.1, 482.0], [64.2, 483.0], [64.3, 483.0], [64.4, 484.0], [64.5, 485.0], [64.6, 486.0], [64.7, 486.0], [64.8, 487.0], [64.9, 487.0], [65.0, 489.0], [65.1, 489.0], [65.2, 489.0], [65.3, 490.0], [65.4, 491.0], [65.5, 492.0], [65.6, 492.0], [65.7, 493.0], [65.8, 493.0], [65.9, 494.0], [66.0, 495.0], [66.1, 496.0], [66.2, 498.0], [66.3, 499.0], [66.4, 500.0], [66.5, 501.0], [66.6, 502.0], [66.7, 503.0], [66.8, 503.0], [66.9, 504.0], [67.0, 504.0], [67.1, 505.0], [67.2, 505.0], [67.3, 505.0], [67.4, 507.0], [67.5, 507.0], [67.6, 509.0], [67.7, 510.0], [67.8, 511.0], [67.9, 511.0], [68.0, 512.0], [68.1, 512.0], [68.2, 513.0], [68.3, 515.0], [68.4, 515.0], [68.5, 517.0], [68.6, 517.0], [68.7, 518.0], [68.8, 519.0], [68.9, 521.0], [69.0, 521.0], [69.1, 522.0], [69.2, 522.0], [69.3, 522.0], [69.4, 523.0], [69.5, 523.0], [69.6, 524.0], [69.7, 525.0], [69.8, 526.0], [69.9, 526.0], [70.0, 527.0], [70.1, 527.0], [70.2, 528.0], [70.3, 528.0], [70.4, 530.0], [70.5, 530.0], [70.6, 532.0], [70.7, 533.0], [70.8, 534.0], [70.9, 535.0], [71.0, 536.0], [71.1, 537.0], [71.2, 537.0], [71.3, 538.0], [71.4, 539.0], [71.5, 540.0], [71.6, 540.0], [71.7, 540.0], [71.8, 541.0], [71.9, 542.0], [72.0, 543.0], [72.1, 543.0], [72.2, 544.0], [72.3, 545.0], [72.4, 545.0], [72.5, 546.0], [72.6, 547.0], [72.7, 547.0], [72.8, 548.0], [72.9, 548.0], [73.0, 549.0], [73.1, 550.0], [73.2, 550.0], [73.3, 552.0], [73.4, 552.0], [73.5, 552.0], [73.6, 553.0], [73.7, 554.0], [73.8, 555.0], [73.9, 556.0], [74.0, 556.0], [74.1, 557.0], [74.2, 559.0], [74.3, 559.0], [74.4, 561.0], [74.5, 561.0], [74.6, 563.0], [74.7, 563.0], [74.8, 564.0], [74.9, 565.0], [75.0, 565.0], [75.1, 566.0], [75.2, 567.0], [75.3, 568.0], [75.4, 568.0], [75.5, 570.0], [75.6, 570.0], [75.7, 570.0], [75.8, 571.0], [75.9, 572.0], [76.0, 572.0], [76.1, 573.0], [76.2, 574.0], [76.3, 574.0], [76.4, 574.0], [76.5, 576.0], [76.6, 577.0], [76.7, 578.0], [76.8, 578.0], [76.9, 579.0], [77.0, 580.0], [77.1, 581.0], [77.2, 582.0], [77.3, 582.0], [77.4, 583.0], [77.5, 583.0], [77.6, 584.0], [77.7, 585.0], [77.8, 585.0], [77.9, 586.0], [78.0, 587.0], [78.1, 587.0], [78.2, 589.0], [78.3, 589.0], [78.4, 589.0], [78.5, 590.0], [78.6, 591.0], [78.7, 592.0], [78.8, 592.0], [78.9, 593.0], [79.0, 594.0], [79.1, 594.0], [79.2, 595.0], [79.3, 595.0], [79.4, 596.0], [79.5, 597.0], [79.6, 598.0], [79.7, 599.0], [79.8, 599.0], [79.9, 600.0], [80.0, 600.0], [80.1, 601.0], [80.2, 602.0], [80.3, 602.0], [80.4, 603.0], [80.5, 604.0], [80.6, 605.0], [80.7, 606.0], [80.8, 607.0], [80.9, 608.0], [81.0, 610.0], [81.1, 610.0], [81.2, 610.0], [81.3, 611.0], [81.4, 612.0], [81.5, 613.0], [81.6, 613.0], [81.7, 613.0], [81.8, 614.0], [81.9, 615.0], [82.0, 615.0], [82.1, 616.0], [82.2, 616.0], [82.3, 616.0], [82.4, 617.0], [82.5, 618.0], [82.6, 619.0], [82.7, 620.0], [82.8, 620.0], [82.9, 621.0], [83.0, 621.0], [83.1, 621.0], [83.2, 623.0], [83.3, 624.0], [83.4, 625.0], [83.5, 626.0], [83.6, 626.0], [83.7, 627.0], [83.8, 627.0], [83.9, 627.0], [84.0, 628.0], [84.1, 628.0], [84.2, 629.0], [84.3, 629.0], [84.4, 631.0], [84.5, 631.0], [84.6, 633.0], [84.7, 634.0], [84.8, 635.0], [84.9, 635.0], [85.0, 636.0], [85.1, 636.0], [85.2, 637.0], [85.3, 638.0], [85.4, 639.0], [85.5, 640.0], [85.6, 641.0], [85.7, 642.0], [85.8, 642.0], [85.9, 643.0], [86.0, 644.0], [86.1, 644.0], [86.2, 645.0], [86.3, 646.0], [86.4, 647.0], [86.5, 648.0], [86.6, 649.0], [86.7, 650.0], [86.8, 650.0], [86.9, 651.0], [87.0, 652.0], [87.1, 654.0], [87.2, 654.0], [87.3, 655.0], [87.4, 656.0], [87.5, 658.0], [87.6, 658.0], [87.7, 659.0], [87.8, 661.0], [87.9, 661.0], [88.0, 663.0], [88.1, 663.0], [88.2, 664.0], [88.3, 665.0], [88.4, 665.0], [88.5, 666.0], [88.6, 667.0], [88.7, 668.0], [88.8, 668.0], [88.9, 668.0], [89.0, 669.0], [89.1, 670.0], [89.2, 671.0], [89.3, 672.0], [89.4, 673.0], [89.5, 674.0], [89.6, 675.0], [89.7, 675.0], [89.8, 676.0], [89.9, 678.0], [90.0, 678.0], [90.1, 679.0], [90.2, 680.0], [90.3, 680.0], [90.4, 682.0], [90.5, 683.0], [90.6, 684.0], [90.7, 685.0], [90.8, 687.0], [90.9, 687.0], [91.0, 687.0], [91.1, 688.0], [91.2, 688.0], [91.3, 689.0], [91.4, 690.0], [91.5, 692.0], [91.6, 693.0], [91.7, 695.0], [91.8, 696.0], [91.9, 696.0], [92.0, 697.0], [92.1, 698.0], [92.2, 699.0], [92.3, 700.0], [92.4, 701.0], [92.5, 701.0], [92.6, 702.0], [92.7, 703.0], [92.8, 705.0], [92.9, 706.0], [93.0, 706.0], [93.1, 707.0], [93.2, 708.0], [93.3, 710.0], [93.4, 710.0], [93.5, 711.0], [93.6, 712.0], [93.7, 713.0], [93.8, 713.0], [93.9, 714.0], [94.0, 715.0], [94.1, 716.0], [94.2, 716.0], [94.3, 717.0], [94.4, 717.0], [94.5, 718.0], [94.6, 719.0], [94.7, 721.0], [94.8, 722.0], [94.9, 722.0], [95.0, 723.0], [95.1, 723.0], [95.2, 725.0], [95.3, 726.0], [95.4, 726.0], [95.5, 727.0], [95.6, 728.0], [95.7, 730.0], [95.8, 732.0], [95.9, 732.0], [96.0, 733.0], [96.1, 733.0], [96.2, 734.0], [96.3, 734.0], [96.4, 735.0], [96.5, 736.0], [96.6, 738.0], [96.7, 738.0], [96.8, 739.0], [96.9, 740.0], [97.0, 741.0], [97.1, 743.0], [97.2, 744.0], [97.3, 745.0], [97.4, 747.0], [97.5, 748.0], [97.6, 749.0], [97.7, 750.0], [97.8, 750.0], [97.9, 751.0], [98.0, 753.0], [98.1, 754.0], [98.2, 755.0], [98.3, 755.0], [98.4, 756.0], [98.5, 757.0], [98.6, 759.0], [98.7, 759.0], [98.8, 761.0], [98.9, 764.0], [99.0, 765.0], [99.1, 768.0], [99.2, 772.0], [99.3, 775.0], [99.4, 777.0], [99.5, 782.0], [99.6, 784.0], [99.7, 788.0], [99.8, 796.0], [99.9, 798.0], [100.0, 811.0]], "isOverall": false, "label": "v2", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 465.0, "series": [{"data": [[0.0, 465.0], [300.0, 434.0], [600.0, 396.0], [700.0, 246.0], [100.0, 396.0], [200.0, 433.0], [400.0, 399.0], [800.0, 3.0], [500.0, 433.0]], "isOverall": false, "label": "v2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1075.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2130.0, "series": [{"data": [[0.0, 2130.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1075.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 18.764852513502284, "minX": 1.79561328E12, "maxY": 19.76691729323308, "series": [{"data": [[1.79561334E12, 19.76691729323308], [1.79561328E12, 18.764852513502284]], "isOverall": false, "label": "writers", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79561334E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 11.560000000000002, "minX": 1.0, "maxY": 409.6944541332406, "series": [{"data": [[2.0, 14.249999999999998], [8.0, 49.78947368421052], [9.0, 41.84615384615384], [10.0, 40.92], [11.0, 53.15], [3.0, 115.41666666666667], [12.0, 52.22727272727273], [13.0, 59.45454545454545], [14.0, 73.27777777777777], [15.0, 82.94736842105263], [1.0, 33.0], [4.0, 39.58823529411765], [16.0, 90.70588235294119], [17.0, 86.5625], [18.0, 93.05555555555554], [19.0, 105.3125], [5.0, 11.560000000000002], [20.0, 409.6944541332406], [6.0, 65.15789473684211], [7.0, 45.27777777777778]], "isOverall": false, "label": "v2", "isController": false}, {"data": [[19.01435257410296, 372.8237129485174]], "isOverall": false, "label": "v2-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.79561328E12, "maxY": 1644.7833333333333, "series": [{"data": [[1.79561334E12, 545.3], [1.79561328E12, 1644.7833333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79561334E12, 0.0], [1.79561328E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79561334E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 277.56418778562517, "minX": 1.79561328E12, "maxY": 660.1541353383456, "series": [{"data": [[1.79561334E12, 660.1541353383456], [1.79561328E12, 277.56418778562517]], "isOverall": false, "label": "v2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79561334E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 277.5521395928545, "minX": 1.79561328E12, "maxY": 660.1403508771932, "series": [{"data": [[1.79561334E12, 660.1403508771932], [1.79561328E12, 277.5521395928545]], "isOverall": false, "label": "v2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79561334E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.007518796992481197, "minX": 1.79561328E12, "maxY": 0.1753219775654343, "series": [{"data": [[1.79561334E12, 0.007518796992481197], [1.79561328E12, 0.1753219775654343]], "isOverall": false, "label": "v2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79561334E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 9.0, "minX": 1.79561328E12, "maxY": 811.0, "series": [{"data": [[1.79561334E12, 811.0], [1.79561328E12, 607.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79561334E12, 748.1], [1.79561328E12, 511.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79561334E12, 792.04], [1.79561328E12, 574.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79561334E12, 761.0], [1.79561328E12, 542.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.79561334E12, 385.0], [1.79561328E12, 9.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79561334E12, 658.0], [1.79561328E12, 272.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79561334E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 28.0, "minX": 14.0, "maxY": 744.5, "series": [{"data": [[33.0, 597.0], [32.0, 628.0], [35.0, 569.0], [34.0, 573.5], [37.0, 550.0], [39.0, 521.0], [38.0, 589.5], [41.0, 486.0], [40.0, 506.5], [43.0, 466.0], [45.0, 448.5], [47.0, 432.0], [49.0, 408.0], [48.0, 423.0], [53.0, 367.0], [52.0, 382.5], [56.0, 368.5], [58.0, 329.5], [61.0, 346.0], [64.0, 315.5], [73.0, 260.0], [72.0, 284.0], [86.0, 226.0], [84.0, 243.5], [98.0, 203.0], [111.0, 180.0], [141.0, 140.0], [191.0, 104.0], [14.0, 547.0], [355.0, 28.0], [22.0, 744.5], [26.0, 724.0], [27.0, 710.0], [28.0, 717.5], [29.0, 665.5], [30.0, 706.5], [31.0, 645.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 355.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 28.0, "minX": 14.0, "maxY": 744.5, "series": [{"data": [[33.0, 597.0], [32.0, 628.0], [35.0, 569.0], [34.0, 573.5], [37.0, 550.0], [39.0, 521.0], [38.0, 589.5], [41.0, 486.0], [40.0, 506.5], [43.0, 466.0], [45.0, 448.5], [47.0, 432.0], [49.0, 408.0], [48.0, 423.0], [53.0, 367.0], [52.0, 382.5], [56.0, 368.5], [58.0, 329.5], [61.0, 346.0], [64.0, 315.5], [73.0, 260.0], [72.0, 284.0], [86.0, 226.0], [84.0, 243.5], [98.0, 203.0], [111.0, 180.0], [141.0, 140.0], [191.0, 104.0], [14.0, 547.0], [355.0, 28.0], [22.0, 744.5], [26.0, 724.0], [27.0, 710.0], [28.0, 717.5], [29.0, 665.5], [30.0, 706.5], [31.0, 645.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 355.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 12.966666666666667, "minX": 1.79561328E12, "maxY": 40.45, "series": [{"data": [[1.79561334E12, 12.966666666666667], [1.79561328E12, 40.45]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79561334E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 13.3, "minX": 1.79561328E12, "maxY": 40.11666666666667, "series": [{"data": [[1.79561334E12, 13.3], [1.79561328E12, 40.11666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79561334E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 13.3, "minX": 1.79561328E12, "maxY": 40.11666666666667, "series": [{"data": [[1.79561334E12, 13.3], [1.79561328E12, 40.11666666666667]], "isOverall": false, "label": "v2-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79561334E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 13.3, "minX": 1.79561328E12, "maxY": 40.11666666666667, "series": [{"data": [[1.79561334E12, 13.3], [1.79561328E12, 40.11666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79561334E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

