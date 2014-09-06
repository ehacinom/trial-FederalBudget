var _0x6780 = ["fbMask", "getElementById", "select", "display", "none", "style", "block", "sum_Federal", "Federal", "GovXFer", "State", "Local", "Category", "Level1", "Level2", "Level3", "Level4", "#bd0026", "#fecc5c", "#fd8d3c", "#f03b20", "#B02D5D", "#9B2C67", "#982B9A", "#692DA7", "#5725AA", "#4823AF", "#d7b5d8", "#dd1c77", "#5A0C7A", ",.3f", "format", "$", " Billion", "tree", "layout", "values", "children", "size", "toolTip", "head", "header1", "header2", "fedSpend", "stateSpend", "localSpend", "federalButton", "stateButton", "localButton", "federalDiv", "stateDiv", "localDiv", "y", "x", "projection", "diagonal", "svg", "transform", "translate(", ",", ")", "attr", "svg:g", "append", "height", "width", "svg:svg", "#body", "FederalBudget_2013_a.csv", "length", "push", "forEach", "entries", "key", "nest", "x0", "y0", "reverse", "nodes", "click", "class", "selected", "sum_State", "on", "sum_Local", "sum_", "range", "domain", "sqrt", "scale", "actuals", "csv", "source_", "parent", "depth", "max", "event", "altKey", "numChildren", "linkColor", "_children", "source", "id", "data", "g.node", "selectAll", " has too many departments (", ") to view at once.", "node", "enter", "stroke", "fill-opacity", ".8", "fill", "mouseout", "opacity", "0", "duration", "transition", "mouseover", "r", "svg:circle", "substr", "...", "text", "text-anchor", "end", "start", "dy", ".35em", "svg:text", "circle", "remove", "exit", "links", "target", "path.link", "stroke-linecap", "round", "stroke-opacity", "stroke-width", "d", "link", "svg:path", "g", "insert", ".9", "source_Level1", "source_Level2", "", "source_Level3", "html", " - ", "source_Level4", "top", "pageY", "px", "left", "pageX", "unselected"];

/*
var fbMask = d3[_0x6780[2]](document[_0x6780[1]](_0x6780[0]));

function fb_mouseOver() {
    fbMask[_0x6780[5]](_0x6780[3], _0x6780[4]);
};

function fb_mouseOut() {
    fbMask[_0x6780[5]](_0x6780[3], _0x6780[6]);
};
*/

var m = [20, 120, 20, 120],
    w = 1280 - m[1] - m[3],
    h = 900 - m[0] - m[2],
    i = 0,
    root = {};
var spendField = _0x6780[7];
var actField = _0x6780[7];
var sumFields = [_0x6780[8], _0x6780[9], _0x6780[10], _0x6780[11]];
var sourceFields = [_0x6780[12], _0x6780[13], _0x6780[14], _0x6780[15], _0x6780[16]];
var colors = [_0x6780[17], _0x6780[18], _0x6780[19], _0x6780[20], _0x6780[21], _0x6780[22], _0x6780[23], _0x6780[24], _0x6780[25], _0x6780[26], _0x6780[27], _0x6780[28], _0x6780[29], _0x6780[29]];
var formatNumber = d3[_0x6780[31]](_0x6780[30]);
var formatCurrency = function (_0xe16ax10) {
    return _0x6780[32] + formatNumber(_0xe16ax10) + _0x6780[33];
};
var tree = d3[_0x6780[35]][_0x6780[34]]();
tree[_0x6780[37]](function (_0xe16ax10) {
    return _0xe16ax10[_0x6780[36]];
});
tree[_0x6780[38]]([h, w]);
var toolTip = d3[_0x6780[2]](document[_0x6780[1]](_0x6780[39]));
var header = d3[_0x6780[2]](document[_0x6780[1]](_0x6780[40]));
var header1 = d3[_0x6780[2]](document[_0x6780[1]](_0x6780[41]));
var header2 = d3[_0x6780[2]](document[_0x6780[1]](_0x6780[42]));
var fedSpend = d3[_0x6780[2]](document[_0x6780[1]](_0x6780[43]));
var stateSpend = d3[_0x6780[2]](document[_0x6780[1]](_0x6780[44]));
var localSpend = d3[_0x6780[2]](document[_0x6780[1]](_0x6780[45]));
var federalButton = d3[_0x6780[2]](document[_0x6780[1]](_0x6780[46]));
var stateButton = d3[_0x6780[2]](document[_0x6780[1]](_0x6780[47]));
var localButton = d3[_0x6780[2]](document[_0x6780[1]](_0x6780[48]));
var federalDiv = d3[_0x6780[2]](document[_0x6780[1]](_0x6780[49]));
var stateDiv = d3[_0x6780[2]](document[_0x6780[1]](_0x6780[50]));
var localDiv = d3[_0x6780[2]](document[_0x6780[1]](_0x6780[51]));
var diagonal = d3[_0x6780[56]][_0x6780[55]]()[_0x6780[54]](function (_0xe16ax10) {
    return [_0xe16ax10[_0x6780[52]], _0xe16ax10[_0x6780[53]]];
});
var vis = d3[_0x6780[2]](_0x6780[67])[_0x6780[63]](_0x6780[66])[_0x6780[61]](_0x6780[65], w + m[1] + m[3])[_0x6780[61]](_0x6780[64], h + m[0] + m[2])[_0x6780[63]](_0x6780[62])[_0x6780[61]](_0x6780[57], _0x6780[58] + m[3] + _0x6780[59] + m[0] + _0x6780[60]);
var level1Max = {};
var level2Max = {};
var level3Max = {};
var level4Max = {};
var level1Radius;
var level2Radius;
var level3Radius;
var level4Radius;
var alreadySummed = false;
d3[_0x6780[91]](_0x6780[68], function (_0xe16ax2a) {
    var _0xe16ax2b = [];
    _0xe16ax2a[_0x6780[71]](function (_0xe16ax10) {
        var _0xe16ax2c = 0;
        for (var i = 0; i < sumFields[_0x6780[69]]; i++) {
            _0xe16ax2c += Number(_0xe16ax10[sumFields[i]]);
        };
        if (_0xe16ax2c > 0) {
            _0xe16ax2b[_0x6780[70]](_0xe16ax10);
        };
    });
    var _0xe16ax2d = d3[_0x6780[74]]()[_0x6780[73]](function (_0xe16ax10) {
        return _0xe16ax10[_0x6780[13]];
    })[_0x6780[73]](function (_0xe16ax10) {
        return _0xe16ax10[_0x6780[14]];
    })[_0x6780[73]](function (_0xe16ax10) {
        return _0xe16ax10[_0x6780[15]];
    })[_0x6780[72]](_0xe16ax2b);
    root = {};
    root[_0x6780[36]] = _0xe16ax2d;
    root[_0x6780[75]] = h / 2;
    root[_0x6780[76]] = 0;
    var _0xe16ax2e = tree[_0x6780[78]](root)[_0x6780[77]]();
    tree[_0x6780[37]](function (_0xe16ax10) {
        return _0xe16ax10[_0x6780[37]];
    });
    _0xe16ax2f();
    _0xe16ax30();
    alreadySummed = true;
    root[_0x6780[36]][_0x6780[71]](_0xe16ax31);
    toggle(root[_0x6780[36]][2]);
    update(root);
    stateButton[_0x6780[83]](_0x6780[79], function (_0xe16ax10) {
        stateButton[_0x6780[61]](_0x6780[80], _0x6780[81]);
        federalButton[_0x6780[61]](_0x6780[80], null);
        localButton[_0x6780[61]](_0x6780[80], null);
        stateDiv[_0x6780[61]](_0x6780[80], _0x6780[81]);
        federalDiv[_0x6780[61]](_0x6780[80], null);
        localDiv[_0x6780[61]](_0x6780[80], null);
        spendField = _0x6780[82];
        actField = _0x6780[82];
        _0xe16ax30();
        update(root);
    });
    localButton[_0x6780[83]](_0x6780[79], function (_0xe16ax10) {
        localButton[_0x6780[61]](_0x6780[80], _0x6780[81]);
        stateButton[_0x6780[61]](_0x6780[80], null);
        federalButton[_0x6780[61]](_0x6780[80], null);
        localDiv[_0x6780[61]](_0x6780[80], _0x6780[81]);
        federalDiv[_0x6780[61]](_0x6780[80], null);
        stateDiv[_0x6780[61]](_0x6780[80], null);
        spendField = _0x6780[84];
        actField = _0x6780[84];
        _0xe16ax30();
        update(root);
    });
    federalButton[_0x6780[83]](_0x6780[79], function (_0xe16ax10) {
        federalButton[_0x6780[61]](_0x6780[80], _0x6780[81]);
        stateButton[_0x6780[61]](_0x6780[80], null);
        localButton[_0x6780[61]](_0x6780[80], null);
        federalDiv[_0x6780[61]](_0x6780[80], _0x6780[81]);
        stateDiv[_0x6780[61]](_0x6780[80], null);
        localDiv[_0x6780[61]](_0x6780[80], null);
        spendField = _0x6780[7];
        _0xe16ax30();
        update(root);
    });

    function _0xe16ax2f() {
        for (var i = 0; i < sumFields[_0x6780[69]]; i++) {
            level1Max[_0x6780[85] + sumFields[i]] = 0;
            level2Max[_0x6780[85] + sumFields[i]] = 0;
            level3Max[_0x6780[85] + sumFields[i]] = 0;
            level4Max[_0x6780[85] + sumFields[i]] = 0;
        };
        sumNodes(root[_0x6780[37]]);
    };

    function _0xe16ax30() {
        level1Radius = d3[_0x6780[89]][_0x6780[88]]()[_0x6780[87]]([0, level1Max[spendField]])[_0x6780[86]]([1, 40]);
        level2Radius = d3[_0x6780[89]][_0x6780[88]]()[_0x6780[87]]([0, level2Max[spendField]])[_0x6780[86]]([1, 40]);
        level3Radius = d3[_0x6780[89]][_0x6780[88]]()[_0x6780[87]]([0, level3Max[spendField]])[_0x6780[86]]([1, 40]);
        level4Radius = d3[_0x6780[89]][_0x6780[88]]()[_0x6780[87]]([0, level4Max[spendField]])[_0x6780[86]]([1, 40]);
    };

    function _0xe16ax31(_0xe16ax10) {
        if (_0xe16ax10[_0x6780[36]] && _0xe16ax10[_0x6780[36]][_0x6780[90]]) {
            _0xe16ax10[_0x6780[36]][_0x6780[90]][_0x6780[71]](_0xe16ax31);
            toggle(_0xe16ax10);
        } else {
            if (_0xe16ax10[_0x6780[36]]) {
                _0xe16ax10[_0x6780[36]][_0x6780[71]](_0xe16ax31);
                toggle(_0xe16ax10);
            };
        };
    };
});

