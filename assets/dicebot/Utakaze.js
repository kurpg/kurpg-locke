/* Generated by Opal 0.11.4 */
(function(Opal) {
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_times(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs * rhs : lhs['$*'](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy;

  Opal.add_stubs(['$setPrefixes', '$debug', '$===', '$to_i', '$last_match', '$checkRoll', '$empty?', '$getValue', '$<', '$>', '$+', '$roll', '$sort', '$collect', '$split', '$join', '$getRollResultString', '$getSuccessInfo', '$isDragonDice', '$[]', '$!=', '$>=', '$getDiceCountHash', '$each', '$<<', '$<=', '$size', '$*', '$inject', '$new', '$isNomalDice', '$==', '$[]=', '$-', '$!']);
  return (function($base, $super, $parent_nesting) {
    function $Utakaze(){};
    var self = $Utakaze = $klass($base, $super, 'Utakaze', $Utakaze);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_Utakaze_initialize_1, TMP_Utakaze_gameName_2, TMP_Utakaze_gameType_3, TMP_Utakaze_getHelpMessage_4, TMP_Utakaze_isGetOriginalMessage_5, TMP_Utakaze_rollDiceCommand_6, TMP_Utakaze_checkRoll_8, TMP_Utakaze_getRollResultString_9, TMP_Utakaze_getSuccessInfo_11, TMP_Utakaze_getDiceCountHash_13, TMP_Utakaze_isNomalDice_14, TMP_Utakaze_isDragonDice_15, TMP_Utakaze_getValue_16;

    def.arrayDragonDiceName = nil;
    
    self.$setPrefixes(["\\d*UK[@\\d]*.*"]);
    
    Opal.defn(self, '$initialize', TMP_Utakaze_initialize_1 = function $$initialize() {
      var self = this, $iter = TMP_Utakaze_initialize_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) TMP_Utakaze_initialize_1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      
      $send(self, Opal.find_super_dispatcher(self, 'initialize', TMP_Utakaze_initialize_1, false), $zuper, $iter);
      return (self.arrayDragonDiceName = ["", "風", "雨", "雲", "影", "月", "歌"]);
    }, TMP_Utakaze_initialize_1.$$arity = 0);
    
    Opal.defn(self, '$gameName', TMP_Utakaze_gameName_2 = function $$gameName() {
      var self = this;

      return "ウタカゼ"
    }, TMP_Utakaze_gameName_2.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_Utakaze_gameType_3 = function $$gameType() {
      var self = this;

      return "Utakaze"
    }, TMP_Utakaze_gameType_3.$$arity = 0);
    
    Opal.defn(self, '$getHelpMessage', TMP_Utakaze_getHelpMessage_4 = function $$getHelpMessage() {
      var self = this;

      return "" + "・行為判定ロール（nUK）\n" + "  n個のサイコロで行為判定ロール。ゾロ目の最大個数を成功レベルとして表示。nを省略すると2UK扱い。\n" + "  例）3UK ：サイコロ3個で行為判定\n" + "  例）UK  ：サイコロ2個で行為判定\n" + "  不等号用いた成否判定は現時点では実装してません。\n" + "・クリティカルコール付き行為判定ロール（nUK@c or nUKc）\n" + "　cに「龍のダイス目」を指定した行為判定ロール。\n" + "  ゾロ目ではなく、cと同じ値の出目数x2が成功レベルとなります。\n" + "  例）3UK@5 ：龍のダイス「月」でクリティカルコール宣言したサイコロ3個の行為判定\n"
    }, TMP_Utakaze_getHelpMessage_4.$$arity = 0);
    
    Opal.defn(self, '$isGetOriginalMessage', TMP_Utakaze_isGetOriginalMessage_5 = function $$isGetOriginalMessage() {
      var self = this;

      return true
    }, TMP_Utakaze_isGetOriginalMessage_5.$$arity = 0);
    
    Opal.defn(self, '$rollDiceCommand', TMP_Utakaze_rollDiceCommand_6 = function $$rollDiceCommand(command) {
      var $a, self = this, result = nil, $case = nil, base = nil, crit = nil, diff = nil;

      
      self.$debug("rollDiceCommand command", command);
      result = "";
      $case = command;
      if (/(\d+)?UK(\@?(\d))?(>=(\d+))?/i['$===']($case)) {
      base = ($truthy($a = Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) ? $a : 2).$to_i();
      crit = Opal.const_get_relative($nesting, 'Regexp').$last_match(3).$to_i();
      diff = Opal.const_get_relative($nesting, 'Regexp').$last_match(5).$to_i();
      result = self.$checkRoll(base, crit, diff);};
      if ($truthy(result['$empty?']())) {
        return nil};
      return "" + (command) + " ＞ " + (result);
    }, TMP_Utakaze_rollDiceCommand_6.$$arity = 1);
    
    Opal.defn(self, '$checkRoll', TMP_Utakaze_checkRoll_8 = function $$checkRoll(base, crit, diff) {
      var $a, $b, TMP_7, self = this, result = nil, _ = nil, diceText = nil, diceList = nil;

      if (diff == null) {
        diff = 0;
      }
      
      result = "";
      base = self.$getValue(base);
      crit = self.$getValue(crit);
      if ($truthy($rb_lt(base, 1))) {
        return result};
      if ($truthy($rb_gt(crit, 6))) {
        crit = 6};
      result = $rb_plus(result, "" + "(" + (base) + "d6)");
      $b = self.$roll(base, 6), $a = Opal.to_ary($b), (_ = ($a[0] == null ? nil : $a[0])), (diceText = ($a[1] == null ? nil : $a[1])), $b;
      diceList = $send(diceText.$split(/,/), 'collect', [], (TMP_7 = function(i){var self = TMP_7.$$s || this;
if (i == null) i = nil;
      return i.$to_i()}, TMP_7.$$s = self, TMP_7.$$arity = 1, TMP_7)).$sort();
      result = $rb_plus(result, "" + " ＞ [" + (diceList.$join(",")) + "] ＞ ");
      result = $rb_plus(result, self.$getRollResultString(diceList, crit, diff));
      return result;
    }, TMP_Utakaze_checkRoll_8.$$arity = -3);
    
    Opal.defn(self, '$getRollResultString', TMP_Utakaze_getRollResultString_9 = function $$getRollResultString(diceList, crit, diff) {
      var $a, $b, self = this, success = nil, maxnum = nil, setCount = nil, result = nil, diffSuccess = nil;

      
      $b = self.$getSuccessInfo(diceList, crit, diff), $a = Opal.to_ary($b), (success = ($a[0] == null ? nil : $a[0])), (maxnum = ($a[1] == null ? nil : $a[1])), (setCount = ($a[2] == null ? nil : $a[2])), $b;
      result = "";
      if ($truthy(self.$isDragonDice(crit))) {
        result = $rb_plus(result, "" + "龍のダイス「" + (self.arrayDragonDiceName['$[]'](crit)) + "」(" + (crit) + ")を使用 ＞ ")};
      if ($truthy(success)) {
        
        result = $rb_plus(result, "" + "成功レベル:" + (maxnum) + " (" + (setCount) + "セット)");
        if ($truthy(diff['$!='](0))) {
          
          diffSuccess = $rb_ge(maxnum, diff);
          if ($truthy(diffSuccess)) {
            result = $rb_plus(result, " ＞ 成功")
            } else {
            result = $rb_plus(result, " ＞ 失敗")
          };};
        } else {
        result = $rb_plus(result, "失敗")
      };
      return result;
    }, TMP_Utakaze_getRollResultString_9.$$arity = 3);
    
    Opal.defn(self, '$getSuccessInfo', TMP_Utakaze_getSuccessInfo_11 = function $$getSuccessInfo(diceList, crit, _diff) {
      var TMP_10, self = this, diceCountHash = nil, maxnum = nil, successDiceList = nil, countThreshold = nil;

      
      self.$debug("checkSuccess diceList, crit", diceList, crit);
      diceCountHash = self.$getDiceCountHash(diceList, crit);
      self.$debug("diceCountHash", diceCountHash);
      maxnum = 0;
      successDiceList = [];
      countThreshold = (function() {if ($truthy(self.$isDragonDice(crit))) {
        return 1
        } else {
        return 2
      }; return nil; })();
      $send(diceCountHash, 'each', [], (TMP_10 = function(dice, count){var self = TMP_10.$$s || this;
if (dice == null) dice = nil;if (count == null) count = nil;
      
        if ($truthy($rb_gt(count, maxnum))) {
          maxnum = count};
        if ($truthy($rb_ge(count, countThreshold))) {
          return successDiceList['$<<'](dice)
          } else {
          return nil
        };}, TMP_10.$$s = self, TMP_10.$$arity = 2, TMP_10));
      self.$debug("successDiceList", successDiceList);
      if ($truthy($rb_le(successDiceList.$size(), 0))) {
        return [false, 0, 0]};
      if ($truthy(self.$isDragonDice(crit))) {
        maxnum = $rb_times(maxnum, 2)};
      return [true, maxnum, successDiceList.$size()];
    }, TMP_Utakaze_getSuccessInfo_11.$$arity = 3);
    
    Opal.defn(self, '$getDiceCountHash', TMP_Utakaze_getDiceCountHash_13 = function $$getDiceCountHash(diceList, crit) {
      var TMP_12, self = this, diceCountHash = nil;

      
      diceCountHash = $send(diceList, 'inject', [Opal.const_get_relative($nesting, 'Hash').$new(0)], (TMP_12 = function(hash, dice){var self = TMP_12.$$s || this, $a, $writer = nil;
if (hash == null) hash = nil;if (dice == null) dice = nil;
      
        if ($truthy(($truthy($a = self.$isNomalDice(crit)) ? $a : dice['$=='](crit)))) {
          
          $writer = [dice, $rb_plus(hash['$[]'](dice), 1)];
          $send(hash, '[]=', Opal.to_a($writer));
          $writer[$rb_minus($writer["length"], 1)];};
        return hash;}, TMP_12.$$s = self, TMP_12.$$arity = 2, TMP_12));
      return diceCountHash;
    }, TMP_Utakaze_getDiceCountHash_13.$$arity = 2);
    
    Opal.defn(self, '$isNomalDice', TMP_Utakaze_isNomalDice_14 = function $$isNomalDice(crit) {
      var self = this;

      return self.$isDragonDice(crit)['$!']()
    }, TMP_Utakaze_isNomalDice_14.$$arity = 1);
    
    Opal.defn(self, '$isDragonDice', TMP_Utakaze_isDragonDice_15 = function $$isDragonDice(crit) {
      var self = this;

      
      return crit['$!='](0);
    }, TMP_Utakaze_isDragonDice_15.$$arity = 1);
    return (Opal.defn(self, '$getValue', TMP_Utakaze_getValue_16 = function $$getValue(number) {
      var self = this;

      
      if ($truthy($rb_gt(number, 100))) {
        return 0};
      return number;
    }, TMP_Utakaze_getValue_16.$$arity = 1), nil) && 'getValue';
  })($nesting[0], Opal.const_get_relative($nesting, 'DiceBot'), $nesting)
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);