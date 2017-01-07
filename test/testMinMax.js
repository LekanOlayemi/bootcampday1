(function(){
  'use strict';
  var findMinMax = require("../app/libraryMinMax.js");
  console.log(findMinMax)
  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });
      it('should return [2, 14] for [2, 7, 9 , 14]', function () {
        expect(findMinMax([2, 7, 9, 14])).toEqual([2, 14]);
      });

      
      it('should return [3, 75] for [4, 66, 6, 44, 7, 75, 8, 68, 3]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([3, 75]);
      });

it('should return [6,9] for [6, 7, 8 , 9]', function () {
        expect(findMinMax([6, 7, 8, 9])).toEqual([6, 9]);
      });

      it('should return [5, 8] for [8, 5]', function () {
        expect(findMinMax([8, 5])).toEqual([5, 8]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });
        });

  });

})();