function setSourceFields(_0xe16ax33, _0xe16ax34) {
    if (_0xe16ax34) {
        for (var i = 0; i < sourceFields[_0x6780[69]]; i++) {
            var _0xe16ax35 = sourceFields[i];
            if (_0xe16ax33[_0xe16ax35] != undefined) {
                _0xe16ax33[_0x6780[92] + _0xe16ax35] = _0xe16ax33[_0xe16ax35];
            };
            _0xe16ax34[_0x6780[92] + _0xe16ax35] = (_0xe16ax33[_0x6780[92] + _0xe16ax35]) ? _0xe16ax33[_0x6780[92] + _0xe16ax35] : _0xe16ax33[_0xe16ax35];
        };
    };
};

function sumNodes(_0xe16ax2e) {
    for (var _0xe16ax37 = 0; _0xe16ax37 < _0xe16ax2e[_0x6780[69]]; _0xe16ax37++) {
        var _0xe16ax38 = _0xe16ax2e[_0xe16ax37];
        if (_0xe16ax38[_0x6780[37]]) {
            sumNodes(_0xe16ax38[_0x6780[37]]);
            for (var _0xe16ax39 = 0; _0xe16ax39 < _0xe16ax38[_0x6780[37]][_0x6780[69]]; _0xe16ax39++) {
                var _0xe16ax33 = _0xe16ax38[_0x6780[37]][_0xe16ax39];
                for (var i = 0; i < sumFields[_0x6780[69]]; i++) {
                    if (isNaN(_0xe16ax38[_0x6780[85] + sumFields[i]])) {
                        _0xe16ax38[_0x6780[85] + sumFields[i]] = 0;
                    };
                    _0xe16ax38[_0x6780[85] + sumFields[i]] += Number(_0xe16ax33[_0x6780[85] + sumFields[i]]);
                    if ((_0xe16ax38[_0x6780[93]])) {
                        if (_0xe16ax38[_0x6780[94]] == 1) {
                            level1Max[_0x6780[85] + sumFields[i]] = Math[_0x6780[95]](level1Max[_0x6780[85] + sumFields[i]], Number(_0xe16ax38[_0x6780[85] + sumFields[i]]));
                        } else {
                            if (_0xe16ax38[_0x6780[94]] == 2) {
                                level2Max[_0x6780[85] + sumFields[i]] = Math[_0x6780[95]](level2Max[_0x6780[85] + sumFields[i]], Number(_0xe16ax38[_0x6780[85] + sumFields[i]]));
                            } else {
                                if (_0xe16ax38[_0x6780[94]] == 3) {
                                    level3Max[_0x6780[85] + sumFields[i]] = Math[_0x6780[95]](level3Max[_0x6780[85] + sumFields[i]], Number(_0xe16ax38[_0x6780[85] + sumFields[i]]));
                                } else {
                                    if (_0xe16ax38[_0x6780[94]] == 4) {
                                        level4Max[_0x6780[85] + sumFields[i]] = Math[_0x6780[95]](level4Max[_0x6780[85] + sumFields[i]], Number(_0xe16ax38[_0x6780[85] + sumFields[i]]));
                                    };
                                };
                            };
                        };
                        setSourceFields(_0xe16ax38, _0xe16ax38[_0x6780[93]]);
                    };
                };
            };
        } else {
            for (var i = 0; i < sumFields[_0x6780[69]]; i++) {
                _0xe16ax38[_0x6780[85] + sumFields[i]] = Number(_0xe16ax38[sumFields[i]]);
                if (isNaN(_0xe16ax38[_0x6780[85] + sumFields[i]])) {
                    _0xe16ax38[_0x6780[85] + sumFields[i]] = 0;
                };
            };
        };
        setSourceFields(_0xe16ax38, _0xe16ax38[_0x6780[93]]);
    };
};

