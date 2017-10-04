$(function () {
  function t(t) {
    $.showPreloader(), u = 2, n(t), p(t)
  }

  function e(t) {
    var e = dateToYmd(t), n = getMyDay(new Date(t));
    $(".lg-time span").text(e + "(" + n + ")")
  }

  function n(t) {
    var n = {date: t}, a = {token: token};
    getData("POST", interfaces.getUserAuthority, a, n, function (t) {
      "0" == t.code ? (u--, e(n.date), $("#datepicker").val(n.date), l(t.menu), d(t.data), initHeight($(".fold-list .item-detail")), $.each($(".fold-list .item-inner"), function (t, e) {
        var n = $(this);
        openMenu(n)
      }), n.date == resDate.getFormTime(new Date) ? $("#totoday").hide() : $("#totoday").show(), 0 == u && $.hidePreloader()) : console.log("数据失败")
    })
  }

  function d(t) {
    if (0 == t.length) return $(".fold-list").html('<li class="index-nodata">该日暂无数据！</li>'), !1;
    newjson.ReceptionServe = [], newjson.BookAndDebook = [], newjson.InOrOut = [], newjson.CommunityLiveIn = [], newjson.ProjectMaintance = [], $.each(t, function (t, e) {
      a(e)
    }), console.log(newjson), $.each($(".item-content"), function (t, e) {
      $(this).hasClass("BookAndDebook") ? newjson.BookAndDebook.length > 0 ? s(newjson.BookAndDebook) : $(".BookAndDebook").remove() : $(this).hasClass("ReceptionServe") ? newjson.ReceptionServe.length > 0 ? r(newjson.ReceptionServe) : $(".ReceptionServe").remove() : $(this).hasClass("InOrOut") ? newjson.InOrOut.length > 0 ? o(newjson.InOrOut) : $(".InOrOut").remove() : $(this).hasClass("CommunityLiveIn") ? newjson.CommunityLiveIn.length > 0 ? i(newjson.CommunityLiveIn) : $(".CommunityLiveIn").remove() : $(this).hasClass("ProjectMaintance") && (newjson.ProjectMaintance.length > 0 ? h(newjson.ProjectMaintance) : $(".ProjectMaintance").remove())
    })
  }

  function a(t) {
    var e = t.org;
    if (t.ReceptionServe) {
      var n = t.ReceptionServe;
      n.yuanqu = e, newjson.ReceptionServe.push(n)
    } else if (t.BookAndDebook) {
      var d = t.BookAndDebook;
      d.yuanqu = e, newjson.BookAndDebook.push(d)
    } else if (t.InOrOut) {
      var a = t.InOrOut;
      a.yuanqu = e, newjson.InOrOut.push(a)
    } else if (t.CommunityLiveIn) {
      var s = t.CommunityLiveIn;
      s.yuanqu = e, newjson.CommunityLiveIn.push(s)
    } else if (t.ProjectMaintance) {
      var r = t.ProjectMaintance;
      r.yuanqu = e, newjson.ProjectMaintance.push(r)
    }
  }

  function s(t) {
    var e = $(".BookAndDebook .item-detail"), n = "", d = "", a = 0, s = 0, r = 0, o = 0, i = 0, h = 0, l = 0, p = 0;
    $.each(t, function (t, e) {
      l++;
      var d = orgList[e.yuanqu], c = e.NewBook.Total, u = e.NewBook.Independent, y = e.NewBook.Care,
        I = e.NewDebook.Total;
      dltd = e.NewDebook.Independent, hltd = e.NewDebook.Care, NetReservationHouserholds = e.NetReservation.NetReservationHouserholds, a += c ? parseInt(c) : 0, s += u ? parseInt(u) : 0, r += y ? parseInt(y) : 0, o += I ? parseInt(I) : 0, i += dltd ? parseInt(dltd) : 0, h += hltd ? parseInt(hltd) : 0, p += NetReservationHouserholds ? parseInt(NetReservationHouserholds) : 0, n += "<tr><td>" + d + "</td><td>" + NetReservationHouserholds + '</td><td class="bold">' + c + "</td><td>" + u + "</td><td>" + y + '</td><td class="bold">' + I + "</td><td>" + dltd + "</td><td>" + hltd + "</td></tr>"
    });
    var c = s - i, u = r - h;
    l > 1 && (n = "<tr><td>合计</td><td>" + p + '</td><td class="bold">' + a + "</td><td>" + s + "</td><td>" + r + '</td><td class="bold">' + o + "</td><td>" + i + "</td><td>" + h + "</td></tr>" + n), d = '<table class="index-table"><thead><tr><th class="width-first" rowspan="2"></th><th rowspan="2">净预订</th><th colspan="3">预订</th><th colspan="3">退订</th></tr><tr><th>小计</th><th>独立</th><th>护理</th><th>小计</th><th>独立</th><th>护理</th></tr></thead><tbody>' + n + "</tbody></table>", e.append(d), $(".BookAndDebook .list-ti-content").append("<span>独立净预订 <em>" + c + "</em>户</span><span>护理净预订 <em>" + u + "</em>户</span>")
  }

  function r(t) {
    var e = $(".ReceptionServe .item-detail"), n = "", d = "", a = "", s = "";
    e.append('<div id="TotalRecep"></div><div id="EntityReception"></div><div id="Experience"></div><div id="VIPDetails"></div>');
    var r = 0, o = 0, i = 0, h = 0, l = 0, p = 0, c = 0, u = 0, y = 0, I = 0, C = 0, v = 0, b = 0, w = 0, m = 0, T = 0,
      f = 0, R = 0, k = 0, g = 0, P = 0, L = 0, S = 0, x = 0, M = 0;
    $.each(t, function (t, e) {
      var $ = e.yuanqu, H = orgList[$];
      if (M++, e.EntityReception) var A = e.EntityReception.Total.ReceptionCount,
        O = e.EntityReception.Total.PersonCount; else var A = 0, O = 0;
      if (e.Experience) var D = e.Experience.Total.ReceptionCount, j = e.Experience.Total.PersonCount; else var D = 0,
        j = 0;
      var N = e.ReceptionTotal.Total.Income;
      if (r += N ? parseFloat(N) : 0, o += A ? parseInt(A) : 0, i += O ? parseInt(O) : 0, h += D ? parseInt(D) : 0, l += j ? parseInt(j) : 0, s += "<tr><td>" + H + '</td><td class="money-r">' + parseFloat(N).toFixed(2) + "</td><td>" + A + "</td><td>" + O + "</td><td>" + D + "</td><td>" + j + "</td></tr>", e.EntityReception) {
        var E = e.EntityReception.FromInsurance.ReceptionCount, F = e.EntityReception.FromInsurance.PersonCount,
          z = e.EntityReception.UnFromInsurance.ReceptionCount, V = e.EntityReception.UnFromInsurance.PersonCount,
          B = e.EntityReception.VIPReception.ReceptionCount;
        stvprc = e.EntityReception.VIPReception.PersonCount, p += E ? parseInt(E) : 0, c += F ? parseInt(F) : 0, u += z ? parseInt(z) : 0, y += V ? parseInt(V) : 0, I += B ? parseInt(B) : 0, C += stvprc ? parseInt(stvprc) : 0;
        X = c + y + C == 0 ? 1 : c + y + C;
        stbxzb = percent(c / X * 100), stfbzb = percent(y / X * 100), stvpzb = percent(100 - stbxzb - stfbzb), n += "<tr><td>" + H + "</td><td>" + E + "</td><td>" + F + "</td><td>" + z + "</td><td>" + V + "</td><td>" + B + "</td><td>" + stvprc + "</td></tr>"
      }
      if (e.Experience) {
        var q = e.Experience.FromInsurance.ReceptionCount, U = e.Experience.FromInsurance.PersonCount,
          W = e.Experience.UnFromInsurance.ReceptionCount, Y = e.Experience.UnFromInsurance.PersonCount,
          G = e.Experience.VIPReception.ReceptionCount;
        tyvprc = e.Experience.VIPReception.PersonCount, v += q ? parseInt(q) : 0, b += U ? parseInt(U) : 0, w += W ? parseInt(W) : 0, m += Y ? parseInt(Y) : 0, T += G ? parseInt(G) : 0, f += tyvprc ? parseInt(tyvprc) : 0;
        var X = b + m + f == 0 ? 1 : b + m + f;
        tybxzb = percent(b / X * 100), tyfbzb = percent(m / X * 100), tyvpzb = percent(100 - tybxzb - tyfbzb), 0 == X && (tybxzb = 0, tyfbzb = 0, tyvpzb = 0), d += "<tr><td>" + H + "</td><td>" + q + "</td><td>" + U + "</td><td>" + W + "</td><td>" + Y + "</td><td>" + G + "</td><td>" + tyvprc + "</td></tr>"
      }
      var J = e.VIPDetails.CountryLeader.PersonCount, Z = e.VIPDetails.ProvinceLeader.PersonCount,
        _ = e.VIPDetails.BlocLeader.PersonCount, K = e.VIPDetails.OtherGroupLeader.PersonCount,
        Q = e.VIPDetails.ZhiJiaLeader.PersonCount;
      VIPPersonCount = e.VIPDetails.Total.VIPReceptionTotalPerson, EscortCount = e.VIPDetails.EscortCount.VIPLeaderEscortCount, R += VIPPersonCount ? parseInt(VIPPersonCount) : 0, k += J ? parseInt(J) : 0, g += Z ? parseInt(Z) : 0, P += _ ? parseInt(_) : 0, L += K ? parseInt(K) : 0, S += Q ? parseInt(Q) : 0, x += EscortCount ? parseInt(EscortCount) : 0, a += "<tr><td>" + H + '</td><td class="bold">' + VIPPersonCount + "</td><td>" + J + "</td><td>" + Z + "</td><td>" + _ + "</td><td>" + K + "</td><td>" + Q + "</td><td>" + EscortCount + "</td></tr>"
    }), M > 1 && (s = '<tr><td>合计</td><td class="money-r">' + r.toFixed(2) + "</td><td>" + o + "</td><td>" + i + "</td><td>" + h + "</td><td>" + l + "</td></tr>" + s, n && (n = "<tr><td>合计</td><td>" + p + "</td><td>" + c + "</td><td>" + u + "</td><td>" + y + "</td><td>" + I + "</td><td>" + C + "</td></tr>" + n), d && (d = "<tr><td>合计</td><td>" + v + "</td><td>" + b + "</td><td>" + w + "</td><td>" + m + "</td><td>" + T + "</td><td>" + f + "</td></tr>" + d), a = '<tr><td>合计</td><td class="bold">' + R + "</td><td>" + k + "</td><td>" + g + "</td><td>" + P + "</td><td>" + L + "</td><td>" + S + "</td><td>" + x + "</td></tr>" + a);
    var H = '<table class="index-table"><thead><tr><th rowspan="2" class="width-first font-15b">总计</th><th rowspan="2" style="width:28%;border-bottom:none;">接待收入</th><th style="width: 28%" colspan="2">实体</th><th style="width: 28%" colspan="2">体验馆</th></tr><tr><th style="width:14%;">场次</th><th style="width:14%;">人次</th><th style="width:14%;">场次</th><th style="width:14%;">人次</th></tr></thead><tbody>' + s + "</tbody></table>";
    if (n) A = '<table class="index-table"><thead><tr><th class="width-first font-15b" rowspan="2">实体</th><th style="width:28%;" colspan="2">保险 ( ' + stbxzb + '% )</th><th colspan="2" style="width:28%;">非保 ( ' + stfbzb + '% )</th><th colspan="2" style="width:28%;">VIP ( ' + stvpzb + '% )</th></tr><tr><th style="width:14%">场次</th><th style="width:14%">人次</th><th style="width:14%">场次</th><th style="width:14%">人次</th><th style="width:14%">场次</th><th style="width:14%">人次</th></tr></thead><tbody>' + n + "</tbody></table>"; else var A = "";
    if (d) O = '<table class="index-table"><thead><tr><th class="width-first font-15b" rowspan="2">体验馆</th><th style="width: 28%" colspan="2">保险 ( ' + tybxzb + '% )</th><th style="width: 28%" colspan="2">非保 ( ' + tyfbzb + '% )</th><th style="width: 28%" colspan="2">VIP ( ' + tyvpzb + '% )</th></tr><tr><th style="width: 14%">场次</th><th style="width: 14%">人次</th><th style="width: 14%">场次</th><th style="width: 14%">人次</th><th style="width: 14%">场次</th><th style="width: 14%">人次</th></tr></thead><tbody>' + d + "</tbody></table>"; else var O = "";
    var D = '<table class="index-table"><thead><tr><th class="width-first font-15b" rowspan="2">VIP详情</th><th style="width:12%">合计</th><th style="width:12%">国家<br>领导</th><th style="width:12%">省市<br>领导</th><th style="width:12%">集团<br>领导</th><th style="width:12%">外部<br>集团</th><th style="width:12%">之家<br>领导</th><th style="width:12%">陪同<br>人员</th></tr></thead><tbody>' + a + "</tbody></table>";
    e.find("#TotalRecep").append(H), e.find("#EntityReception").append(A), e.find("#Experience").append(O), e.find("#VIPDetails").append(D), $(".ReceptionServe .list-ti-content").append("<span>总收入 <em>" + r.toFixed(2) + "</em> 元</span>")
  }

  function o(t) {
    var e = $(".InOrOut .item-detail"), n = "", d = "", a = "", s = "", r = 0, o = 0, i = 0, h = 0, l = 0, p = 0, c = 0,
      u = 0, y = 0, I = 0, C = 0, v = 0, b = 0, w = 0, m = 0;
    e.append('<div id="checkHouseholds"></div><div id="checkPeople"></div>'), $.each(t, function (t, e) {
      var a = e.yuanqu, s = orgList[a];
      m++;
      var T = e.CheckIn.Total.CheckInHouseholds, f = e.CheckIn.Total.CheckInPeople,
        R = e.CheckIn.Independent.CheckInIndependentTypeHouseholds,
        k = e.CheckIn.Independent.CheckInIndependentTypePeople, g = e.CheckIn.Care.CheckInCareTypeHouseholds,
        P = e.CheckIn.Care.CheckInCareCareTypePeople, $ = e.CheckOut.Total.StayBackHouseholds,
        L = e.CheckOut.Total.StayBackPeople, S = e.CheckOut.Independent.StayBackIndependentHouseholds,
        x = e.CheckOut.Independent.StayBackIndependentPeople, M = e.CheckOut.Care.StayBackCareHouseholds,
        H = e.CheckOut.Care.StayBackCarePeople, A = e.NetOccupancy.Total.CheckInHouseholds,
        O = e.NetOccupancy.Total.CheckInPeople;
      n += "<tr><td>" + s + "</td><td>" + A + '</td><td class="bold">' + T + "</td><td>" + R + "</td><td>" + g + '</td><td class="bold">' + $ + "</td><td>" + S + "</td><td>" + M + "</td></tr>", d += "<tr><td>" + s + "</td><td>" + O + '</td><td class="bold">' + f + "</td><td>" + k + "</td><td>" + P + '</td><td class="bold">' + L + "</td><td>" + x + "</td><td>" + H + "</td></tr>", r += T ? parseInt(T) : 0, o += f ? parseInt(f) : 0, i += R ? parseInt(R) : 0, h += k ? parseInt(k) : 0, l += g ? parseInt(g) : 0, p += P ? parseInt(P) : 0, c += $ ? parseInt($) : 0, u += L ? parseInt(L) : 0, y += S ? parseInt(S) : 0, I += x ? parseInt(x) : 0, C += M ? parseInt(M) : 0, v += H ? parseInt(H) : 0, b += A ? parseInt(A) : 0, w += O ? parseInt(O) : 0
    }), m > 1 && (n = "<tr><td>合计</td><td>" + b + '</td><td class="bold">' + r + "</td><td>" + i + "</td><td>" + l + '</td><td class="bold">' + c + "</td><td>" + y + "</td><td>" + C + "</td></tr>" + n, d = "<tr><td>合计</td><td>" + w + '</td><td class="bold">' + o + "</td><td>" + h + "</td><td>" + p + '</td><td class="bold">' + u + "</td><td>" + I + "</td><td>" + v + "</td></tr>" + d), a = '<table class="index-table"><thead><tr><th rowspan="2" class="width-first font-15b">户数</th><th rowspan="2" style="border-bottom:none;">净入住</th><th colspan="3">入住</th><th colspan="3">退住</th></tr><tr><th>小计</th><th>独立</th><th>护理</th><th>小计</th><th>独立</th><th>护理</th></tr></thead><tbody>' + n + "</tbody></table>", s = '<table class="index-table"><thead><tr><th rowspan="2" class="width-first font-15b">人数</th><th rowspan="2" style="border-bottom:none;">净入住</th><th colspan="3">入住</th><th colspan="3">退住</th></tr><tr><th>小计</th><th>独立</th><th>护理</th><th>小计</th><th>独立</th><th>护理</th></tr></thead><tbody>' + d + "</tbody></table>", e.find("#checkHouseholds").append(a), e.find("#checkPeople").append(s), $(".InOrOut .list-ti-content").append("<span>净入住 <em>" + b + "</em>户</span>")
  }

  function i(t) {
    var e = $(".CommunityLiveIn .item-detail"), n = "", d = "", a = "", s = "", r = "", o = "", i = "", h = "", l = "",
      p = "", c = "", u = "", y = "", I = "";
    e.append('<div id="LiveIn"></div><div id="CareGrade" class="yellow-wrap"></div><div id="Structure"></div>');
    var C = 0, v = 0, b = 0, w = 0, m = 0, T = 0, f = 0, R = 0, k = 0, g = 0, P = 0, L = 0, S = 0, x = 0, M = 0, H = 0,
      A = 0, O = 0, D = 0, j = 0, N = 0, E = 0, F = 0, z = 0, V = 0, B = 0, q = 0, U = 0, W = 0, Y = 0, G = 0, X = 0,
      J = 0, Z = 0, _ = 0, K = 0, Q = 0, tt = 0;
    $.each(t, function (t, e) {
      var a = e.yuanqu, s = orgList[a];
      if (U++, e.LiveInCount) {
        var i = e.TotalHouseholds.Total, h = e.TotalHouseholds.Independent, u = e.TotalHouseholds.Care,
          y = e.LiveInCount.LiveInTotal.CheckInPeople, I = e.LiveInCount.LiveInTotal.CheckInHouseholds,
          T = e.LiveInCount.LiveInTotal.CommunityCheckInRate,
          k = e.LiveInCount.IndependentType.Total.IndependentTypePeople,
          $ = e.LiveInCount.IndependentType.Total.IndependentTypeHouseholds,
          L = e.LiveInCount.IndependentType.Total.IndependentTypeCheckInRate,
          Y = e.LiveInCount.CareType.Total.CareTypePeople, X = e.LiveInCount.CareType.Total.CareTypeHouseholds,
          K = e.LiveInCount.CareType.Total.CareTypeRate, tt = e.LiveInCount.AssistCare.AssistCareHouseholds,
          et = e.LiveInCount.ProfessionCare.ProfessionCareHouseholds,
          nt = e.LiveInCount.MemoryCare.MemoryCareHouseholds,
          dt = e.LiveInCount.IndependentType.Care0.IndependentTypeCheckInCare0,
          at = e.LiveInCount.IndependentType.Care1.IndependentTypeCheckInCare1,
          st = e.LiveInCount.IndependentType.Care2.IndependentTypeCheckInCare2,
          rt = e.LiveInCount.IndependentType.Care3.IndependentTypeCheckInCare3,
          ot = e.LiveInCount.IndependentType.Care4.IndependentTypeCheckInCare4,
          it = e.LiveInCount.IndependentType.Care5.IndependentTypeCheckInCare5,
          ht = e.LiveInCount.CareType.CareType0.CareTypeCheckInCare0,
          lt = e.LiveInCount.CareType.CareType1.CareTypeCheckInCare1,
          pt = e.LiveInCount.CareType.CareType2.CareTypeCheckInCare2,
          ct = e.LiveInCount.CareType.CareType3.CareTypeCheckInCare3,
          ut = e.LiveInCount.CareType.CareType4.CareTypeCheckInCare4,
          yt = e.LiveInCount.CareType.CareType5.CareTypeCheckInCare5;
        b += i ? parseInt(i) : 0, w += h ? parseInt(h) : 0, m += u ? parseInt(u) : 0, C += y ? parseInt(y) : 0, v += I ? parseInt(I) : 0, f += k ? parseInt(k) : 0, R += $ ? parseInt($) : 0, g += Y ? parseInt(Y) : 0, P += X ? parseInt(X) : 0, S += tt ? parseInt(tt) : 0, x += et ? parseInt(et) : 0, M += nt ? parseInt(nt) : 0, H += dt ? parseInt(dt) : 0, A += at ? parseInt(at) : 0, O += st ? parseInt(st) : 0, D += rt ? parseInt(rt) : 0, j += ot ? parseInt(ot) : 0, N += it ? parseInt(it) : 0, E += ht ? parseInt(ht) : 0, F += lt ? parseInt(lt) : 0, z += pt ? parseInt(pt) : 0, V += ct ? parseInt(ct) : 0, B += ut ? parseInt(ut) : 0, q += yt ? parseInt(yt) : 0, n += "<tr><td>" + s + '</td><td class="bold">' + y + '</td><td class="bold">' + T + "%</td><td>" + k + "</td><td>" + L + "%</td><td>" + Y + "</td><td>" + K + "%</td></tr>", d += "<tr><td>" + s + '</td><td class="bold">' + I + "</td><td>" + $ + "</td><td>" + X + "</td><td>" + tt + "</td><td>" + et + "</td><td>" + nt + "</td></tr>", r += "<tr><td>" + s + "</td><td>" + dt + "</td><td>" + at + "</td><td>" + st + "</td><td>" + rt + "</td><td>" + ot + "</td><td>" + it + "</td></tr>", o += "<tr><td>" + s + "</td><td>" + ht + "</td><td>" + lt + "</td><td>" + pt + "</td><td>" + ct + "</td><td>" + ut + "</td><td>" + yt + "</td></tr>"
      }
      if (e.ResidentStructure) {
        var It = e.ResidentStructure.IndependentTypeCheckInResident.Male.IndependentTypeMaleNumber,
          Ct = e.ResidentStructure.IndependentTypeCheckInResident.Male.IndependentTypeMaleRate,
          vt = e.ResidentStructure.IndependentTypeCheckInResident.Female.IndependentTypeFemaleNumber,
          bt = e.ResidentStructure.IndependentTypeCheckInResident.Female.IndependentTypeFemalRate,
          wt = e.ResidentStructure.CommunityCheckInResident.Male.CommunityMalePeople;
        TotalFemaleNumber = e.ResidentStructure.CommunityCheckInResident.FeMale.CommunityFeMalePeople, TwoHouserholdsNumber = e.ResidentStructure.IndependentTypeCheckInResident.TwoHouserholds.IndependentTwoHouserholdsNumber, TwoHouserholdsRate = e.ResidentStructure.IndependentTypeCheckInResident.TwoHouserholds.IndependentTwoHouserholdsRate, SingleHouserholdsNumber = e.ResidentStructure.IndependentTypeCheckInResident.SingleHouserHolds.IndependentSingleHouserholdsNumber, SingleHouserholdsRate = e.ResidentStructure.IndependentTypeCheckInResident.SingleHouserHolds.IndependentSingleHouserholdsRate, AvgAge = e.ResidentStructure.CommunityCheckInResident.CommunityResidentAvgAge, IndependentAvgAge = e.ResidentStructure.IndependentTypeCheckInResident.AvgAge, IndependentMaxAge = e.ResidentStructure.IndependentTypeCheckInResident.MaxAge, IndependentMinAge = e.ResidentStructure.IndependentTypeCheckInResident.MinAge, CareTypeAvgAge = e.ResidentStructure.CareTypeCheckInResident.CareAreaAvgAge, CareTypeMaxAge = e.ResidentStructure.CareTypeCheckInResident.CareTypeResidentMaxAge, CareTypeMinAge = e.ResidentStructure.CareTypeCheckInResident.CareTypeResidentMinAge, W += It ? parseInt(It) : 0, G += vt ? parseInt(vt) : 0, J += wt ? parseInt(wt) : 0, Z += TotalFemaleNumber ? parseInt(TotalFemaleNumber) : 0, _ += TwoHouserholdsNumber ? parseInt(TwoHouserholdsNumber) : 0, Q += SingleHouserholdsNumber ? parseInt(SingleHouserholdsNumber) : 0, l += "<tr><td>" + s + "</td><td>" + It + "</td><td>" + Ct + "%</td><td>" + vt + "</td><td>" + bt + "%</td></tr>", p += "<tr><td>" + s + "</td><td>" + TwoHouserholdsNumber + "</td><td>" + TwoHouserholdsRate + "%</td><td>" + SingleHouserholdsNumber + "</td><td>" + SingleHouserholdsRate + "%</td></tr>", c += "<tr><td>" + s + "</td><td>" + AvgAge + "</td><td>" + IndependentAvgAge + "</td><td>" + IndependentMaxAge + "</td><td>" + IndependentMinAge + "</td><td>" + CareTypeAvgAge + "</td><td>" + CareTypeMaxAge + "</td><td>" + CareTypeMinAge + "</td></tr>"
      }
    }), T = b && percent(v / b * 100) + "%" || "", k = w && percent(R / w * 100) + "%" || "", L = m && percent(P / m * 100) + "%" || "", Y = percent(W / (W + G) * 100), X = percent(G / (W + G) * 100), K = percent(_ / (_ + Q) * 100), tt = percent(Q / (_ + Q) * 100), U > 1 && (n = '<tr><td>合计</td><td class="bold">' + C + '</td><td class="bold">' + T + "</td><td>" + f + "</td><td>" + k + "</td><td>" + g + "</td><td>" + L + "</td></tr>" + n, d = '<tr><td>合计</td><td class="bold">' + v + "</td><td>" + R + "</td><td>" + P + "</td><td>" + S + "</td><td>" + x + "</td><td>" + M + "</td></tr>" + d, r = "<tr><td>合计</td><td>" + H + "</td><td>" + A + "</td><td>" + O + "</td><td>" + D + "</td><td>" + j + "</td><td>" + N + "</td></tr>" + r, o = "<tr><td>合计</td><td>" + E + "</td><td>" + F + "</td><td>" + z + "</td><td>" + V + "</td><td>" + B + "</td><td>" + q + "</td></tr>" + o, l = "<tr><td>合计</td><td>" + W + "</td><td>" + Y + "%</td><td>" + G + "</td><td>" + X + "%</td></tr>" + l, p = "<tr><td>合计</td><td>" + _ + "</td><td>" + K + "%</td><td>" + Q + "</td><td>" + tt + "%</td></tr>" + p), "" != n && (a = '<table class="index-table"><thead><tr><th rowspan="2" class="width-first font-15b" style="border-bottom:none;">人数</th><th colspan="2" style="border-bottom:none;">小计</th><th colspan="2">独立</th><th colspan="2">护理</th></tr><tr><th style="width: 14%">人数</th><th style="width: 14%">%</th><th style="width: 14%">人数</th><th style="width: 14%">%</th><th style="width: 14%">人数</th><th style="width: 14%">%</th></tr></thead><tbody>' + n + "</tbody></table>"), "" != d && (s = '<table class="index-table"><thead><tr><th rowspan="2" class="width-first font-15b">户数</th><th rowspan="2" style="width:14%;border-bottom:none;">小计</th><th rowspan="2" style="width: 14%">独立</th><th colspan="4">护理</th></tr><tr><th style="width: 14%">小计</th><th style="width: 14%">协护</th><th style="width: 14%">专护</th><th style="width: 14%">记忆</th></tr></thead><tbody>' + d + "</tbody></table>"), "" != r && (i = '<table class="index-table"><thead><tr><th class="width-first font-15b">独立区</th><th style="width:14%">0级</th><th style="width:14%">1级</th><th style="width:14%">2级</th><th style="width:14%">3级</th><th style="width:14%">4级</th><th style="width:14%">5级</th></tr></thead><tbody>' + r + "</tbody></table>"), "" != o && (h = '<table class="index-table"><thead><tr><th class="width-first font-15b">护理区</th><th style="width:14%">0级</th><th style="width:14%">1级</th><th style="width:14%">2级</th><th style="width:14%">3级</th><th style="width:14%">4级</th><th style="width:14%">5级</th></tr></thead><tbody>' + o + "</tbody></table>"), "" != l && (u = '<table class="index-table"><thead><tr><th class="width-first font-15b">性别</th><th style="width: 21%">男性</th><th style="width: 21%">%</th><th style="width: 21%">女性</th><th style="width: 21%">%</th></tr></thead><tbody>' + l + "</tbody></table>"), "" != p && (y = '<table class="index-table"><thead><tr><th class="width-first font-15b">户型</th><th style="width: 21%">双人</th><th style="width: 21%">%</th><th style="width: 21%">单人</th><th style="width: 21%">%</th></tr></thead><tbody>' + p + "</tbody></table>"), "" != c && (I = '<table class="index-table"><thead><tr><th rowspan="2" class="width-first font-15b">年龄</th><th rowspan="2" style="border-bottom:none;width:12%">平均</th><th colspan="3" style="width:36%">独立</th><th colspan="3" style="width:36%">护理</th></tr><tr><th style="width:12%">平均</th><th style="width:12%">最大</th><th style="width:12%">最小</th><th style="width:12%">平均</th><th style="width:12%">最大</th><th style="width:12%">最小</th></tr></thead><tbody>' + c + "</tbody></table>"), e.find("#LiveIn").append('<div class="table-top">居民在住</div>' + s + a), e.find("#CareGrade").append('<div class="table-top">护理等级分布 <span>(单位：人数)</span></div>' + i + h), e.find("#Structure").append('<div class="table-top">独立区居民结构</div>' + u + y + I), $(".CommunityLiveIn .list-ti-content").append("<span>在住率 <em>" + T + "%</em></span>")
  }

  function h(t) {
    var e = $(".ProjectMaintance .item-detail"), n = "", d = "", a = 0, s = 0, r = 0, o = 0, i = 0, h = 0, l = 0, p = 0,
      c = 0, u = 0, y = 0, I = 0;
    $.each(t, function (t, e) {
      if (e.ResidentMaintain) {
        var d = e.yuanqu, r = orgList[d];
        I++;
        var i = e.ResidentMaintain.Total.ResidentMaintainCount,
          l = e.ResidentMaintain.IntenseCurrent.IntenseCurrentCount,
          c = e.ResidentMaintain.IntenseCurrent.IntenseCurrentRate, u = e.ResidentMaintain.WeakCurrent.WeakCurrentCount,
          C = e.ResidentMaintain.WeakCurrent.WeakCurrentRate, v = e.ResidentMaintain.Heater.HeaterCount,
          b = e.ResidentMaintain.Heater.HeaterRate, w = e.ResidentMaintain.SynthesizeMaintain.SynthesizeMaintainCount,
          m = e.ResidentMaintain.SynthesizeMaintain.SynthesizeMaintainRate;
        OtherCount = e.ResidentMaintain.Other.OtherCount, OtherRate = e.ResidentMaintain.Other.OtherRate, a += i ? parseInt(i) : 0, s += l ? parseInt(l) : 0, o += u ? parseInt(u) : 0, h += v ? parseInt(v) : 0, p += w ? parseInt(w) : 0, y += OtherCount ? parseInt(OtherCount) : 0, n += "<tr><td>" + r + '</td><td class="bold">' + i + '</td><td class="split-td"><div>' + l + "</div><div>" + c + '%</div></td><td class="split-td"><div>' + u + "</div><div>" + C + '%</div></td><td class="split-td"><div>' + v + "</div><div>" + b + '%</div></td><td class="split-td"><div>' + w + "</div><div>" + m + '%</div></td><td class="split-td"><div>' + OtherCount + "</div><div>" + OtherRate + "%</div></td>"
      }
    }), r = percent(s / a * 100), i = percent(o / a * 100), l = percent(h / a * 100), c = percent(p / a * 100), u = percent(y / a * 100), I > 1 && (n = '<tr><td>合计</td><td class="bold">' + a + '</td><td class="split-td"><div>' + s + "</div><div>" + r + '%</div></td><td class="split-td"><div>' + o + "</div><div>" + i + '%</div></td><td class="split-td"><div>' + h + "</div><div>" + l + '%</div></td><td class="split-td"><div>' + p + "</div><div>" + c + '%</div></td><td class="split-td"><div>' + y + "</div><div>" + u + "%</div></td></tr>" + n), "" != n && (d = '<table class="index-table"><thead><tr><th class="width-first"></th><th style="width: 14%">总计</th><th style="width: 14%">强电</th><th style="width: 14%">弱电</th><th style="width: 14%">暖通</th><th style="width: 14%">综合</th><th style="width: 14%">其他</th></tr></thead><tbody>' + n + "</tbody></table>"), e.append(d), $(".ProjectMaintance  .list-ti-content").append("<span>维修总计 <em>" + a + "</em> 次</span>")
  }

  function l(t) {
    var e = "";
    $.each(t, function (t, n) {
      e += '<li class="item-content ' + menuList[n].codeName + '"><div class="item-inner-place"></div><div class="item-inner"><div class="item-title"><i class="icon icon-menu"></i><span class="list-title">' + menuList[n].name + '</span><div class="list-ti-content"></div><i class="icon icon-down pull-right"></i></div></div><div class="item-detail"></div></li>'
    }), $(".fold-list").html(e)
  }

  function p(t) {
    var e = {data: {date: t, OA: oaId, url: "社区速报"}};
    getData("POST", interfaces.getAccess, "", e, function (t) {
      u--, $("#view_count").text(t.data.count), 0 == u && $.hidePreloader()
    }), t == resDate.getFormTime(new Date) ? $("#date-wrap").show() : $("#date-wrap").hide()
  }

  function c(t, e, n, d) {
    if (!(n < 45 || d > 45)) return t ?
      void(n >= 35 && ($(".switch-date").addClass("show"), $(".switch-date div").addClass("show"), e > 0 ? $(".switch-date .next").removeClass("show") :
        e < 0 && $(".switch-date .prev").removeClass("show"))) : ($(".switch-date").removeClass("show"), $(".switch-date div").removeClass("show"), void $(".switch-date div").removeClass("dragging"))
  }

  foldListInit(), t(dataDate), $(".content").on("scroll", function () {
    var t = $(".item-content.show");
    $.each(t, function (t, e) {
      $(this);
      var n = $(this).offset().top;
      n > -$(this).find(".item-detail").attr("height") && n < 0 ? ($(this).find(".item-inner").addClass("fixed-top-tit"), $(this).find(".item-inner-place").show()) : ($(this).find(".item-inner").removeClass("fixed-top-tit"), $(this).find(".item-inner-place").hide())
    })
  });
  var u;
  $("#datepicker").calendar({
    dateFormat: "yyyy-mm-dd", maxDate: new Date, onChange: function (e, n, d) {
      var a = d[0];
      if (a == $("#datepicker").val()) return !1;
      t(a)
    }, onOpen: function (t) {
      showOverlay(), t.setValue([$("#datepicker").val()])
    }, onClose: function (t) {
      hideOverlay()
    }
  });
  var y, I, C;
  $(".page-group").on("touchstart", function (t) {
    var e = t.targetTouches[0];
    y = e.screenX, I = e.screenY, C = new Date
  }), $(".page-group").on("touchmove", function (t) {
    var e = t.changedTouches[0], n = e.screenX - y, d = e.screenY - I;
    c(!0, n, n < 0 && -n || n, d < 0 && -d || d)
  }), $(".page-group").on("touchend", function (e) {
    c(!1);
    var n = e.changedTouches[0], d = n.screenX - y, a = n.screenY - I, s = new Date - C, r = d < 0 && -d || d,
      o = a < 0 && -a || a;
    if (!(r < 45 || o > 45)) if (d > 0 && s <= 200 && r >= 45) {
      console.log("向右滑动");
      var i = $("#datepicker").val();
      t(getPrevDay(i))
    } else if (d < 0 && s <= 200 && r >= 45) {
      if (console.log("向左滑动"), (i = $("#datepicker").val()) == resDate.getFormTime(new Date)) return $.toast("今日已是最新日期"), !1;
      t(getNextDay(i))
    }
  }), $("#totoday").on("click", function () {
    t(resDate.getFormTime(new Date))
  })
});