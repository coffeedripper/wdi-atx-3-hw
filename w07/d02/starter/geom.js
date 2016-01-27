function Rectangle(length, width) {
    this.length = length;
    this.width = width;
}

Rectangle.prototype = {
    isSquare: function() {
        if (this.length === this.width) {
            console.log("this is a square.");

        } else {
            console.log("this is not a square.");
        }

    },

    area: function() {
        c = this.width * this.length;
        console.log("the area equals " + c);


    },

    perimeter: function() {
        c = (this.width * 2) + (this.length * 2);
        console.log("the perimeter equals " + c);


    }

};

function Triangle(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
}
Triangle.prototype = {
        equilateralTriangle: function() {
            if (this.sideA === this.sideB) {
                console.log("equilateral true");
            } else {
                console.log("equilateral false");
            }

        },

        isIsosceles: function() {
            if ((this.sideA === this.sideB) && (this.sideC !== this.sideA || this.sideB) ||
                (this.sideA === this.sideC) && (this.sideB !== this.sideA || this.sideC) ||
                (this.sideB === this.sideC) && (this.sideA !== this.sideB || this.sideC)) {
                console.log("isosceles true");
            } else {
                console.log("isosceles false");
            }

        },

        area: function() {

            var s = (this.sideA + this.sideB + this.sideC) / 2;
            var q = Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
            console.log("area =" + q);

        },

        isObtuse: function() {
                if ((this.sideC > (Math.pow(this.sideA, 2) + Math.pow(this.sideB, 2)) ||
                        (this.sideA > (Math.pow(this.sideB, 2) + Math.pow(this.sideC, 2)) ||
                            (this.sideB > (Math.pow(this.sideA, 2) + Math.pow(this.sideC, 2))) {
                                console.log("this is obtuse");
                            } else {
                                console.log("this is not obtuse");
                            }



                        }



                    };


                    function LineSegment(x1, y1, x2, y2) {
                        this.x1 = x1;
                        this.y1 = y1;
                        this.x2 = x2;
                        this.y2 = y2;
                    }
                    LineSegment.prototype = {
                        // Your code goes here
                    };