function update(_0xe16ax3b) {
    var _0xe16ax3c = d3[_0x6780[96]] && d3[_0x6780[96]][_0x6780[97]] ? 5000 : 500;
    var _0xe16ax2e = tree[_0x6780[78]](root)[_0x6780[77]]();
    var _0xe16ax3d = 0;
    _0xe16ax2e[_0x6780[71]](function (_0xe16ax10) {
        _0xe16ax10[_0x6780[52]] = _0xe16ax10[_0x6780[94]] * 180;
        _0xe16ax10[_0x6780[98]] = (_0xe16ax10[_0x6780[37]]) ? _0xe16ax10[_0x6780[37]][_0x6780[69]] : 0;
        if (_0xe16ax10[_0x6780[94]] == 1) {
            _0xe16ax10[_0x6780[99]] = colors[(_0xe16ax3d % (colors[_0x6780[69]] - 1))];
            _0xe16ax3d++;
        };
        if (_0xe16ax10[_0x6780[98]] == 0 && _0xe16ax10[_0x6780[100]]) {
            _0xe16ax10[_0x6780[98]] = _0xe16ax10[_0x6780[100]][_0x6780[69]];
        };
    });
    _0xe16ax2e[_0x6780[71]](function (_0xe16ax10) {
        var _0xe16ax3e = _0xe16ax10;
        while ((_0xe16ax3e[_0x6780[101]] && _0xe16ax3e[_0x6780[101]][_0x6780[94]] > 1) || _0xe16ax3e[_0x6780[94]] > 1) {
            _0xe16ax3e = (_0xe16ax3e[_0x6780[101]]) ? _0xe16ax3e[_0x6780[101]][_0x6780[93]] : _0xe16ax3e[_0x6780[93]];
        };
        _0xe16ax10[_0x6780[99]] = (_0xe16ax3e[_0x6780[101]]) ? _0xe16ax3e[_0x6780[101]][_0x6780[99]] : _0xe16ax3e[_0x6780[99]];
    });
    var _0xe16ax38 = vis[_0x6780[105]](_0x6780[104])[_0x6780[103]](_0xe16ax2e, function (_0xe16ax10) {
        return _0xe16ax10[_0x6780[102]] || (_0xe16ax10[_0x6780[102]] = ++i);
    });
    var _0xe16ax3f = _0xe16ax38[_0x6780[109]]()[_0x6780[63]](_0x6780[62])[_0x6780[61]](_0x6780[80], _0x6780[108])[_0x6780[61]](_0x6780[57], function (_0xe16ax10) {
        return _0x6780[58] + _0xe16ax3b[_0x6780[76]] + _0x6780[59] + _0xe16ax3b[_0x6780[75]] + _0x6780[60];
    })[_0x6780[83]](_0x6780[79], function (_0xe16ax10) {
        if (_0xe16ax10[_0x6780[98]] > 50) {
            alert(_0xe16ax10[_0x6780[73]] + _0x6780[106] + _0xe16ax10[_0x6780[98]] + _0x6780[107]);
        } else {
            toggle(_0xe16ax10);
            update(_0xe16ax10);
        };
    });
    _0xe16ax3f[_0x6780[63]](_0x6780[121])[_0x6780[61]](_0x6780[120], 1e-6)[_0x6780[83]](_0x6780[119], function (_0xe16ax10) {
        _0xe16ax47(_0xe16ax10);
    })[_0x6780[83]](_0x6780[114], function (_0xe16ax10) {
        toolTip[_0x6780[118]]()[_0x6780[117]](500)[_0x6780[5]](_0x6780[115], _0x6780[116]);
    })[_0x6780[5]](_0x6780[113], function (_0xe16ax10) {
        return _0xe16ax10[_0x6780[101]] ? _0xe16ax10[_0x6780[101]][_0x6780[99]] : _0xe16ax10[_0x6780[99]];
    })[_0x6780[5]](_0x6780[111], _0x6780[112])[_0x6780[5]](_0x6780[110], function (_0xe16ax10) {
        return _0xe16ax10[_0x6780[101]] ? _0xe16ax10[_0x6780[101]][_0x6780[99]] : _0xe16ax10[_0x6780[99]];
    });
    _0xe16ax3f[_0x6780[63]](_0x6780[130])[_0x6780[61]](_0x6780[53], function (_0xe16ax10) {
        return _0xe16ax10[_0x6780[37]] || _0xe16ax10[_0x6780[100]] ? -10 : 10;
    })[_0x6780[61]](_0x6780[128], _0x6780[129])[_0x6780[61]](_0x6780[125], function (_0xe16ax10) {
        return _0xe16ax10[_0x6780[37]] || _0xe16ax10[_0x6780[100]] ? _0x6780[126] : _0x6780[127];
    })[_0x6780[124]](function (_0xe16ax10) {
        var _0xe16ax40 = (_0xe16ax10[_0x6780[94]] == 4) ? _0xe16ax10[_0x6780[16]] : _0xe16ax10[_0x6780[73]];
        _0xe16ax40 = (String(_0xe16ax40)[_0x6780[69]] > 25) ? String(_0xe16ax40)[_0x6780[122]](0, 22) + _0x6780[123] : _0xe16ax40;
        return _0xe16ax40;
    })[_0x6780[83]](_0x6780[119], function (_0xe16ax10) {
        _0xe16ax47(_0xe16ax10);
    })[_0x6780[83]](_0x6780[114], function (_0xe16ax10) {
        toolTip[_0x6780[118]]()[_0x6780[117]](500)[_0x6780[5]](_0x6780[115], _0x6780[116]);
    })[_0x6780[5]](_0x6780[111], _0x6780[116]);
    var _0xe16ax41 = _0xe16ax38[_0x6780[118]]()[_0x6780[117]](_0xe16ax3c)[_0x6780[61]](_0x6780[57], function (_0xe16ax10) {
        return _0x6780[58] + _0xe16ax10[_0x6780[52]] + _0x6780[59] + _0xe16ax10[_0x6780[53]] + _0x6780[60];
    });
    _0xe16ax41[_0x6780[2]](_0x6780[131])[_0x6780[61]](_0x6780[120], function (_0xe16ax10) {
        if (_0xe16ax10[_0x6780[94]] == 0) {
            return 10;
        } else {
            if (_0xe16ax10[_0x6780[94]] == 1) {
                var _0xe16ax40 = level1Radius(_0xe16ax10[spendField]);
                return (isNaN(_0xe16ax40) ? 2 : _0xe16ax40);
            } else {
                if (_0xe16ax10[_0x6780[94]] == 2) {
                    var _0xe16ax40 = level2Radius(_0xe16ax10[spendField]);
                    return (isNaN(_0xe16ax40) ? 2 : _0xe16ax40);
                } else {
                    if (_0xe16ax10[_0x6780[94]] == 3) {
                        var _0xe16ax40 = level3Radius(_0xe16ax10[spendField]);
                        return (isNaN(_0xe16ax40) ? 2 : _0xe16ax40);
                    } else {
                        if (_0xe16ax10[_0x6780[94]] == 4) {
                            var _0xe16ax40 = level4Radius(_0xe16ax10[spendField]);
                            return (isNaN(_0xe16ax40) ? 2 : _0xe16ax40);
                        };
                    };
                };
            };
        };
    })[_0x6780[5]](_0x6780[113], function (_0xe16ax10) {
        return _0xe16ax10[_0x6780[101]] ? _0xe16ax10[_0x6780[101]][_0x6780[99]] : _0xe16ax10[_0x6780[99]];
    })[_0x6780[5]](_0x6780[111], function (_0xe16ax10) {
        var _0xe16ax40 = ((_0xe16ax10[_0x6780[94]] + 1) / 5);
        return _0xe16ax40;
    });
    _0xe16ax41[_0x6780[2]](_0x6780[124])[_0x6780[5]](_0x6780[111], 1);
    var _0xe16ax42 = _0xe16ax38[_0x6780[133]]()[_0x6780[118]]()[_0x6780[117]](_0xe16ax3c)[_0x6780[61]](_0x6780[57], function (_0xe16ax10) {
        return _0x6780[58] + _0xe16ax3b[_0x6780[52]] + _0x6780[59] + _0xe16ax3b[_0x6780[53]] + _0x6780[60];
    })[_0x6780[132]]();
    _0xe16ax42[_0x6780[2]](_0x6780[131])[_0x6780[61]](_0x6780[120], 1e-6);
    _0xe16ax42[_0x6780[2]](_0x6780[124])[_0x6780[5]](_0x6780[111], 1e-6);
    var _0xe16ax43 = vis[_0x6780[105]](_0x6780[136])[_0x6780[103]](tree[_0x6780[134]](_0xe16ax2e), function (_0xe16ax10) {
        return _0xe16ax10[_0x6780[135]][_0x6780[102]];
    });
    var _0xe16ax44 = 0;
    _0xe16ax43[_0x6780[109]]()[_0x6780[145]](_0x6780[143], _0x6780[144])[_0x6780[61]](_0x6780[80], _0x6780[142])[_0x6780[61]](_0x6780[141], function (_0xe16ax10) {
        if (Number(_0xe16ax10[_0x6780[135]][spendField]) > 0) {
            var _0xe16ax45 = {
                x: _0xe16ax3b[_0x6780[75]],
                y: _0xe16ax3b[_0x6780[76]]
            };
            return diagonal({
                source: _0xe16ax45,
                target: _0xe16ax45
            });
        } else {
            null;
        };
    })[_0x6780[5]](_0x6780[110], function (_0xe16ax10, i) {
        if (_0xe16ax10[_0x6780[101]][_0x6780[94]] == 0) {
            _0xe16ax44++;
            return (_0xe16ax10[_0x6780[101]][_0x6780[37]][_0xe16ax44 - 1][_0x6780[99]]);
        } else {
            return (_0xe16ax10[_0x6780[101]]) ? _0xe16ax10[_0x6780[101]][_0x6780[99]] : _0xe16ax10[_0x6780[99]];
        };
    })[_0x6780[5]](_0x6780[140], function (_0xe16ax10, i) {
        if (_0xe16ax10[_0x6780[101]][_0x6780[94]] == 0) {
            var _0xe16ax40 = level1Radius(_0xe16ax10[_0x6780[135]][spendField]) * 2;
            return (isNaN(_0xe16ax40) ? 4 : _0xe16ax40);
        } else {
            if (_0xe16ax10[_0x6780[101]][_0x6780[94]] == 1) {
                var _0xe16ax40 = level2Radius(_0xe16ax10[_0x6780[135]][spendField]) * 2;
                return (isNaN(_0xe16ax40) ? 4 : _0xe16ax40);
            } else {
                if (_0xe16ax10[_0x6780[101]][_0x6780[94]] == 2) {
                    var _0xe16ax40 = level3Radius(_0xe16ax10[_0x6780[135]][spendField]) * 2;
                    return (isNaN(_0xe16ax40) ? 4 : _0xe16ax40);
                } else {
                    if (_0xe16ax10[_0x6780[101]][_0x6780[94]] == 3) {
                        var _0xe16ax40 = level4Radius(_0xe16ax10[_0x6780[135]][spendField]) * 2;
                        return (isNaN(_0xe16ax40) ? 4 : _0xe16ax40);
                    };
                };
            };
        };
    })[_0x6780[5]](_0x6780[139], function (_0xe16ax10) {
        var _0xe16ax40 = ((_0xe16ax10[_0x6780[101]][_0x6780[94]] + 1) / 4.5);
        if (_0xe16ax10[_0x6780[135]][spendField] <= 0) {
            _0xe16ax40 = 0.1;
        };
        return _0xe16ax40;
    })[_0x6780[5]](_0x6780[137], _0x6780[138])[_0x6780[118]]()[_0x6780[117]](_0xe16ax3c);
    var _0xe16ax46 = _0xe16ax43[_0x6780[118]]()[_0x6780[117]](_0xe16ax3c)[_0x6780[61]](_0x6780[141], diagonal);
    _0xe16ax46[_0x6780[5]](_0x6780[140], function (_0xe16ax10, i) {
        if (_0xe16ax10[_0x6780[101]][_0x6780[94]] == 0) {
            var _0xe16ax40 = level1Radius(Number(_0xe16ax10[_0x6780[135]][spendField])) * 2;
            return (isNaN(_0xe16ax40) ? 4 : _0xe16ax40);
        } else {
            if (_0xe16ax10[_0x6780[101]][_0x6780[94]] == 1) {
                var _0xe16ax40 = level2Radius(Number(_0xe16ax10[_0x6780[135]][spendField])) * 2;
                return (isNaN(_0xe16ax40) ? 4 : _0xe16ax40);
            } else {
                if (_0xe16ax10[_0x6780[101]][_0x6780[94]] == 2) {
                    var _0xe16ax40 = level3Radius(Number(_0xe16ax10[_0x6780[135]][spendField])) * 2;
                    return (isNaN(_0xe16ax40) ? 4 : _0xe16ax40);
                } else {
                    if (_0xe16ax10[_0x6780[101]][_0x6780[94]] == 3) {
                        var _0xe16ax40 = level4Radius(Number(_0xe16ax10[_0x6780[135]][spendField])) * 2;
                        return (isNaN(_0xe16ax40) ? 4 : _0xe16ax40);
                    };
                };
            };
        };
    })[_0x6780[5]](_0x6780[139], function (_0xe16ax10) {
        var _0xe16ax40 = ((_0xe16ax10[_0x6780[101]][_0x6780[94]] + 1) / 4.5);
        if (_0xe16ax10[_0x6780[135]][spendField] <= 0) {
            _0xe16ax40 = 0.1;
        };
        return _0xe16ax40;
    });
    _0xe16ax43[_0x6780[133]]()[_0x6780[118]]()[_0x6780[117]](_0xe16ax3c)[_0x6780[61]](_0x6780[141], diagonal)[_0x6780[132]]();
    _0xe16ax2e[_0x6780[71]](function (_0xe16ax10) {
        _0xe16ax10[_0x6780[75]] = _0xe16ax10[_0x6780[53]];
        _0xe16ax10[_0x6780[76]] = _0xe16ax10[_0x6780[52]];
    });

    function _0xe16ax47(_0xe16ax10) {
        toolTip[_0x6780[118]]()[_0x6780[117]](200)[_0x6780[5]](_0x6780[115], _0x6780[146]);
        header[_0x6780[124]](_0xe16ax10[_0x6780[147]]);
        header1[_0x6780[124]]((_0xe16ax10[_0x6780[94]] > 1) ? _0xe16ax10[_0x6780[148]] : _0x6780[149]);
        header2[_0x6780[151]]((_0xe16ax10[_0x6780[94]] > 2) ? _0xe16ax10[_0x6780[150]] : _0x6780[149]);
        if (_0xe16ax10[_0x6780[94]] > 3) {
            header2[_0x6780[151]](header2[_0x6780[151]]() + _0x6780[152] + _0xe16ax10[_0x6780[153]]);
        };
        fedSpend[_0x6780[124]](formatCurrency(_0xe16ax10[_0x6780[7]]));
        stateSpend[_0x6780[124]](formatCurrency(_0xe16ax10[_0x6780[82]]));
        localSpend[_0x6780[124]](formatCurrency(_0xe16ax10[_0x6780[84]]));
        toolTip[_0x6780[5]](_0x6780[157], (d3[_0x6780[96]][_0x6780[158]] + 15) + _0x6780[156])[_0x6780[5]](_0x6780[154], (d3[_0x6780[96]][_0x6780[155]] - 75) + _0x6780[156]);
    };
};

function toggleButton(_0xe16ax49) {
    _0xe16ax49[_0x6780[61]](_0x6780[80], _0x6780[81]);
    if (_0xe16ax49 == federalButton) {
        localButton[_0x6780[61]](_0x6780[80], _0x6780[159]);
        stateButton[_0x6780[61]](_0x6780[80], _0x6780[159]);
    } else {
        if (_0xe16ax49 == stateButton) {
            localButton[_0x6780[61]](_0x6780[80], _0x6780[159]);
            federalButton[_0x6780[61]](_0x6780[80], _0x6780[159]);
        } else {
            federalButton[_0x6780[61]](_0x6780[80], _0x6780[159]);
            stateButton[_0x6780[61]](_0x6780[80], _0x6780[159]);
        };
    };
};

function toggle(_0xe16ax10) {
    if (_0xe16ax10[_0x6780[37]]) {
        _0xe16ax10[_0x6780[100]] = _0xe16ax10[_0x6780[37]];
        _0xe16ax10[_0x6780[37]] = null;
    } else {
        _0xe16ax10[_0x6780[37]] = _0xe16ax10[_0x6780[100]];
        _0xe16ax10[_0x6780[100]] = null;
    };
};
var _0x6780 = ["fbMask", "getElementById", "select", "display", "none", "style", "block", "sum_Federal", "Federal", "GovXFer", "State", "Local", "Category", "Level1", "Level2", "Level3", "Level4", "#bd0026", "#fecc5c", "#fd8d3c", "#f03b20", "#B02D5D", "#9B2C67", "#982B9A", "#692DA7", "#5725AA", "#4823AF", "#d7b5d8", "#dd1c77", "#5A0C7A", ",.3f", "format", "$", " Billion", "tree", "layout", "values", "children", "size", "toolTip", "head", "header1", "header2", "fedSpend", "stateSpend", "localSpend", "federalButton", "stateButton", "localButton", "federalDiv", "stateDiv", "localDiv", "y", "x", "projection", "diagonal", "svg", "transform", "translate(", ",", ")", "attr", "svg:g", "append", "height", "width", "svg:svg", "#body", "FederalBudget_2013_a.csv", "length", "push", "forEach", "entries", "key", "nest", "x0", "y0", "reverse", "nodes", "click", "class", "selected", "sum_State", "on", "sum_Local", "sum_", "range", "domain", "sqrt", "scale", "actuals", "csv", "source_", "parent", "depth", "max", "event", "altKey", "numChildren", "linkColor", "_children", "source", "id", "data", "g.node", "selectAll", " has too many departments (", ") to view at once.", "node", "enter", "stroke", "fill-opacity", ".8", "fill", "mouseout", "opacity", "0", "duration", "transition", "mouseover", "r", "svg:circle", "substr", "...", "text", "text-anchor", "end", "start", "dy", ".35em", "svg:text", "circle", "remove", "exit", "links", "target", "path.link", "stroke-linecap", "round", "stroke-opacity", "stroke-width", "d", "link", "svg:path", "g", "insert", ".9", "source_Level1", "source_Level2", "", "source_Level3", "html", " - ", "source_Level4", "top", "pageY", "px", "left", "pageX", "unselected"];
var fbMask = d3[_0x6780[2]](document[_0x6780[1]](_0x6780[0]));

function fb_mouseOver() {
    fbMask[_0x6780[5]](_0x6780[3], _0x6780[4]);
};

function fb_mouseOut() {
    fbMask[_0x6780[5]](_0x6780[3], _0x6780[6]);
};
var m = [20, 120, 20, 120],
    w = 1280 - m[1] - m[3],
    h = 900 - m[0] - m[2],
    i = 0,
    root = {};
var spendField = _0x6780[7];
var actField = _0x6780[7];
var sumFields = [_0x6780[8], _0x6780[9], _0x6780[10], _0x6780[11]];
var sourceFields = [_0x6780[12], _0x6780[13], _0x6780[14], _0x6780[15], _0x6780[16]];
var colors = [_0x6780[17], _0x6780[18], _0x6780[19], _0x6780[20], _0x6780[21], _0x6780[22], _0x6780[23], _0x6780[24], _0x6780[25], _0x6780[26], _0x6780[27], _0x6780[28], _0x6780[29], _0x6780[29]];
var formatNumber = d3[_0x6780[31]](_0x6780[30]);
var formatCurrency = function (_0xe16ax10) {
    return _0x6780[32] + formatNumber(_0xe16ax10) + _0x6780[33];
};
var tree = d3[_0x6780[35]][_0x6780[34]]();
tree[_0x6780[37]](function (_0xe16ax10) {
    return _0xe16ax10[_0x6780[36]];
});
tree[_0x6780[38]]([h, w]);
var toolTip = d3[_0x6780[2]](document[_0x6780[1]](_0x6780[39]));
var header = d3[_0x6780[2]](document[_0x6780[1]](_0x6780[40]));
var header1 = d3[_0x6780[2]](document[_0x6780[1]](_0x6780[41]));
var header2 = d3[_0x6780[2]](document[_0x6780[1]](_0x6780[42]));
var fedSpend = d3[_0x6780[2]](document[_0x6780[1]](_0x6780[43]));
var stateSpend = d3[_0x6780[2]](document[_0x6780[1]](_0x6780[44]));
var localSpend = d3[_0x6780[2]](document[_0x6780[1]](_0x6780[45]));
var federalButton = d3[_0x6780[2]](document[_0x6780[1]](_0x6780[46]));
var stateButton = d3[_0x6780[2]](document[_0x6780[1]](_0x6780[47]));
var localButton = d3[_0x6780[2]](document[_0x6780[1]](_0x6780[48]));
var federalDiv = d3[_0x6780[2]](document[_0x6780[1]](_0x6780[49]));
var stateDiv = d3[_0x6780[2]](document[_0x6780[1]](_0x6780[50]));
var localDiv = d3[_0x6780[2]](document[_0x6780[1]](_0x6780[51]));
var diagonal = d3[_0x6780[56]][_0x6780[55]]()[_0x6780[54]](function (_0xe16ax10) {
    return [_0xe16ax10[_0x6780[52]], _0xe16ax10[_0x6780[53]]];
});
var vis = d3[_0x6780[2]](_0x6780[67])[_0x6780[63]](_0x6780[66])[_0x6780[61]](_0x6780[65], w + m[1] + m[3])[_0x6780[61]](_0x6780[64], h + m[0] + m[2])[_0x6780[63]](_0x6780[62])[_0x6780[61]](_0x6780[57], _0x6780[58] + m[3] + _0x6780[59] + m[0] + _0x6780[60]);
var level1Max = {};
var level2Max = {};
var level3Max = {};
var level4Max = {};
var level1Radius;
var level2Radius;
var level3Radius;
var level4Radius;
var alreadySummed = false;
d3[_0x6780[91]](_0x6780[68], function (_0xe16ax2a) {
    var _0xe16ax2b = [];
    _0xe16ax2a[_0x6780[71]](function (_0xe16ax10) {
        var _0xe16ax2c = 0;
        for (var i = 0; i < sumFields[_0x6780[69]]; i++) {
            _0xe16ax2c += Number(_0xe16ax10[sumFields[i]]);
        };
        if (_0xe16ax2c > 0) {
            _0xe16ax2b[_0x6780[70]](_0xe16ax10);
        };
    });
    var _0xe16ax2d = d3[_0x6780[74]]()[_0x6780[73]](function (_0xe16ax10) {
        return _0xe16ax10[_0x6780[13]];
    })[_0x6780[73]](function (_0xe16ax10) {
        return _0xe16ax10[_0x6780[14]];
    })[_0x6780[73]](function (_0xe16ax10) {
        return _0xe16ax10[_0x6780[15]];
    })[_0x6780[72]](_0xe16ax2b);
    root = {};
    root[_0x6780[36]] = _0xe16ax2d;
    root[_0x6780[75]] = h / 2;
    root[_0x6780[76]] = 0;
    var _0xe16ax2e = tree[_0x6780[78]](root)[_0x6780[77]]();
    tree[_0x6780[37]](function (_0xe16ax10) {
        return _0xe16ax10[_0x6780[37]];
    });
    _0xe16ax2f();
    _0xe16ax30();
    alreadySummed = true;
    root[_0x6780[36]][_0x6780[71]](_0xe16ax31);
    toggle(root[_0x6780[36]][2]);
    update(root);
    stateButton[_0x6780[83]](_0x6780[79], function (_0xe16ax10) {
        stateButton[_0x6780[61]](_0x6780[80], _0x6780[81]);
        federalButton[_0x6780[61]](_0x6780[80], null);
        localButton[_0x6780[61]](_0x6780[80], null);
        stateDiv[_0x6780[61]](_0x6780[80], _0x6780[81]);
        federalDiv[_0x6780[61]](_0x6780[80], null);
        localDiv[_0x6780[61]](_0x6780[80], null);
        spendField = _0x6780[82];
        actField = _0x6780[82];
        _0xe16ax30();
        update(root);
    });
    localButton[_0x6780[83]](_0x6780[79], function (_0xe16ax10) {
        localButton[_0x6780[61]](_0x6780[80], _0x6780[81]);
        stateButton[_0x6780[61]](_0x6780[80], null);
        federalButton[_0x6780[61]](_0x6780[80], null);
        localDiv[_0x6780[61]](_0x6780[80], _0x6780[81]);
        federalDiv[_0x6780[61]](_0x6780[80], null);
        stateDiv[_0x6780[61]](_0x6780[80], null);
        spendField = _0x6780[84];
        actField = _0x6780[84];
        _0xe16ax30();
        update(root);
    });
    federalButton[_0x6780[83]](_0x6780[79], function (_0xe16ax10) {
        federalButton[_0x6780[61]](_0x6780[80], _0x6780[81]);
        stateButton[_0x6780[61]](_0x6780[80], null);
        localButton[_0x6780[61]](_0x6780[80], null);
        federalDiv[_0x6780[61]](_0x6780[80], _0x6780[81]);
        stateDiv[_0x6780[61]](_0x6780[80], null);
        localDiv[_0x6780[61]](_0x6780[80], null);
        spendField = _0x6780[7];
        _0xe16ax30();
        update(root);
    });

    function _0xe16ax2f() {
        for (var i = 0; i < sumFields[_0x6780[69]]; i++) {
            level1Max[_0x6780[85] + sumFields[i]] = 0;
            level2Max[_0x6780[85] + sumFields[i]] = 0;
            level3Max[_0x6780[85] + sumFields[i]] = 0;
            level4Max[_0x6780[85] + sumFields[i]] = 0;
        };
        sumNodes(root[_0x6780[37]]);
    };

    function _0xe16ax30() {
        level1Radius = d3[_0x6780[89]][_0x6780[88]]()[_0x6780[87]]([0, level1Max[spendField]])[_0x6780[86]]([1, 40]);
        level2Radius = d3[_0x6780[89]][_0x6780[88]]()[_0x6780[87]]([0, level2Max[spendField]])[_0x6780[86]]([1, 40]);
        level3Radius = d3[_0x6780[89]][_0x6780[88]]()[_0x6780[87]]([0, level3Max[spendField]])[_0x6780[86]]([1, 40]);
        level4Radius = d3[_0x6780[89]][_0x6780[88]]()[_0x6780[87]]([0, level4Max[spendField]])[_0x6780[86]]([1, 40]);
    };

    function _0xe16ax31(_0xe16ax10) {
        if (_0xe16ax10[_0x6780[36]] && _0xe16ax10[_0x6780[36]][_0x6780[90]]) {
            _0xe16ax10[_0x6780[36]][_0x6780[90]][_0x6780[71]](_0xe16ax31);
            toggle(_0xe16ax10);
        } else {
            if (_0xe16ax10[_0x6780[36]]) {
                _0xe16ax10[_0x6780[36]][_0x6780[71]](_0xe16ax31);
                toggle(_0xe16ax10);
            };
        };
    };
});

function setSourceFields(_0xe16ax33, _0xe16ax34) {
    if (_0xe16ax34) {
        for (var i = 0; i < sourceFields[_0x6780[69]]; i++) {
            var _0xe16ax35 = sourceFields[i];
            if (_0xe16ax33[_0xe16ax35] != undefined) {
                _0xe16ax33[_0x6780[92] + _0xe16ax35] = _0xe16ax33[_0xe16ax35];
            };
            _0xe16ax34[_0x6780[92] + _0xe16ax35] = (_0xe16ax33[_0x6780[92] + _0xe16ax35]) ? _0xe16ax33[_0x6780[92] + _0xe16ax35] : _0xe16ax33[_0xe16ax35];
        };
    };
};

function sumNodes(_0xe16ax2e) {
    for (var _0xe16ax37 = 0; _0xe16ax37 < _0xe16ax2e[_0x6780[69]]; _0xe16ax37++) {
        var _0xe16ax38 = _0xe16ax2e[_0xe16ax37];
        if (_0xe16ax38[_0x6780[37]]) {
            sumNodes(_0xe16ax38[_0x6780[37]]);
            for (var _0xe16ax39 = 0; _0xe16ax39 < _0xe16ax38[_0x6780[37]][_0x6780[69]]; _0xe16ax39++) {
                var _0xe16ax33 = _0xe16ax38[_0x6780[37]][_0xe16ax39];
                for (var i = 0; i < sumFields[_0x6780[69]]; i++) {
                    if (isNaN(_0xe16ax38[_0x6780[85] + sumFields[i]])) {
                        _0xe16ax38[_0x6780[85] + sumFields[i]] = 0;
                    };
                    _0xe16ax38[_0x6780[85] + sumFields[i]] += Number(_0xe16ax33[_0x6780[85] + sumFields[i]]);
                    if ((_0xe16ax38[_0x6780[93]])) {
                        if (_0xe16ax38[_0x6780[94]] == 1) {
                            level1Max[_0x6780[85] + sumFields[i]] = Math[_0x6780[95]](level1Max[_0x6780[85] + sumFields[i]], Number(_0xe16ax38[_0x6780[85] + sumFields[i]]));
                        } else {
                            if (_0xe16ax38[_0x6780[94]] == 2) {
                                level2Max[_0x6780[85] + sumFields[i]] = Math[_0x6780[95]](level2Max[_0x6780[85] + sumFields[i]], Number(_0xe16ax38[_0x6780[85] + sumFields[i]]));
                            } else {
                                if (_0xe16ax38[_0x6780[94]] == 3) {
                                    level3Max[_0x6780[85] + sumFields[i]] = Math[_0x6780[95]](level3Max[_0x6780[85] + sumFields[i]], Number(_0xe16ax38[_0x6780[85] + sumFields[i]]));
                                } else {
                                    if (_0xe16ax38[_0x6780[94]] == 4) {
                                        level4Max[_0x6780[85] + sumFields[i]] = Math[_0x6780[95]](level4Max[_0x6780[85] + sumFields[i]], Number(_0xe16ax38[_0x6780[85] + sumFields[i]]));
                                    };
                                };
                            };
                        };
                        setSourceFields(_0xe16ax38, _0xe16ax38[_0x6780[93]]);
                    };
                };
            };
        } else {
            for (var i = 0; i < sumFields[_0x6780[69]]; i++) {
                _0xe16ax38[_0x6780[85] + sumFields[i]] = Number(_0xe16ax38[sumFields[i]]);
                if (isNaN(_0xe16ax38[_0x6780[85] + sumFields[i]])) {
                    _0xe16ax38[_0x6780[85] + sumFields[i]] = 0;
                };
            };
        };
        setSourceFields(_0xe16ax38, _0xe16ax38[_0x6780[93]]);
    };
};

function update(_0xe16ax3b) {
    var _0xe16ax3c = d3[_0x6780[96]] && d3[_0x6780[96]][_0x6780[97]] ? 5000 : 500;
    var _0xe16ax2e = tree[_0x6780[78]](root)[_0x6780[77]]();
    var _0xe16ax3d = 0;
    _0xe16ax2e[_0x6780[71]](function (_0xe16ax10) {
        _0xe16ax10[_0x6780[52]] = _0xe16ax10[_0x6780[94]] * 180;
        _0xe16ax10[_0x6780[98]] = (_0xe16ax10[_0x6780[37]]) ? _0xe16ax10[_0x6780[37]][_0x6780[69]] : 0;
        if (_0xe16ax10[_0x6780[94]] == 1) {
            _0xe16ax10[_0x6780[99]] = colors[(_0xe16ax3d % (colors[_0x6780[69]] - 1))];
            _0xe16ax3d++;
        };
        if (_0xe16ax10[_0x6780[98]] == 0 && _0xe16ax10[_0x6780[100]]) {
            _0xe16ax10[_0x6780[98]] = _0xe16ax10[_0x6780[100]][_0x6780[69]];
        };
    });
    _0xe16ax2e[_0x6780[71]](function (_0xe16ax10) {
        var _0xe16ax3e = _0xe16ax10;
        while ((_0xe16ax3e[_0x6780[101]] && _0xe16ax3e[_0x6780[101]][_0x6780[94]] > 1) || _0xe16ax3e[_0x6780[94]] > 1) {
            _0xe16ax3e = (_0xe16ax3e[_0x6780[101]]) ? _0xe16ax3e[_0x6780[101]][_0x6780[93]] : _0xe16ax3e[_0x6780[93]];
        };
        _0xe16ax10[_0x6780[99]] = (_0xe16ax3e[_0x6780[101]]) ? _0xe16ax3e[_0x6780[101]][_0x6780[99]] : _0xe16ax3e[_0x6780[99]];
    });
    var _0xe16ax38 = vis[_0x6780[105]](_0x6780[104])[_0x6780[103]](_0xe16ax2e, function (_0xe16ax10) {
        return _0xe16ax10[_0x6780[102]] || (_0xe16ax10[_0x6780[102]] = ++i);
    });
    var _0xe16ax3f = _0xe16ax38[_0x6780[109]]()[_0x6780[63]](_0x6780[62])[_0x6780[61]](_0x6780[80], _0x6780[108])[_0x6780[61]](_0x6780[57], function (_0xe16ax10) {
        return _0x6780[58] + _0xe16ax3b[_0x6780[76]] + _0x6780[59] + _0xe16ax3b[_0x6780[75]] + _0x6780[60];
    })[_0x6780[83]](_0x6780[79], function (_0xe16ax10) {
        if (_0xe16ax10[_0x6780[98]] > 50) {
            alert(_0xe16ax10[_0x6780[73]] + _0x6780[106] + _0xe16ax10[_0x6780[98]] + _0x6780[107]);
        } else {
            toggle(_0xe16ax10);
            update(_0xe16ax10);
        };
    });
    _0xe16ax3f[_0x6780[63]](_0x6780[121])[_0x6780[61]](_0x6780[120], 1e-6)[_0x6780[83]](_0x6780[119], function (_0xe16ax10) {
        _0xe16ax47(_0xe16ax10);
    })[_0x6780[83]](_0x6780[114], function (_0xe16ax10) {
        toolTip[_0x6780[118]]()[_0x6780[117]](500)[_0x6780[5]](_0x6780[115], _0x6780[116]);
    })[_0x6780[5]](_0x6780[113], function (_0xe16ax10) {
        return _0xe16ax10[_0x6780[101]] ? _0xe16ax10[_0x6780[101]][_0x6780[99]] : _0xe16ax10[_0x6780[99]];
    })[_0x6780[5]](_0x6780[111], _0x6780[112])[_0x6780[5]](_0x6780[110], function (_0xe16ax10) {
        return _0xe16ax10[_0x6780[101]] ? _0xe16ax10[_0x6780[101]][_0x6780[99]] : _0xe16ax10[_0x6780[99]];
    });
    _0xe16ax3f[_0x6780[63]](_0x6780[130])[_0x6780[61]](_0x6780[53], function (_0xe16ax10) {
        return _0xe16ax10[_0x6780[37]] || _0xe16ax10[_0x6780[100]] ? -10 : 10;
    })[_0x6780[61]](_0x6780[128], _0x6780[129])[_0x6780[61]](_0x6780[125], function (_0xe16ax10) {
        return _0xe16ax10[_0x6780[37]] || _0xe16ax10[_0x6780[100]] ? _0x6780[126] : _0x6780[127];
    })[_0x6780[124]](function (_0xe16ax10) {
        var _0xe16ax40 = (_0xe16ax10[_0x6780[94]] == 4) ? _0xe16ax10[_0x6780[16]] : _0xe16ax10[_0x6780[73]];
        _0xe16ax40 = (String(_0xe16ax40)[_0x6780[69]] > 25) ? String(_0xe16ax40)[_0x6780[122]](0, 22) + _0x6780[123] : _0xe16ax40;
        return _0xe16ax40;
    })[_0x6780[83]](_0x6780[119], function (_0xe16ax10) {
        _0xe16ax47(_0xe16ax10);
    })[_0x6780[83]](_0x6780[114], function (_0xe16ax10) {
        toolTip[_0x6780[118]]()[_0x6780[117]](500)[_0x6780[5]](_0x6780[115], _0x6780[116]);
    })[_0x6780[5]](_0x6780[111], _0x6780[116]);
    var _0xe16ax41 = _0xe16ax38[_0x6780[118]]()[_0x6780[117]](_0xe16ax3c)[_0x6780[61]](_0x6780[57], function (_0xe16ax10) {
        return _0x6780[58] + _0xe16ax10[_0x6780[52]] + _0x6780[59] + _0xe16ax10[_0x6780[53]] + _0x6780[60];
    });
    _0xe16ax41[_0x6780[2]](_0x6780[131])[_0x6780[61]](_0x6780[120], function (_0xe16ax10) {
        if (_0xe16ax10[_0x6780[94]] == 0) {
            return 10;
        } else {
            if (_0xe16ax10[_0x6780[94]] == 1) {
                var _0xe16ax40 = level1Radius(_0xe16ax10[spendField]);
                return (isNaN(_0xe16ax40) ? 2 : _0xe16ax40);
            } else {
                if (_0xe16ax10[_0x6780[94]] == 2) {
                    var _0xe16ax40 = level2Radius(_0xe16ax10[spendField]);
                    return (isNaN(_0xe16ax40) ? 2 : _0xe16ax40);
                } else {
                    if (_0xe16ax10[_0x6780[94]] == 3) {
                        var _0xe16ax40 = level3Radius(_0xe16ax10[spendField]);
                        return (isNaN(_0xe16ax40) ? 2 : _0xe16ax40);
                    } else {
                        if (_0xe16ax10[_0x6780[94]] == 4) {
                            var _0xe16ax40 = level4Radius(_0xe16ax10[spendField]);
                            return (isNaN(_0xe16ax40) ? 2 : _0xe16ax40);
                        };
                    };
                };
            };
        };
    })[_0x6780[5]](_0x6780[113], function (_0xe16ax10) {
        return _0xe16ax10[_0x6780[101]] ? _0xe16ax10[_0x6780[101]][_0x6780[99]] : _0xe16ax10[_0x6780[99]];
    })[_0x6780[5]](_0x6780[111], function (_0xe16ax10) {
        var _0xe16ax40 = ((_0xe16ax10[_0x6780[94]] + 1) / 5);
        return _0xe16ax40;
    });
    _0xe16ax41[_0x6780[2]](_0x6780[124])[_0x6780[5]](_0x6780[111], 1);
    var _0xe16ax42 = _0xe16ax38[_0x6780[133]]()[_0x6780[118]]()[_0x6780[117]](_0xe16ax3c)[_0x6780[61]](_0x6780[57], function (_0xe16ax10) {
        return _0x6780[58] + _0xe16ax3b[_0x6780[52]] + _0x6780[59] + _0xe16ax3b[_0x6780[53]] + _0x6780[60];
    })[_0x6780[132]]();
    _0xe16ax42[_0x6780[2]](_0x6780[131])[_0x6780[61]](_0x6780[120], 1e-6);
    _0xe16ax42[_0x6780[2]](_0x6780[124])[_0x6780[5]](_0x6780[111], 1e-6);
    var _0xe16ax43 = vis[_0x6780[105]](_0x6780[136])[_0x6780[103]](tree[_0x6780[134]](_0xe16ax2e), function (_0xe16ax10) {
        return _0xe16ax10[_0x6780[135]][_0x6780[102]];
    });
    var _0xe16ax44 = 0;
    _0xe16ax43[_0x6780[109]]()[_0x6780[145]](_0x6780[143], _0x6780[144])[_0x6780[61]](_0x6780[80], _0x6780[142])[_0x6780[61]](_0x6780[141], function (_0xe16ax10) {
        if (Number(_0xe16ax10[_0x6780[135]][spendField]) > 0) {
            var _0xe16ax45 = {
                x: _0xe16ax3b[_0x6780[75]],
                y: _0xe16ax3b[_0x6780[76]]
            };
            return diagonal({
                source: _0xe16ax45,
                target: _0xe16ax45
            });
        } else {
            null;
        };
    })[_0x6780[5]](_0x6780[110], function (_0xe16ax10, i) {
        if (_0xe16ax10[_0x6780[101]][_0x6780[94]] == 0) {
            _0xe16ax44++;
            return (_0xe16ax10[_0x6780[101]][_0x6780[37]][_0xe16ax44 - 1][_0x6780[99]]);
        } else {
            return (_0xe16ax10[_0x6780[101]]) ? _0xe16ax10[_0x6780[101]][_0x6780[99]] : _0xe16ax10[_0x6780[99]];
        };
    })[_0x6780[5]](_0x6780[140], function (_0xe16ax10, i) {
        if (_0xe16ax10[_0x6780[101]][_0x6780[94]] == 0) {
            var _0xe16ax40 = level1Radius(_0xe16ax10[_0x6780[135]][spendField]) * 2;
            return (isNaN(_0xe16ax40) ? 4 : _0xe16ax40);
        } else {
            if (_0xe16ax10[_0x6780[101]][_0x6780[94]] == 1) {
                var _0xe16ax40 = level2Radius(_0xe16ax10[_0x6780[135]][spendField]) * 2;
                return (isNaN(_0xe16ax40) ? 4 : _0xe16ax40);
            } else {
                if (_0xe16ax10[_0x6780[101]][_0x6780[94]] == 2) {
                    var _0xe16ax40 = level3Radius(_0xe16ax10[_0x6780[135]][spendField]) * 2;
                    return (isNaN(_0xe16ax40) ? 4 : _0xe16ax40);
                } else {
                    if (_0xe16ax10[_0x6780[101]][_0x6780[94]] == 3) {
                        var _0xe16ax40 = level4Radius(_0xe16ax10[_0x6780[135]][spendField]) * 2;
                        return (isNaN(_0xe16ax40) ? 4 : _0xe16ax40);
                    };
                };
            };
        };
    })[_0x6780[5]](_0x6780[139], function (_0xe16ax10) {
        var _0xe16ax40 = ((_0xe16ax10[_0x6780[101]][_0x6780[94]] + 1) / 4.5);
        if (_0xe16ax10[_0x6780[135]][spendField] <= 0) {
            _0xe16ax40 = 0.1;
        };
        return _0xe16ax40;
    })[_0x6780[5]](_0x6780[137], _0x6780[138])[_0x6780[118]]()[_0x6780[117]](_0xe16ax3c);
    var _0xe16ax46 = _0xe16ax43[_0x6780[118]]()[_0x6780[117]](_0xe16ax3c)[_0x6780[61]](_0x6780[141], diagonal);
    _0xe16ax46[_0x6780[5]](_0x6780[140], function (_0xe16ax10, i) {
        if (_0xe16ax10[_0x6780[101]][_0x6780[94]] == 0) {
            var _0xe16ax40 = level1Radius(Number(_0xe16ax10[_0x6780[135]][spendField])) * 2;
            return (isNaN(_0xe16ax40) ? 4 : _0xe16ax40);
        } else {
            if (_0xe16ax10[_0x6780[101]][_0x6780[94]] == 1) {
                var _0xe16ax40 = level2Radius(Number(_0xe16ax10[_0x6780[135]][spendField])) * 2;
                return (isNaN(_0xe16ax40) ? 4 : _0xe16ax40);
            } else {
                if (_0xe16ax10[_0x6780[101]][_0x6780[94]] == 2) {
                    var _0xe16ax40 = level3Radius(Number(_0xe16ax10[_0x6780[135]][spendField])) * 2;
                    return (isNaN(_0xe16ax40) ? 4 : _0xe16ax40);
                } else {
                    if (_0xe16ax10[_0x6780[101]][_0x6780[94]] == 3) {
                        var _0xe16ax40 = level4Radius(Number(_0xe16ax10[_0x6780[135]][spendField])) * 2;
                        return (isNaN(_0xe16ax40) ? 4 : _0xe16ax40);
                    };
                };
            };
        };
    })[_0x6780[5]](_0x6780[139], function (_0xe16ax10) {
        var _0xe16ax40 = ((_0xe16ax10[_0x6780[101]][_0x6780[94]] + 1) / 4.5);
        if (_0xe16ax10[_0x6780[135]][spendField] <= 0) {
            _0xe16ax40 = 0.1;
        };
        return _0xe16ax40;
    });
    _0xe16ax43[_0x6780[133]]()[_0x6780[118]]()[_0x6780[117]](_0xe16ax3c)[_0x6780[61]](_0x6780[141], diagonal)[_0x6780[132]]();
    _0xe16ax2e[_0x6780[71]](function (_0xe16ax10) {
        _0xe16ax10[_0x6780[75]] = _0xe16ax10[_0x6780[53]];
        _0xe16ax10[_0x6780[76]] = _0xe16ax10[_0x6780[52]];
    });

    function _0xe16ax47(_0xe16ax10) {
        toolTip[_0x6780[118]]()[_0x6780[117]](200)[_0x6780[5]](_0x6780[115], _0x6780[146]);
        header[_0x6780[124]](_0xe16ax10[_0x6780[147]]);
        header1[_0x6780[124]]((_0xe16ax10[_0x6780[94]] > 1) ? _0xe16ax10[_0x6780[148]] : _0x6780[149]);
        header2[_0x6780[151]]((_0xe16ax10[_0x6780[94]] > 2) ? _0xe16ax10[_0x6780[150]] : _0x6780[149]);
        if (_0xe16ax10[_0x6780[94]] > 3) {
            header2[_0x6780[151]](header2[_0x6780[151]]() + _0x6780[152] + _0xe16ax10[_0x6780[153]]);
        };
        fedSpend[_0x6780[124]](formatCurrency(_0xe16ax10[_0x6780[7]]));
        stateSpend[_0x6780[124]](formatCurrency(_0xe16ax10[_0x6780[82]]));
        localSpend[_0x6780[124]](formatCurrency(_0xe16ax10[_0x6780[84]]));
        toolTip[_0x6780[5]](_0x6780[157], (d3[_0x6780[96]][_0x6780[158]] + 15) + _0x6780[156])[_0x6780[5]](_0x6780[154], (d3[_0x6780[96]][_0x6780[155]] - 75) + _0x6780[156]);
    };
};

function toggleButton(_0xe16ax49) {
    _0xe16ax49[_0x6780[61]](_0x6780[80], _0x6780[81]);
    if (_0xe16ax49 == federalButton) {
        localButton[_0x6780[61]](_0x6780[80], _0x6780[159]);
        stateButton[_0x6780[61]](_0x6780[80], _0x6780[159]);
    } else {
        if (_0xe16ax49 == stateButton) {
            localButton[_0x6780[61]](_0x6780[80], _0x6780[159]);
            federalButton[_0x6780[61]](_0x6780[80], _0x6780[159]);
        } else {
            federalButton[_0x6780[61]](_0x6780[80], _0x6780[159]);
            stateButton[_0x6780[61]](_0x6780[80], _0x6780[159]);
        };
    };
};

function toggle(_0xe16ax10) {
    if (_0xe16ax10[_0x6780[37]]) {
        _0xe16ax10[_0x6780[100]] = _0xe16ax10[_0x6780[37]];
        _0xe16ax10[_0x6780[37]] = null;
    } else {
        _0xe16ax10[_0x6780[37]] = _0xe16ax10[_0x6780[100]];
        _0xe16ax10[_0x6780[100]] = null;
    };
};