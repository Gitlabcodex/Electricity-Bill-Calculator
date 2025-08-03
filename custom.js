const bangladeshData = [
            {
                division: "ঢাকা",
                districts: [
                    {
                        district: "ঢাকা",
                        upazilas: [
                            {
                                upazila: "সাভার",
                                areas: [
                                    { area: "সাভার বাজার", providers: [{ name: "ঢাকা বিদ্যুৎ সরবরাহ কোম্পানি (ডেসকো)", tariff: { residential: [{ slab: "0-75", rate: 4.00 }, { slab: "76-200", rate: 5.45 }, { slab: "201-300", rate: 6.00 }, { slab: "301-400", rate: 6.30 }, { slab: "401-600", rate: 9.30 }, { slab: "601+", rate: 10.70 }], fixedCharge: 40, demandCharge: 20 } }, { name: "বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (আরইবি)", tariff: { residential: [{ slab: "0-50", rate: 3.80 }, { slab: "51-150", rate: 5.10 }, { slab: "151-250", rate: 5.40 }, { slab: "251-400", rate: 5.90 }, { slab: "401+", rate: 7.50 }], fixedCharge: 30, demandCharge: 15 } }] },
                                    { area: "আশুলিয়া", providers: [{ name: "ঢাকা বিদ্যুৎ সরবরাহ কোম্পানি (ডেসকো)", tariff: { residential: [{ slab: "0-75", rate: 4.00 }, { slab: "76-200", rate: 5.45 }, { slab: "201-300", rate: 6.00 }, { slab: "301-400", rate: 6.30 }, { slab: "401-600", rate: 9.30 }, { slab: "601+", rate: 10.70 }], fixedCharge: 40, demandCharge: 20 } }] },
                                    { area: "ধামরাই", providers: [{ name: "বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (আরইবি)", tariff: { residential: [{ slab: "0-50", rate: 3.80 }, { slab: "51-150", rate: 5.10 }, { slab: "151-250", rate: 5.40 }, { slab: "251-400", rate: 5.90 }, { slab: "401+", rate: 7.50 }], fixedCharge: 30, demandCharge: 15 } }] }
                                ]
                            },
                            {
                                upazila: "কেরানীগঞ্জ",
                                areas: [
                                    { area: "কেরানীগঞ্জ সদর", providers: [{ name: "ঢাকা পাওয়ার ডিস্ট্রিবিউশন কোম্পানি (ডিপিডিসি)", tariff: { residential: [{ slab: "0-75", rate: 4.10 }, { slab: "76-200", rate: 5.50 }, { slab: "201-300", rate: 6.10 }, { slab: "301-400", rate: 6.40 }, { slab: "401-600", rate: 9.40 }, { slab: "601+", rate: 10.80 }], fixedCharge: 45, demandCharge: 25 } }] },
                                    { area: "জিনজিরা", providers: [{ name: "ঢাকা পাওয়ার ডিস্ট্রিবিউশন কোম্পানি (ডিপিডিসি)", tariff: { residential: [{ slab: "0-75", rate: 4.10 }, { slab: "76-200", rate: 5.50 }, { slab: "201-300", rate: 6.10 }, { slab: "301-400", rate: 6.40 }, { slab: "401-600", rate: 9.40 }, { slab: "601+", rate: 10.80 }], fixedCharge: 45, demandCharge: 25 } }] }
                                ]
                            },
                            {
                                upazila: "দোহার",
                                areas: [
                                    { area: "দোহার বাজার", providers: [{ name: "বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (আরইবি)", tariff: { residential: [{ slab: "0-50", rate: 3.80 }, { slab: "51-150", rate: 5.10 }, { slab: "151-250", rate: 5.40 }, { slab: "251-400", rate: 5.90 }, { slab: "401+", rate: 7.50 }], fixedCharge: 30, demandCharge: 15 } }] }
                                ]
                            },
                            {
                                upazila: "নবাবগঞ্জ",
                                areas: [
                                    { area: "নবাবগঞ্জ সদর", providers: [{ name: "বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (আরইবি)", tariff: { residential: [{ slab: "0-50", rate: 3.80 }, { slab: "51-150", rate: 5.10 }, { slab: "151-250", rate: 5.40 }, { slab: "251-400", rate: 5.90 }, { slab: "401+", rate: 7.50 }], fixedCharge: 30, demandCharge: 15 } }] }
                                ]
                            }
                        ]
                    },
                    {
                        district: "গাজীপুর",
                        upazilas: [
                            {
                                upazila: "গাজীপুর সদর",
                                areas: [
                                    { area: "চৌরাস্তা", providers: [{ name: "বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (আরইবি)", tariff: { residential: [{ slab: "0-50", rate: 3.80 }, { slab: "51-150", rate: 5.10 }, { slab: "151-250", rate: 5.40 }, { slab: "251-400", rate: 5.90 }, { slab: "401+", rate: 7.50 }], fixedCharge: 30, demandCharge: 15 } }] },
                                    { area: "জয়দেবপুর", providers: [{ name: "বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (আরইবি)", tariff: { residential: [{ slab: "0-50", rate: 3.80 }, { slab: "51-150", rate: 5.10 }, { slab: "151-250", rate: 5.40 }, { slab: "251-400", rate: 5.90 }, { slab: "401+", rate: 7.50 }], fixedCharge: 30, demandCharge: 15 } }] }
                                ]
                            },
                            {
                                upazila: "কালিয়াকৈর",
                                areas: [
                                    { area: "মৌচাক", providers: [{ name: "বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (আরইবি)", tariff: { residential: [{ slab: "0-50", rate: 3.80 }, { slab: "51-150", rate: 5.10 }, { slab: "151-250", rate: 5.40 }, { slab: "251-400", rate: 5.90 }, { slab: "401+", rate: 7.50 }], fixedCharge: 30, demandCharge: 15 } }] }
                                ]
                            },
                            {
                                upazila: "শ্রীপুর",
                                areas: [
                                    { area: "মাওনা", providers: [{ name: "বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (আরইবি)", tariff: { residential: [{ slab: "0-50", rate: 3.80 }, { slab: "51-150", rate: 5.10 }, { slab: "151-250", rate: 5.40 }, { slab: "251-400", rate: 5.90 }, { slab: "401+", rate: 7.50 }], fixedCharge: 30, demandCharge: 15 } }] }
                                ]
                            }
                        ]
                    },
                    {
                        district: "ফরিদপুর",
                        upazilas: [
                            {
                                upazila: "ফরিদপুর সদর",
                                areas: [
                                    { area: "ফরিদপুর শহর", providers: [{ name: "বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ড (বিপিডিবি)", tariff: { residential: [{ slab: "0-75", rate: 3.90 }, { slab: "76-200", rate: 5.30 }, { slab: "201-300", rate: 5.90 }, { slab: "301-400", rate: 6.20 }, { slab: "401-600", rate: 9.20 }, { slab: "601+", rate: 10.60 }], fixedCharge: 35, demandCharge: 18 } }] }
                                ]
                            },
                            {
                                upazila: "ভাঙ্গা",
                                areas: [
                                    { area: "ভাঙ্গা বাজার", providers: [{ name: "বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (আরইবি)", tariff: { residential: [{ slab: "0-50", rate: 3.80 }, { slab: "51-150", rate: 5.10 }, { slab: "151-250", rate: 5.40 }, { slab: "251-400", rate: 5.90 }, { slab: "401+", rate: 7.50 }], fixedCharge: 30, demandCharge: 15 } }] }
                                ]
                            }
                        ]
                    },
                    {
                        district: "টাঙ্গাইল",
                        upazilas: [
                            {
                                upazila: "টাঙ্গাইল সদর",
                                areas: [
                                    { area: "টাঙ্গাইল শহর", providers: [{ name: "বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (আরইবি)", tariff: { residential: [{ slab: "0-50", rate: 3.80 }, { slab: "51-150", rate: 5.10 }, { slab: "151-250", rate: 5.40 }, { slab: "251-400", rate: 5.90 }, { slab: "401+", rate: 7.50 }], fixedCharge: 30, demandCharge: 15 } }] }
                                ]
                            },
                            {
                                upazila: "মির্জাপুর",
                                areas: [
                                    { area: "মির্জাপুর বাজার", providers: [{ name: "বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (আরইবি)", tariff: { residential: [{ slab: "0-50", rate: 3.80 }, { slab: "51-150", rate: 5.10 }, { slab: "151-250", rate: 5.40 }, { slab: "251-400", rate: 5.90 }, { slab: "401+", rate: 7.50 }], fixedCharge: 30, demandCharge: 15 } }] }
                                ]
                            }
                        ]
                    },
                    {
                        district: "মানিকগঞ্জ",
                        upazilas: [
                            {
                                upazila: "মানিকগঞ্জ সদর",
                                areas: [
                                    { area: "মানিকগঞ্জ শহর", providers: [{ name: "বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (আরইবি)", tariff: { residential: [{ slab: "0-50", rate: 3.80 }, { slab: "51-150", rate: 5.10 }, { slab: "151-250", rate: 5.40 }, { slab: "251-400", rate: 5.90 }, { slab: "401+", rate: 7.50 }], fixedCharge: 30, demandCharge: 15 } }] }
                                ]
                            },
                            {
                                upazila: "সিংগাইর",
                                areas: [
                                    { area: "সিংগাইর বাজার", providers: [{ name: "বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (আরইবি)", tariff: { residential: [{ slab: "0-50", rate: 3.80 }, { slab: "51-150", rate: 5.10 }, { slab: "151-250", rate: 5.40 }, { slab: "251-400", rate: 5.90 }, { slab: "401+", rate: 7.50 }], fixedCharge: 30, demandCharge: 15 } }] }
                                ]
                            }
                        ]
                    },
                    {
                        district: "মুন্সিগঞ্জ",
                        upazilas: [
                            {
                                upazila: "মুন্সিগঞ্জ সদর",
                                areas: [
                                    { area: "মুন্সিগঞ্জ শহর", providers: [{ name: "ঢাকা পাওয়ার ডিস্ট্রিবিউশন কোম্পানি (ডিপিডিসি)", tariff: { residential: [{ slab: "0-75", rate: 4.10 }, { slab: "76-200", rate: 5.50 }, { slab: "201-300", rate: 6.10 }, { slab: "301-400", rate: 6.40 }, { slab: "401-600", rate: 9.40 }, { slab: "601+", rate: 10.80 }], fixedCharge: 45, demandCharge: 25 } }] }
                                ]
                            },
                            {
                                upazila: "গজারিয়া",
                                areas: [
                                    { area: "গজারিয়া বাজার", providers: [{ name: "বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (আরইবি)", tariff: { residential: [{ slab: "0-50", rate: 3.80 }, { slab: "51-150", rate: 5.10 }, { slab: "151-250", rate: 5.40 }, { slab: "251-400", rate: 5.90 }, { slab: "401+", rate: 7.50 }], fixedCharge: 30, demandCharge: 15 } }] }
                                ]
                            }
                        ]
                    },
                    {
                        district: "নারায়ণগঞ্জ",
                        upazilas: [
                            {
                                upazila: "নারায়ণগঞ্জ সদর",
                                areas: [
                                    { area: "নারায়ণগঞ্জ শহর", providers: [{ name: "ঢাকা পাওয়ার ডিস্ট্রিবিউশন কোম্পানি (ডিপিডিসি)", tariff: { residential: [{ slab: "0-75", rate: 4.10 }, { slab: "76-200", rate: 5.50 }, { slab: "201-300", rate: 6.10 }, { slab: "301-400", rate: 6.40 }, { slab: "401-600", rate: 9.40 }, { slab: "601+", rate: 10.80 }], fixedCharge: 45, demandCharge: 25 } }] }
                                ]
                            },
                            {
                                upazila: "আড়াইহাজার",
                                areas: [
                                    { area: "আড়াইহাজার বাজার", providers: [{ name: "বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (আরইবি)", tariff: { residential: [{ slab: "0-50", rate: 3.80 }, { slab: "51-150", rate: 5.10 }, { slab: "151-250", rate: 5.40 }, { slab: "251-400", rate: 5.90 }, { slab: "401+", rate: 7.50 }], fixedCharge: 30, demandCharge: 15 } }] }
                                ]
                            }
                        ]
                    },
                    {
                        district: "নরসিংদী",
                        upazilas: [
                            {
                                upazila: "নরসিংদী সদর",
                                areas: [
                                    { area: "নরসিংদী শহর", providers: [{ name: "বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (আরইবি)", tariff: { residential: [{ slab: "0-50", rate: 3.80 }, { slab: "51-150", rate: 5.10 }, { slab: "151-250", rate: 5.40 }, { slab: "251-400", rate: 5.90 }, { slab: "401+", rate: 7.50 }], fixedCharge: 30, demandCharge: 15 } }] }
                                ]
                            },
                            {
                                upazila: "পলাশ",
                                areas: [
                                    { area: "ঘোড়াশাল", providers: [{ name: "বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (আরইবি)", tariff: { residential: [{ slab: "0-50", rate: 3.80 }, { slab: "51-150", rate: 5.10 }, { slab: "151-250", rate: 5.40 }, { slab: "251-400", rate: 5.90 }, { slab: "401+", rate: 7.50 }], fixedCharge: 30, demandCharge: 15 } }] }
                                ]
                            }
                        ]
                    },
                    {
                        district: "রাজবাড়ী",
                        upazilas: [
                            {
                                upazila: "রাজবাড়ী সদর",
                                areas: [
                                    { area: "রাজবাড়ী শহর", providers: [{ name: "বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ড (বিপিডিবি)", tariff: { residential: [{ slab: "0-75", rate: 3.90 }, { slab: "76-200", rate: 5.30 }, { slab: "201-300", rate: 5.90 }, { slab: "301-400", rate: 6.20 }, { slab: "401-600", rate: 9.20 }, { slab: "601+", rate: 10.60 }], fixedCharge: 35, demandCharge: 18 } }] }
                                ]
                            }
                        ]
                    },
                    {
                        district: "শরীয়তপুর",
                        upazilas: [
                            {
                                upazila: "শরীয়তপুর সদর",
                                areas: [
                                    { area: "শরীয়তপুর শহর", providers: [{ name: "বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (আরইবি)", tariff: { residential: [{ slab: "0-50", rate: 3.80 }, { slab: "51-150", rate: 5.10 }, { slab: "151-250", rate: 5.40 }, { slab: "251-400", rate: 5.90 }, { slab: "401+", rate: 7.50 }], fixedCharge: 30, demandCharge: 15 } }] }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                division: "চট্টগ্রাম",
                districts: [
                    {
                        district: "চট্টগ্রাম",
                        upazilas: [
                            {
                                upazila: "পাহাড়তলী",
                                areas: [
                                    { area: "পাহাড়তলী", providers: [{ name: "বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ড (বিপিডিবি)", tariff: { residential: [{ slab: "0-75", rate: 3.90 }, { slab: "76-200", rate: 5.30 }, { slab: "201-300", rate: 5.90 }, { slab: "301-400", rate: 6.20 }, { slab: "401-600", rate: 9.20 }, { slab: "601+", rate: 10.60 }], fixedCharge: 35, demandCharge: 18 } }] },
                                    { area: "আগ্রাবাদ", providers: [{ name: "বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ড (বিপিডিবি)", tariff: { residential: [{ slab: "0-75", rate: 3.90 }, { slab: "76-200", rate: 5.30 }, { slab: "201-300", rate: 5.90 }, { slab: "301-400", rate: 6.20 }, { slab: "401-600", rate: 9.20 }, { slab: "601+", rate: 10.60 }], fixedCharge: 35, demandCharge: 18 } }] }
                                ]
                            },
                            {
                                upazila: "কোতোয়ালী",
                                areas: [
                                    { area: "লালদিঘী", providers: [{ name: "বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ড (বিপিডিবি)", tariff: { residential: [{ slab: "0-75", rate: 3.90 }, { slab: "76-200", rate: 5.30 }, { slab: "201-300", rate: 5.90 }, { slab: "301-400", rate: 6.20 }, { slab: "401-600", rate: 9.20 }, { slab: "601+", rate: 10.60 }], fixedCharge: 35, demandCharge: 18 } }] },
                                    { area: "আন্দরকিল্লা", providers: [{ name: "বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ড (বিপিডিবি)", tariff: { residential: [{ slab: "0-75", rate: 3.90 }, { slab: "76-200", rate: 5.30 }, { slab: "201-300", rate: 5.90 }, { slab: "301-400", rate: 6.20 }, { slab: "401-600", rate: 9.20 }, { slab: "601+", rate: 10.60 }], fixedCharge: 35, demandCharge: 18 } }] }
                                ]
                            },
                            {
                                upazila: "সীতাকুণ্ড",
                                areas: [
                                    { area: "সীতাকুণ্ড বাজার", providers: [{ name: "বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (আরইবি)", tariff: { residential: [{ slab: "0-50", rate: 3.80 }, { slab: "51-150", rate: 5.10 }, { slab: "151-250", rate: 5.40 }, { slab: "251-400", rate: 5.90 }, { slab: "401+", rate: 7.50 }], fixedCharge: 30, demandCharge: 15 } }] }
                                ]
                            },
                            {
                                upazila: "মিরসরাই",
                                areas: [
                                    { area: "বড়তাকিয়া", providers: [{ name: "বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (আরইবি)", tariff: { residential: [{ slab: "0-50", rate: 3.80 }, { slab: "51-150", rate: 5.10 }, { slab: "151-250", rate: 5.40 }, { slab: "251-400", rate: 5.90 }, { slab: "401+", rate: 7.50 }], fixedCharge: 30, demandCharge: 15 } }] }
                                ]
                            }
                        ]
                    },
                    {
                        district: "কক্সবাজার",
                        upazilas: [
                            {
                                upazila: "কক্সবাজার সদর",
                                areas: [
                                    { area: "সুগন্ধা পয়েন্ট", providers: [{ name: "বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ড (বিপিডিবি)", tariff: { residential: [{ slab: "0-75", rate: 3.90 }, { slab: "76-200", rate: 5.30 }, { slab: "201-300", rate: 5.90 }, { slab: "301-400", rate: 6.20 }, { slab: "401-600", rate: 9.20 }, { slab: "601+", rate: 10.60 }], fixedCharge: 35, demandCharge: 18 } }] },
                                    { area: "লাবনী পয়েন্ট", providers: [{ name: "বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ড (বিপিডিবি)", tariff: { residential: [{ slab: "0-75", rate: 3.90 }, { slab: "76-200", rate: 5.30 }, { slab: "201-300", rate: 5.90 }, { slab: "301-400", rate: 6.20 }, { slab: "401-600", rate: 9.20 }, { slab: "601+", rate: 10.60 }], fixedCharge: 35, demandCharge: 18 } }] }
                                ]
                            },
                            {
                                upazila: "টেকনাফ",
                                areas: [
                                    { area: "টেকনাফ বাজার", providers: [{ name: "বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ড (বিপিডিবি)", tariff: { residential: [{ slab: "0-75", rate: 3.90 }, { slab: "76-200", rate: 5.30 }, { slab: "201-300", rate: 5.90 }, { slab: "301-400", rate: 6.20 }, { slab: "401-600", rate: 9.20 }, { slab: "601+", rate: 10.60 }], fixedCharge: 35, demandCharge: 18 } }] }
                                ]
                            }
                        ]
                    },
                    {
                        district: "কুমিল্লা",
                        upazilas: [
                            {
                                upazila: "কুমিল্লা সদর দক্ষিণ",
                                areas: [
                                    { area: "কুমিল্লা শহর", providers: [{ name: "বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ড (বিপিডিবি)", tariff: { residential: [{ slab: "0-75", rate: 3.90 }, { slab: "76-200", rate: 5.30 }, { slab: "201-300", rate: 5.90 }, { slab: "301-400", rate: 6.20 }, { slab: "401-600", rate: 9.20 }, { slab: "601+", rate: 10.60 }], fixedCharge: 35, demandCharge: 18 } }] }
                                ]
                            },
                            {
                                upazila: "দাউদকান্দি",
                                areas: [
                                    { area: "দাউদকান্দি বাজার", providers: [{ name: "বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (আরইবি)", tariff: { residential: [{ slab: "0-50", rate: 3.80 }, { slab: "51-150", rate: 5.10 }, { slab: "151-250", rate: 5.40 }, { slab: "251-400", rate: 5.90 }, { slab: "401+", rate: 7.50 }], fixedCharge: 30, demandCharge: 15 } }] }
                                ]
                            }
                        ]
                    },
                    {
                        district: "ব্রাহ্মণবাড়িয়া",
                        upazilas: [
                            {
                                upazila: "ব্রাহ্মণবাড়িয়া সদর",
                                areas: [
                                    { area: "ব্রাহ্মণবাড়িয়া শহর", providers: [{ name: "বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ড (বিপিডিবি)", tariff: { residential: [{ slab: "0-75", rate: 3.90 }, { slab: "76-200", rate: 5.30 }, { slab: "201-300", rate: 5.90 }, { slab: "301-400", rate: 6.20 }, { slab: "401-600", rate: 9.20 }, { slab: "601+", rate: 10.60 }], fixedCharge: 35, demandCharge: 18 } }] }
                                ]
                            },
                            {
                                upazila: "আখাউড়া",
                                areas: [
                                    { area: "আখাউড়া বাজার", providers: [{ name: "বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (আরইবি)", tariff: { residential: [{ slab: "0-50", rate: 3.80 }, { slab: "51-150", rate: 5.10 }, { slab: "151-250", rate: 5.40 }, { slab: "251-400", rate: 5.90 }, { slab: "401+", rate: 7.50 }], fixedCharge: 30, demandCharge: 15 } }] }
                                ]
                            }
                        ]
                    },
                    {
                        district: "নোয়াখালী",
                        upazilas: [
                            {
                                upazila: "নোয়াখালী সদর",
                                areas: [
                                    { area: "মাইক্রোস্ট্যান্ড", providers: [{ name: "বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ড (বিপিডিবি)", tariff: { residential: [{ slab: "0-75", rate: 3.90 }, { slab: "76-200", rate: 5.30 }, { slab: "201-300", rate: 5.90 }, { slab: "301-400", rate: 6.20 }, { slab: "401-600", rate: 9.20 }, { slab: "601+", rate: 10.60 }], fixedCharge: 35, demandCharge: 18 } }] }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                division: "রাজশাহী",
                districts: [
                    {
                        district: "রাজশাহী",
                        upazilas: [
                            {
                                upazila: "পবা",
                                areas: [
                                    { area: "নওহাটা", providers: [{ name: "নেস্কো (NESCO)", tariff: { residential: [{ slab: "0-75", rate: 3.95 }, { slab: "76-200", rate: 5.35 }, { slab: "201-300", rate: 5.95 }, { slab: "301-400", rate: 6.25 }, { slab: "401-600", rate: 9.25 }, { slab: "601+", rate: 10.65 }], fixedCharge: 38, demandCharge: 22 } }] },
                                    { area: "কাটাখালী", providers: [{ name: "নেস্কো (NESCO)", tariff: { residential: [{ slab: "0-75", rate: 3.95 }, { slab: "76-200", rate: 5.35 }, { slab: "201-300", rate: 5.95 }, { slab: "301-400", rate: 6.25 }, { slab: "401-600", rate: 9.25 }, { slab: "601+", rate: 10.65 }], fixedCharge: 38, demandCharge: 22 } }] }
                                ]
                            },
                            {
                                upazila: "রাজশাহী সদর",
                                areas: [
                                    { area: "সাহেব বাজার", providers: [{ name: "নেস্কো (NESCO)", tariff: { residential: [{ slab: "0-75", rate: 3.95 }, { slab: "76-200", rate: 5.35 }, { slab: "201-300", rate: 5.95 }, { slab: "301-400", rate: 6.25 }, { slab: "401-600", rate: 9.25 }, { slab: "601+", rate: 10.65 }], fixedCharge: 38, demandCharge: 22 } }] }
                                ]
                            }
                        ]
                    },
                    {
                        district: "বগুড়া",
                        upazilas: [
                            {
                                upazila: "বগুড়া সদর",
                                areas: [
                                    { area: "সাতমাথা", providers: [{ name: "নেস্কো (NESCO)", tariff: { residential: [{ slab: "0-75", rate: 3.95 }, { slab: "76-200", rate: 5.35 }, { slab: "201-300", rate: 5.95 }, { slab: "301-400", rate: 6.25 }, { slab: "401-600", rate: 9.25 }, { slab: "601+", rate: 10.65 }], fixedCharge: 38, demandCharge: 22 } }] },
                                    { area: "শেরপুর", providers: [{ name: "বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (আরইবি)", tariff: { residential: [{ slab: "0-50", rate: 3.80 }, { slab: "51-150", rate: 5.10 }, { slab: "151-250", rate: 5.40 }, { slab: "251-400", rate: 5.90 }, { slab: "401+", rate: 7.50 }], fixedCharge: 30, demandCharge: 15 } }] }
                                ]
                            }
                        ]
                    },
                    {
                        district: "পাবনা",
                        upazilas: [
                            {
                                upazila: "পাবনা সদর",
                                areas: [
                                    { area: "পাবনা শহর", providers: [{ name: "নেস্কো (NESCO)", tariff: { residential: [{ slab: "0-75", rate: 3.95 }, { slab: "76-200", rate: 5.35 }, { slab: "201-300", rate: 5.95 }, { slab: "301-400", rate: 6.25 }, { slab: "401-600", rate: 9.25 }, { slab: "601+", rate: 10.65 }], fixedCharge: 38, demandCharge: 22 } }] }
                                ]
                            },
                            {
                                upazila: "ঈশ্বরদী",
                                areas: [
                                    { area: "ঈশ্বরদী বাজার", providers: [{ name: "নেস্কো (NESCO)", tariff: { residential: [{ slab: "0-75", rate: 3.95 }, { slab: "76-200", rate: 5.35 }, { slab: "201-300", rate: 5.95 }, { slab: "301-400", rate: 6.25 }, { slab: "401-600", rate: 9.25 }, { slab: "601+", rate: 10.65 }], fixedCharge: 38, demandCharge: 22 } }] }
                                ]
                            }
                        ]
                    },
                    {
                        district: "নাটোর",
                        upazilas: [
                            {
                                upazila: "নাটোর সদর",
                                areas: [
                                    { area: "নাটোর শহর", providers: [{ name: "নেস্কো (NESCO)", tariff: { residential: [{ slab: "0-75", rate: 3.95 }, { slab: "76-200", rate: 5.35 }, { slab: "201-300", rate: 5.95 }, { slab: "301-400", rate: 6.25 }, { slab: "401-600", rate: 9.25 }, { slab: "601+", rate: 10.65 }], fixedCharge: 38, demandCharge: 22 } }] }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                division: "খুলনা",
                districts: [
                    {
                        district: "খুলনা",
                        upazilas: [
                            {
                                upazila: "খুলনা সদর",
                                areas: [
                                    { area: "শিববাড়ী", providers: [{ name: "ওয়েস্ট জোন পাওয়ার ডিস্ট্রিবিউশন কোম্পানি (ওজোপাডিকো)", tariff: { residential: [{ slab: "0-75", rate: 3.85 }, { slab: "76-200", rate: 5.25 }, { slab: "201-300", rate: 5.85 }, { slab: "301-400", rate: 6.15 }, { slab: "401-600", rate: 9.15 }, { slab: "601+", rate: 10.55 }], fixedCharge: 37, demandCharge: 21 } }] },
                                    { area: "দৌলতপুর", providers: [{ name: "ওয়েস্ট জোন পাওয়ার ডিস্ট্রিবিউশন কোম্পানি (ওজোপাডিকো)", tariff: { residential: [{ slab: "0-75", rate: 3.85 }, { slab: "76-200", rate: 5.25 }, { slab: "201-300", rate: 5.85 }, { slab: "301-400", rate: 6.15 }, { slab: "401-600", rate: 9.15 }, { slab: "601+", rate: 10.55 }], fixedCharge: 37, demandCharge: 21 } }] }
                                ]
                            },
                            {
                                upazila: "ডুমুরিয়া",
                                areas: [
                                    { area: "ডুমুরিয়া বাজার", providers: [{ name: "বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (আরইবি)", tariff: { residential: [{ slab: "0-50", rate: 3.80 }, { slab: "51-150", rate: 5.10 }, { slab: "151-250", rate: 5.40 }, { slab: "251-400", rate: 5.90 }, { slab: "401+", rate: 7.50 }], fixedCharge: 30, demandCharge: 15 } }] }
                                ]
                            }
                        ]
                    },
                    {
                        district: "যশোর",
                        upazilas: [
                            {
                                upazila: "যশোর সদর",
                                areas: [
                                    { area: "দড়াটানা", providers: [{ name: "ওয়েস্ট জোন পাওয়ার ডিস্ট্রিবিউশন কোম্পানি (ওজোপাডিকো)", tariff: { residential: [{ slab: "0-75", rate: 3.85 }, { slab: "76-200", rate: 5.25 }, { slab: "201-300", rate: 5.85 }, { slab: "301-400", rate: 6.15 }, { slab: "401-600", rate: 9.15 }, { slab: "601+", rate: 10.55 }], fixedCharge: 37, demandCharge: 21 } }] },
                                    { area: "পালবাড়ী", providers: [{ name: "বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (আরইবি)", tariff: { residential: [{ slab: "0-50", rate: 3.80 }, { slab: "51-150", rate: 5.10 }, { slab: "151-250", rate: 5.40 }, { slab: "251-400", rate: 5.90 }, { slab: "401+", rate: 7.50 }], fixedCharge: 30, demandCharge: 15 } }] }
                                ]
                            }
                        ]
                    },
                    {
                        district: "কুষ্টিয়া",
                        upazilas: [
                            {
                                upazila: "কুষ্টিয়া সদর",
                                areas: [
                                    { area: "কুষ্টিয়া শহর", providers: [{ name: "ওয়েস্ট জোন পাওয়ার ডিস্ট্রিবিউশন কোম্পানি (ওজোপাডিকো)", tariff: { residential: [{ slab: "0-75", rate: 3.85 }, { slab: "76-200", rate: 5.25 }, { slab: "201-300", rate: 5.85 }, { slab: "301-400", rate: 6.15 }, { slab: "401-600", rate: 9.15 }, { slab: "601+", rate: 10.55 }], fixedCharge: 37, demandCharge: 21 } }] }
                                ]
                            }
                        ]
                    },
                    {
                        district: "বাগেরহাট",
                        upazilas: [
                            {
                                upazila: "বাগেরহাট সদর",
                                areas: [
                                    { area: "বাগেরহাট শহর", providers: [{ name: "ওয়েস্ট জোন পাওয়ার ডিস্ট্রিবিউশন কোম্পানি (ওজোপাডিকো)", tariff: { residential: [{ slab: "0-75", rate: 3.85 }, { slab: "76-200", rate: 5.25 }, { slab: "201-300", rate: 5.85 }, { slab: "301-400", rate: 6.15 }, { slab: "401-600", rate: 9.15 }, { slab: "601+", rate: 10.55 }], fixedCharge: 37, demandCharge: 21 } }] }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                division: "সিলেট",
                districts: [
                    {
                        district: "সিলেট",
                        upazilas: [
                            {
                                upazila: "সিলেট সদর",
                                areas: [
                                    { area: "জিন্দাবাজার", providers: [{ name: "বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ড (বিপিডিবি)", tariff: { residential: [{ slab: "0-75", rate: 3.90 }, { slab: "76-200", rate: 5.30 }, { slab: "201-300", rate: 5.90 }, { slab: "301-400", rate: 6.20 }, { slab: "401-600", rate: 9.20 }, { slab: "601+", rate: 10.60 }], fixedCharge: 35, demandCharge: 18 } }] },
                                    { area: "আম্বরখানা", providers: [{ name: "বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ড (বিপিডিবি)", tariff: { residential: [{ slab: "0-75", rate: 3.90 }, { slab: "76-200", rate: 5.30 }, { slab: "201-300", rate: 5.90 }, { slab: "301-400", rate: 6.20 }, { slab: "401-600", rate: 9.20 }, { slab: "601+", rate: 10.60 }], fixedCharge: 35, demandCharge: 18 } }] }
                                ]
                            },
                            {
                                upazila: "মৌলভীবাজার সদর",
                                areas: [
                                    { area: "শমশেরনগর", providers: [{ name: "বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (আরইবি)", tariff: { residential: [{ slab: "0-50", rate: 3.80 }, { slab: "51-150", rate: 5.10 }, { slab: "151-250", rate: 5.40 }, { slab: "251-400", rate: 5.90 }, { slab: "401+", rate: 7.50 }], fixedCharge: 30, demandCharge: 15 } }] }
                                ]
                            },
                            {
                                upazila: "সুনামগঞ্জ সদর",
                                areas: [
                                    { area: "সুনামগঞ্জ শহর", providers: [{ name: "বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ড (বিপিডিবি)", tariff: { residential: [{ slab: "0-75", rate: 3.90 }, { slab: "76-200", rate: 5.30 }, { slab: "201-300", rate: 5.90 }, { slab: "301-400", rate: 6.20 }, { slab: "401-600", rate: 9.20 }, { slab: "601+", rate: 10.60 }], fixedCharge: 35, demandCharge: 18 } }] }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                division: "বরিশাল",
                districts: [
                    {
                        district: "বরিশাল",
                        upazilas: [
                            {
                                upazila: "বরিশাল সদর",
                                areas: [
                                    { area: "চৌমাথা", providers: [{ name: "ওয়েস্ট জোন পাওয়ার ডিস্ট্রিবিউশন কোম্পানি (ওজোপাডিকো)", tariff: { residential: [{ slab: "0-75", rate: 3.85 }, { slab: "76-200", rate: 5.25 }, { slab: "201-300", rate: 5.85 }, { slab: "301-400", rate: 6.15 }, { slab: "401-600", rate: 9.15 }, { slab: "601+", rate: 10.55 }], fixedCharge: 37, demandCharge: 21 } }] },
                                    { area: "নলছিটি", providers: [{ name: "বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (আরইবি)", tariff: { residential: [{ slab: "0-50", rate: 3.80 }, { slab: "51-150", rate: 5.10 }, { slab: "151-250", rate: 5.40 }, { slab: "251-400", rate: 5.90 }, { slab: "401+", rate: 7.50 }], fixedCharge: 30, demandCharge: 15 } }] }
                                ]
                            },
                            {
                                upazila: "পটুয়াখালী সদর",
                                areas: [
                                    { area: "পটুয়াখালী শহর", providers: [{ name: "বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ড (বিপিডিবি)", tariff: { residential: [{ slab: "0-75", rate: 3.90 }, { slab: "76-200", rate: 5.30 }, { slab: "201-300", rate: 5.90 }, { slab: "301-400", rate: 6.20 }, { slab: "401-600", rate: 9.20 }, { slab: "601+", rate: 10.60 }], fixedCharge: 35, demandCharge: 18 } }] }
                                ]
                            },
                            {
                                upazila: "ভোলা সদর",
                                areas: [
                                    { area: "ভোলা শহর", providers: [{ name: "বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ড (বিপি Madeline", tariff: { residential: [{ slab: "0-75", rate: 3.90 }, { slab: "76-200", rate: 5.30 }, { slab: "201-300", rate: 5.90 }, { slab: "301-400", rate: 6.20 }, { slab: "401-600", rate: 9.20 }, { slab: "601+", rate: 10.60 }], fixedCharge: 35, demandCharge: 18 } }] }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                division: "রংপুর",
                districts: [
                    {
                        district: "রংপুর",
                        upazilas: [
                            {
                                upazila: "রংপুর সদর",
                                areas: [
                                    { area: "সিটি বাজার", providers: [{ name: "নেস্কো (NESCO)", tariff: { residential: [{ slab: "0-75", rate: 3.95 }, { slab: "76-200", rate: 5.35 }, { slab: "201-300", rate: 5.95 }, { slab: "301-400", rate: 6.25 }, { slab: "401-600", rate: 9.25 }, { slab: "601+", rate: 10.65 }], fixedCharge: 38, demandCharge: 22 } }] },
                                    { area: "মাহিগঞ্জ", providers: [{ name: "নেস্কো (NESCO)", tariff: { residential: [{ slab: "0-75", rate: 3.95 }, { slab: "76-200", rate: 5.35 }, { slab: "201-300", rate: 5.95 }, { slab: "301-400", rate: 6.25 }, { slab: "401-600", rate: 9.25 }, { slab: "601+", rate: 10.65 }], fixedCharge: 38, demandCharge: 22 } }] }
                                ]
                            },
                            {
                                upazila: "দিনাজপুর সদর",
                                areas: [
                                    { area: "কালিতলা", providers: [{ name: "বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (আরইবি)", tariff: { residential: [{ slab: "0-50", rate: 3.80 }, { slab: "51-150", rate: 5.10 }, { slab: "151-250", rate: 5.40 }, { slab: "251-400", rate: 5.90 }, { slab: "401+", rate: 7.50 }], fixedCharge: 30, demandCharge: 15 } }] }
                                ]
                            },
                            {
                                upazila: "কুড়িগ্রাম সদর",
                                areas: [
                                    { area: "কুড়িগ্রাম শহর", providers: [{ name: "নেস্কো (NESCO)", tariff: { residential: [{ slab: "0-75", rate: 3.95 }, { slab: "76-200", rate: 5.35 }, { slab: "201-300", rate: 5.95 }, { slab: "301-400", rate: 6.25 }, { slab: "401-600", rate: 9.25 }, { slab: "601+", rate: 10.65 }], fixedCharge: 38, demandCharge: 22 } }] }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                division: "ময়মনসিংহ",
                districts: [
                    {
                        district: "ময়মনসিংহ",
                        upazilas: [
                            {
                                upazila: "ময়মনসিংহ সদর",
                                areas: [
                                    { area: "মাসকান্দা", providers: [{ name: "বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ড (বিপিডিবি)", tariff: { residential: [{ slab: "0-75", rate: 3.90 }, { slab: "76-200", rate: 5.30 }, { slab: "201-300", rate: 5.90 }, { slab: "301-400", rate: 6.20 }, { slab: "401-600", rate: 9.20 }, { slab: "601+", rate: 10.60 }], fixedCharge: 35, demandCharge: 18 } }] },
                                    { area: "মুক্তাগাছা", providers: [{ name: "বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (আরইবি)", tariff: { residential: [{ slab: "0-50", rate: 3.80 }, { slab: "51-150", rate: 5.10 }, { slab: "151-250", rate: 5.40 }, { slab: "251-400", rate: 5.90 }, { slab: "401+", rate: 7.50 }], fixedCharge: 30, demandCharge: 15 } }] }
                                ]
                            },
                            {
                                upazila: "জামালপুর সদর",
                                areas: [
                                    { area: "পাঁচ রাস্তা", providers: [{ name: "বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (আরইবি)", tariff: { residential: [{ slab: "0-50", rate: 3.80 }, { slab: "51-150", rate: 5.10 }, { slab: "151-250", rate: 5.40 }, { slab: "251-400", rate: 5.90 }, { slab: "401+", rate: 7.50 }], fixedCharge: 30, demandCharge: 15 } }] }
                                ]
                            },
                            {
                                upazila: "শেরপুর সদর",
                                areas: [
                                    { area: "শেরপুর শহর", providers: [{ name: "বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ড (বিপিডিবি)", tariff: { residential: [{ slab: "0-75", rate: 3.90 }, { slab: "76-200", rate: 5.30 }, { slab: "201-300", rate: 5.90 }, { slab: "301-400", rate: 6.20 }, { slab: "401-600", rate: 9.20 }, { slab: "601+", rate: 10.60 }], fixedCharge: 35, demandCharge: 18 } }] }
                                ]
                            }
                        ]
                    }
                ]
            }
        ];


        const generalTariffRates = {
            residential: [
                { slabStart: 0, slabEnd: 50, rate: 4.00, peakRate: 4.50, offPeakRate: 3.50, powerLevel: 'খুব কম' },
                { slabStart: 51, slabEnd: 75, rate: 5.00, peakRate: 5.50, offPeakRate: 4.50, powerLevel: 'কম' },
                { slabStart: 76, slabEnd: 200, rate: 5.70, peakRate: 6.20, offPeakRate: 5.20, powerLevel: 'মাঝারি' },
                { slabStart: 201, slabEnd: 300, rate: 6.00, peakRate: 6.50, offPeakRate: 5.50, powerLevel: 'মাঝারি-উচ্চ' },
                { slabStart: 301, slabEnd: 400, rate: 6.30, peakRate: 6.80, offPeakRate: 5.80, powerLevel: 'উচ্চ' },
                { slabStart: 401, slabEnd: 600, rate: 9.30, peakRate: 9.80, offPeakRate: 8.80, powerLevel: 'খুব উচ্চ' },
                { slabStart: 601, slabEnd: Infinity, rate: 10.70, peakRate: 11.20, offPeakRate: 10.20, powerLevel: 'সর্বোচ্চ' }
            ],
            commercial: [
                { slabStart: 0, slabEnd: Infinity, rate: 10.30, peakRate: 11.00, offPeakRate: 9.50, powerLevel: 'সাধারণ' } // Added peak/off-peak for commercial
            ],
            industrial: [
                { slabStart: 0, slabEnd: Infinity, rate: 8.50, peakRate: 9.00, offPeakRate: 8.00, powerLevel: 'সাধারণ' } // Added peak/off-peak for industrial
            ],
            fixedCharge: {
                residential: 40,
                commercial: 100,
                industrial: 200
            },
            demandCharge: {
                residential: 20,
                commercial: 50,
                industrial: 100
            }
        };

        const threePhaseTariffRates = {
            unitRate: 7.80,
            peakUnitRate: 8.50,
            offPeakUnitRate: 7.00,
            demandChargePerKW: 60,
            fixedCharge: 250,
            vatRate: 0.05,
            powerFactorPenaltyRate: 0.02
        };


        let appliances = [];
        let currentSelectedTariff = null;
        let currentTariffType = 'residential';
        let editingIndex = -1;
        let currentFeedbackMessages = [];

        const allTips = [
            { title: "১. LED লাইট ব্যবহার করুন", text: "সাধারণ বাল্বের বদলে LED লাইট ব্যবহার করুন। এটা ৭০-৮০% বিদ্যুৎ বাঁচায়, আর আপনার বিলও কম আসবে!", icon: "fas fa-lightbulb", color: "bg-gradient-green" },
            { title: "২. অপ্রয়োজনীয় লাইট বন্ধ রাখুন", text: "যখন ঘরে কেউ নেই বা আলো দরকার নেই, তখন লাইট-ফ্যান বন্ধ করে দিন। সামান্য হলেও বিল কমবে, কেন অপচয় করবেন?", icon: "fas fa-power-off", color: "bg-gradient-blue" },
            { title: "৩. এসি-র তাপমাত্রা ঠিক রাখুন", text: "এসি ২৪-২৫ ডিগ্রি সেলসিয়াসে চালান। এক ডিগ্রি তাপমাত্রা কমালেই কিন্তু ৫% বিদ্যুৎ বেশি খরচ হয়! গরমে একটু মানিয়ে নিন, পকেট বাঁচবে।", icon: "fas fa-snowflake", color: "bg-gradient-purple" },
            { title: "৪. ফ্রিজের দরজা কম খুলুন", text: "ফ্রিজের দরজা ঘন ঘন খুলবেন না। গরম খাবার সরাসরি ফ্রিজে ঢোকাবেন না। এতে ফ্রিজকে বেশি কাজ করতে হয়, ফলে বিদ্যুৎও বেশি টানে।", icon: "fas fa-box-open", color: "bg-gradient-orange" },
            { title: "৫. সোলার প্যানেল লাগানোর কথা ভাবুন", text: "যদি সুযোগ থাকে, ছাদে সোলার প্যানেল বসান। নিজের বিদ্যুৎ নিজেই তৈরি করুন, বিলের চিন্তা অনেকটাই কমে যাবে।", icon: "fas fa-solar-panel", color: "bg-gradient-pink" },
            { title: "৬. প্রাকৃতিক আলো কাজে লাগান", text: "দিনের বেলায় পর্দা সরিয়ে দিন, জানালা খুলে রাখুন। সূর্যের আলো থাকতে থাকতে কেন অকারণে লাইট জ্বালাবেন?", icon: "fas fa-sun", color: "bg-gradient-teal" },
            { title: "৭. ইলেকট্রনিক্স আনপ্লাগ করুন", text: "টিভি, কম্পিউটার, চার্জার - ব্যবহার না করলে প্লাগ খুলে রাখুন। স্ট্যান্ডবাই মোডেও কিন্তু বিদ্যুৎ খরচ হয়, যেটা আপনার অজান্তেই বিল বাড়াচ্ছে।", icon: "fas fa-plug", color: "bg-gradient-red" },
            { title: "৮. ফ্যান পরিষ্কার রাখুন", text: "ফ্যানের ব্লেডে ময়লা জমলে ফ্যান ধীর গতিতে চলে আর বেশি বিদ্যুৎ খরচ করে। নিয়মিত পরিষ্কার করুন, ফ্যানও ভালো থাকবে, বিলও কম আসবে।", icon: "fas fa-fan", color: "bg-gradient-yellow" },
            { title: "৯. ওয়াটার হিটার বুঝে ব্যবহার করুন", text: "ওয়াটার হিটার বা গিজার যখন দরকার, তখনই চালান। গোসল শেষ হলে বন্ধ করে দিন। অকারণে গরম পানি তৈরি করে বিদ্যুৎ নষ্ট করবেন না।", icon: "fas fa-water", color: "bg-gradient-indigo" },
            { title: "১০. দরজা-জানালা বন্ধ রাখুন", text: "এসি বা হিটার চালালে সব দরজা-জানালা ভালো করে বন্ধ করুন। বাতাস বাইরে চলে গেলে এসিকে বেশি কষ্ট করতে হয়, বিলও বাড়ে।", icon: "fas fa-door-closed", color: "bg-gradient-lime" },
            { title: "১১. সঠিক আকারের যন্ত্রপাতি কিনুন", text: "আপনার ঘরের জন্য সঠিক আকারের যন্ত্রপাতি কিনুন। বড় যন্ত্রপাতি মানেই বেশি বিদ্যুৎ খরচ, আপনার দরকার না হলেও।", icon: "fas fa-ruler-combined", color: "bg-gradient-cyan" },
            { title: "১২. ইনভার্টার এসি ব্যবহার করুন", text: "সাধারণ এসি-র বদলে ইনভার্টার এসি কিনুন। এটা বিদ্যুৎ সাশ্রয়ী, যদিও দাম একটু বেশি, কিন্তু দীর্ঘমেয়াদে বিল কমিয়ে দেবে।", icon: "fas fa-wind", color: "bg-gradient-purple" },
            { title: "১৩. রেফ্রিজারেটরের কয়েল পরিষ্কার রাখুন", text: "ফ্রিজের পেছনের কয়েল নিয়মিত পরিষ্কার করুন। ময়লা জমলে ফ্রিজকে ঠান্ডা রাখতে বেশি বিদ্যুৎ খরচ হয়।", icon: "fas fa-broom", color: "bg-gradient-green" },
            { title: "১৪. কাপড় রোদে শুকান", text: "ওয়াশিং মেশিনের ড্রায়ার ব্যবহার না করে কাপড় রোদে শুকানোর চেষ্টা করুন। ড্রায়ার প্রচুর বিদ্যুৎ টানে।", icon: "fas fa-sun", color: "bg-gradient-blue" },
            { title: "১৫. রান্নায় ঢাকনা ব্যবহার করুন", text: "রান্না করার সময় পাত্রের ঢাকনা ব্যবহার করুন। এতে তাপ বাইরে যায় না এবং খাবার তাড়াতাড়ি সেদ্ধ হয়, ফলে গ্যাস বা বিদ্যুতের ব্যবহার কমে।", icon: "fas fa-utensils", color: "bg-gradient-orange" },
            { title: "১৬. লোড শেডিংয়ের সময় অপ্রয়োজনীয় লোড বন্ধ করুন", text: "লোড শেডিংয়ের সময় উচ্চ ওয়াটের যন্ত্রপাতি বন্ধ রাখুন। এতে গ্রিডের উপর চাপ কমে এবং বিদ্যুৎ ফিরে আসার পর হঠাৎ লোড বেড়ে যাওয়ার ঝুঁকি কমে।", icon: "fas fa-plug-circle-xmark", color: "bg-gradient-red" },
            { title: "১৭. স্মার্ট প্লাগ ব্যবহার করুন", text: "স্মার্ট প্লাগ ব্যবহার করে রিমোটলি যন্ত্রপাতি নিয়ন্ত্রণ করুন এবং স্ট্যান্ডবাই পাওয়ার অপচয় কমান।", icon: "fas fa-plug-circle-bolt", color: "bg-gradient-teal" },
            { title: "১৮. কম্পিউটার স্লিপ মোডে রাখুন", text: "কম্পিউটার ব্যবহার না করলে স্লিপ মোডে রাখুন অথবা বন্ধ করে দিন। স্ক্রিন সেভার বিদ্যুৎ সাশ্রয় করে না।", icon: "fas fa-desktop", color: "bg-gradient-purple" },
            { title: "১৯. পুরনো যন্ত্রপাতি পরিবর্তন করুন", text: "যদি আপনার যন্ত্রপাতি খুব পুরনো হয়, তাহলে সেগুলো পরিবর্তন করে এনার্জি-এফিশিয়েন্ট মডেল কিনুন। পুরনো যন্ত্রপাতি বেশি বিদ্যুৎ টানে।", icon: "fas fa-recycle", color: "bg-gradient-green" },
            { title: "২০. সঠিক ভোল্টেজ নিশ্চিত করুন", text: "আপনার বাড়িতে সঠিক ভোল্টেজ আসছে কিনা তা নিশ্চিত করুন। কম বা বেশি ভোল্টেজ যন্ত্রপাতির ক্ষতি করতে পারে এবং বিদ্যুৎ খরচ বাড়াতে পারে।", icon: "fas fa-bolt", color: "bg-gradient-blue" },
            { title: "২১. গরম পানি কম ব্যবহার করুন", text: "গরম পানির ব্যবহার সীমিত করুন। সম্ভব হলে ঠান্ডা পানি ব্যবহার করুন, বিশেষ করে কাপড় ধোয়ার সময়।", icon: "fas fa-shower", color: "bg-gradient-cyan" },
            { title: "২২. ওভেনের দরজা বন্ধ রাখুন", text: "ওভেন ব্যবহার করার সময় বারবার দরজা খুলবেন না। এতে তাপ বেরিয়ে যায় এবং ওভেনকে আবার গরম হতে বেশি বিদ্যুৎ খরচ হয়।", icon: "fas fa-oven", color: "bg-gradient-orange" },
            { title: "২৩. চার্জার আনপ্লাগ করুন", text: "মোবাইল বা ল্যাপটপ চার্জ হয়ে গেলে চার্জার আনপ্লাগ করুন। চার্জার প্লাগ ইন করা থাকলে সামান্য বিদ্যুৎ খরচ হতে থাকে।", icon: "fas fa-mobile-alt", color: "bg-gradient-pink" },
            { title: "২৪. নিয়মিত রক্ষণাবেক্ষণ করুন", text: "সকল বৈদ্যুতিক যন্ত্রপাতির নিয়মিত রক্ষণাবেক্ষণ করুন। এতে তাদের কর্মক্ষমতা ভালো থাকে এবং বিদ্যুৎ খরচ কম হয়।", icon: "fas fa-tools", color: "bg-gradient-indigo" }
        ];
        let visibleTipsCount = 6;
        let mobileTipsCount = 3;


        function getInitialTipsCount() {
            return window.innerWidth <= 768 ? mobileTipsCount : visibleTipsCount;
        }

        function renderTips() {
            const $tipsContainer = $('#tips-container');
            $tipsContainer.empty();
            const currentVisibleCount = getInitialTipsCount();

            for (let i = 0; i < currentVisibleCount && i < allTips.length; i++) {
                const tip = allTips[i];
                const tipHtml = `
                    <div class="tip-card ${tip.color}">
                        <h4 class="text-lg font-semibold mb-2"><i class="${tip.icon} mr-2"></i>${tip.title}</h4>
                        <p class="text-sm">${tip.text}</p>
                    </div>
                `;
                $tipsContainer.append(tipHtml);
            }

            if (currentVisibleCount >= allTips.length) {
                $('#load-more-tips-btn').hide();
                $('#show-less-tips-btn').hide();
            } else {
                $('#load-more-tips-btn').show();
                $('#show-less-tips-btn').hide();
            }
        }

        function showMoreTips() {
            const $tipsContainer = $('#tips-container');
            const currentCount = $tipsContainer.find('.tip-card').length;
            const nextBatchSize = 6;
            const newVisibleCount = Math.min(currentCount + nextBatchSize, allTips.length);

            for (let i = currentCount; i < newVisibleCount; i++) {
                const tip = allTips[i];
                const tipHtml = `
                    <div class="tip-card ${tip.color}">
                        <h4 class="text-lg font-semibold mb-2"><i class="${tip.icon} mr-2"></i>${tip.title}</h4>
                        <p class="text-sm">${tip.text}</p>
                    </div>
                `;
                $tipsContainer.append(tipHtml);
            }

            if (newVisibleCount >= allTips.length) {
                $('#load-more-tips-btn').hide();
                $('#show-less-tips-btn').show();
            } else {
                $('#load-more-tips-btn').show();
                $('#show-less-tips-btn').show();
            }
        }

        function showLessTips() {
            const $tipsContainer = $('#tips-container');
            const initialCount = getInitialTipsCount();
            $tipsContainer.find('.tip-card').slice(initialCount).remove();
            $('#load-more-tips-btn').show();
            $('#show-less-tips-btn').hide();
        }


        $('#load-more-tips-btn').on('click', showMoreTips);
        $('#show-less-tips-btn').on('click', showLessTips);

        $(window).on('resize', function() {
            renderTips();
        });


        function toBengaliNumber(num) {
            const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
            const bengaliNumbers = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
            return String(num).replace(/\d/g, digit => bengaliNumbers[englishNumbers.indexOf(digit)]);
        }

        function toEnglishNumber(numStr) {
            const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
            const bengaliNumbers = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
            let englishStr = '';
            for (let i = 0; i < numStr.length; i++) {
                const index = bengaliNumbers.indexOf(numStr[i]);
                if (index !== -1) {
                    englishStr += englishNumbers[index];
                } else {
                    englishStr += numStr[i];
                }
            }
            return parseFloat(englishStr);
        }

        function showToast(message, type = 'info', duration = 3000) {
            const $toastContainer = $('#toast-container');
            const toastId = `toast-${Date.now()}`;
            const toastHtml = `
                <div id="${toastId}" class="toast-message ${type}">
                    ${type === 'success' ? '<i class="fas fa-check-circle"></i>' : ''}
                    ${type === 'error' ? '<i class="fas fa-times-circle"></i></i class="fas fa-exclamation-triangle">' : ''}
                    ${type === 'info' ? '<i class="fas fa-info-circle"></i>' : ''}
                    <span>${message}</span>
                </div>
            `;
            const $toast = $(toastHtml);
            $toastContainer.append($toast);

            setTimeout(() => {
                $toast.addClass('show');
            }, 10);

            setTimeout(() => {
                $toast.removeClass('show');
                $toast.on('transitionend', function() {
                    $(this).remove();
                });
            }, duration);
        }

        function showPreloader(message = 'লোড হচ্ছে...') {
            $('#preloader-message').text(message);
            $('#preloader').addClass('active');
        }

        function hidePreloader() {
            $('#preloader').removeClass('active');
        }


        function validateInputField(inputElement) {
            const $input = $(inputElement);
            const value = $input.val();
            const type = $input.attr('type');
            const min = parseFloat($input.attr('min'));
            const max = parseFloat($input.attr('max'));

            $input.removeClass('error success');

            if ($input.prop('required') && !value.trim()) {
                $input.addClass('error');
                return false;
            }

            if (type === 'number') {
                const numValue = parseFloat(value);
                if (isNaN(numValue)) {
                    $input.addClass('error');
                    return false;
                }
                if (!isNaN(min) && numValue < min) {
                    $input.addClass('error');
                    return false;
                }
                if (!isNaN(max) && numValue > max) {
                    $input.addClass('error');
                    return false;
                }
            }
            $input.addClass('success');
            return true;
        }

        $(document).on('input', '.input-field', function() {
            validateInputField(this);
        });


        function populateDivisions() {
            const $divisionSelect = $('#division-select');
            $divisionSelect.empty().append('<option value="">বিভাগ নির্বাচন করুন</option>');
            bangladeshData.forEach(div => {
                $divisionSelect.append(`<option value="${div.division}">${div.division}</option>`);
            });
        }

        function areAllLocationFieldsSelected() {
            return $('#division-select').val() &&
                   $('#district-select').val() &&
                   $('#upazila-select').val() &&
                   $('#area-select').val() &&
                   $('#provider-select').val();
        }

        $('#division-select').on('change', function() {
            showPreloader('জেলা লোড হচ্ছে...');
            const selectedDivisionName = $(this).val();
            const $districtSelect = $('#district-select');
            const $upazilaSelect = $('#upazila-select');
            const $areaSelect = $('#area-select');
            const $providerSelect = $('#provider-select');

            $districtSelect.empty().append('<option value="">জেলা নির্বাচন করুন</option>').prop('disabled', true);
            $upazilaSelect.empty().append('<option value="">উপজেলা নির্বাচন করুন</option>').prop('disabled', true);
            $areaSelect.empty().append('<option value="">এলাকা নির্বাচন করুন</option>').prop('disabled', true);
            $providerSelect.empty().append('<option value="">বিদ্যুৎ সরবরাহকারী নির্বাচন করুন</option>').prop('disabled', true);
            $('#tariff-info').addClass('hidden');
            $('#tariff-info-toggle-area').addClass('hidden');
            $('#toggle-tariff-info').html('<i class="fas fa-eye"></i> দেখান').removeClass('active');
            currentSelectedTariff = null;

            if (selectedDivisionName) {
                const selectedDivision = bangladeshData.find(div => div.division === selectedDivisionName);
                if (selectedDivision) {
                    selectedDivision.districts.forEach(dist => {
                        $districtSelect.append(`<option value="${dist.district}">${dist.district}</option>`);
                    });
                    $districtSelect.prop('disabled', false);
                    showToast('জেলা নির্বাচন করুন।', 'info');
                }
            } else {
                showToast('অনুগ্রহ করে একটি বিভাগ নির্বাচন করুন।', 'error');
            }
            calculateBill();
            hidePreloader();
        });

        $('#district-select').on('change', function() {
            showPreloader('উপজেলা লোড হচ্ছে...');
            const selectedDivisionName = $('#division-select').val();
            const selectedDistrictName = $(this).val();
            const $upazilaSelect = $('#upazila-select');
            const $areaSelect = $('#area-select');
            const $providerSelect = $('#provider-select');

            $upazilaSelect.empty().append('<option value="">উপজেলা নির্বাচন করুন</option>').prop('disabled', true);
            $areaSelect.empty().append('<option value="">এলাকা নির্বাচন করুন</option>').prop('disabled', true);
            $providerSelect.empty().append('<option value="">বিদ্যুৎ সরবরাহকারী নির্বাচন করুন</option>').prop('disabled', true);
            $('#tariff-info').addClass('hidden');
            $('#tariff-info-toggle-area').addClass('hidden');
            $('#toggle-tariff-info').html('<i class="fas fa-eye"></i> দেখান').removeClass('active');
            currentSelectedTariff = null;

            if (selectedDivisionName && selectedDistrictName) {
                const selectedDivision = bangladeshData.find(div => div.division === selectedDivisionName);
                if (selectedDivision) {
                    const selectedDistrict = selectedDivision.districts.find(dist => dist.district === selectedDistrictName);
                    if (selectedDistrict) {
                        // Corrected: Iterate directly over selectedDistrict.upazilas
                        selectedDistrict.upazilas.forEach(upz => {
                            $upazilaSelect.append(`<option value="${upz.upazila}">${upz.upazila}</option>`);
                        });
                        $upazilaSelect.prop('disabled', false);
                        showToast('উপজেলা নির্বাচন করুন।', 'info');
                    }
                }
            } else {
                showToast('অনুগ্রহ করে একটি জেলা নির্বাচন করুন।', 'error');
            }
            calculateBill();
            hidePreloader();
        });

        $('#upazila-select').on('change', function() {
            showPreloader('এলাকা লোড হচ্ছে...');
            const selectedDivisionName = $('#division-select').val();
            const selectedDistrictName = $('#district-select').val();
            const selectedUpazilaName = $(this).val();
            const $areaSelect = $('#area-select');
            const $providerSelect = $('#provider-select');

            $areaSelect.empty().append('<option value="">এলাকা নির্বাচন করুন</option>').prop('disabled', true);
            $providerSelect.empty().append('<option value="">বিদ্যুৎ সরবরাহকারী নির্বাচন করুন</option>').prop('disabled', true);
            $('#tariff-info').addClass('hidden');
            $('#tariff-info-toggle-area').addClass('hidden');
            $('#toggle-tariff-info').html('<i class="fas fa-eye"></i> দেখান').removeClass('active');
            currentSelectedTariff = null;

            if (selectedDivisionName && selectedDistrictName && selectedUpazilaName) {
                const selectedDivision = bangladeshData.find(div => div.division === selectedDivisionName);
                if (selectedDivision) {
                    const selectedDistrict = selectedDivision.districts.find(dist => dist.district === selectedDistrictName);
                    if (selectedDistrict) {
                        const selectedUpazila = selectedDistrict.upazilas.find(upz => upz.upazila === selectedUpazilaName);
                        if (selectedUpazila) {
                            // Corrected: Iterate directly over selectedUpazila.areas
                            selectedUpazila.areas.forEach(area => {
                                $areaSelect.append(`<option value="${area.area}">${area.area}</option>`);
                            });
                            $areaSelect.prop('disabled', false);
                            showToast('এলাকা নির্বাচন করুন।', 'info');
                        }
                    }
                }
            } else {
                showToast('অনুগ্রহ করে একটি উপজেলা নির্বাচন করুন।', 'error');
            }
            calculateBill();
            hidePreloader();
        });

        $('#area-select').on('change', function() {
            showPreloader('সরবরাহকারী লোড হচ্ছে...');
            const selectedDivisionName = $('#division-select').val();
            const selectedDistrictName = $('#district-select').val();
            const selectedUpazilaName = $('#upazila-select').val();
            const selectedAreaName = $(this).val();
            const $providerSelect = $('#provider-select');

            $providerSelect.empty().append('<option value="">বিদ্যুৎ সরবরাহকারী নির্বাচন করুন</option>').prop('disabled', true);
            $('#tariff-info').addClass('hidden');
            $('#tariff-info-toggle-area').addClass('hidden');
            $('#toggle-tariff-info').html('<i class="fas fa-eye"></i> দেখান').removeClass('active');
            currentSelectedTariff = null;

            if (selectedDivisionName && selectedDistrictName && selectedUpazilaName && selectedAreaName) {
                const selectedDivision = bangladeshData.find(div => div.division === selectedDivisionName);
                if (selectedDivision) {
                    const selectedDistrict = selectedDivision.districts.find(dist => dist.district === selectedDistrictName);
                    if (selectedDistrict) {
                        const selectedUpazila = selectedDistrict.upazilas.find(upz => upz.upazila === selectedUpazilaName);
                        if (selectedUpazila) {
                            const selectedArea = selectedUpazila.areas.find(area => area.area === selectedAreaName);
                            if (selectedArea) {
                                selectedArea.providers.forEach(provider => {
                                    $providerSelect.append(`<option value="${provider.name}">${provider.name}</option>`);
                                });
                                $providerSelect.prop('disabled', false);
                                showToast('বিদ্যুৎ সরবরাহকারী নির্বাচন করুন।', 'info');
                            }
                        }
                    }
                }
            } else {
                showToast('অনুগ্রহ করে একটি এলাকা নির্বাচন করুন।', 'error');
            }
            calculateBill();
            hidePreloader();
        });

        $('#provider-select').on('change', function() {
            showPreloader('ট্যারিফ তথ্য লোড হচ্ছে...');
            const selectedDivisionName = $('#division-select').val();
            const selectedDistrictName = $('#district-select').val();
            const selectedUpazilaName = $('#upazila-select').val();
            const selectedAreaName = $('#area-select').val();
            const selectedProviderName = $(this).val();

            // Always show the tariff info section when a provider is selected
            $('#tariff-info-toggle-area').removeClass('hidden');
            $('#tariff-info').removeClass('hidden'); // Ensure it's visible
            $('#toggle-tariff-info').html('<i class="fas fa-eye-slash"></i> লুকান').addClass('active');

            currentSelectedTariff = null;

            if (areAllLocationFieldsSelected()) {
                const selectedDivision = bangladeshData.find(div => div.division === selectedDivisionName);
                const selectedDistrict = selectedDivision.districts.find(dist => dist.district === selectedDistrictName);
                const selectedUpazila = selectedDistrict.upazilas.find(upz => upz.upazila === selectedUpazilaName);
                const selectedArea = selectedUpazila.areas.find(area => area.area === selectedAreaName);
                const selectedProvider = selectedArea.providers.find(provider => provider.name === selectedProviderName);

                if (selectedProvider && selectedProvider.tariff && selectedProvider.tariff.residential) {
                    currentSelectedTariff = selectedProvider.tariff;
                    $('#selected-provider-name').text(selectedProvider.name);
                    $('#selected-tariff-type').text('আবাসিক');
                    $('#selected-fixed-charge').text(toBengaliNumber(currentSelectedTariff.fixedCharge.toFixed(2)));
                    $('#selected-demand-charge').text(toBengaliNumber(currentSelectedTariff.demandCharge.toFixed(2)));

                    const $tariffSlabs = $('#tariff-slabs');
                    $tariffSlabs.empty();
                    currentSelectedTariff.residential.forEach(slab => {
                        $tariffSlabs.append(`<li>${slab.slab} ইউনিট: ৳ ${toBengaliNumber(slab.rate.toFixed(2))}</li>`);
                    });

                    showToast('ট্যারিফ তথ্য লোড করা হয়েছে!', 'success');
                } else {
                    showToast('নির্বাচিত সরবরাহকারীর জন্য ট্যারিফ তথ্য পাওয়া যায়নি।', 'error');
                }
            } else {
                showToast('অনুগ্রহ করে আপনার অবস্থান এবং সরবরাহকারী নির্বাচন করুন।', 'error');
            }
            calculateBill();
            hidePreloader();
        });

        $('#toggle-tariff-info').on('click', function() {
            const $tariffInfo = $('#tariff-info');
            if ($tariffInfo.hasClass('hidden')) {
                $tariffInfo.removeClass('hidden');
                $(this).html('<i class="fas fa-eye-slash"></i> লুকান').addClass('active');
            } else {
                $tariffInfo.addClass('hidden');
                $(this).html('<i class="fas fa-eye"></i> দেখান').removeClass('active');
            }
        });


        $('#appliance-select').on('change', function() {
            const selectedValue = $(this).val();
            if (selectedValue) {
                const [name, watt] = selectedValue.split('|');
                $('#custom-appliance-name').val(name);
                $('#custom-appliance-watt').val(watt);
                validateInputField($('#custom-appliance-name')[0]);
                validateInputField($('#custom-appliance-watt')[0]);
            } else {
                $('#custom-appliance-name').val('');
                $('#custom-appliance-watt').val('');
                $('#custom-appliance-name').removeClass('success error');
                $('#custom-appliance-watt').removeClass('success error');
            }
        });

        $('#add-appliance-btn').on('click', function() {
            showPreloader('যন্ত্রপাতি যোগ করা হচ্ছে...');
            const name = $('#custom-appliance-name').val().trim();
            const watt = parseFloat($('#custom-appliance-watt').val());
            const quantity = parseInt($('#appliance-quantity').val());
            const dailyHours = parseFloat($('#daily-hours').val());
            const monthlyDays = parseInt($('#monthly-days').val());

            let isValid = true;
            if (!validateInputField($('#custom-appliance-name')[0])) isValid = false;
            if (!validateInputField($('#custom-appliance-watt')[0])) isValid = false;
            if (!validateInputField($('#appliance-quantity')[0])) isValid = false;
            if (!validateInputField($('#daily-hours')[0])) isValid = false;
            if (!validateInputField($('#monthly-days')[0])) isValid = false;


            if (!isValid) {
                showToast('অনুগ্রহ করে যন্ত্রপাতির সকল তথ্য সঠিকভাবে পূরণ করুন।', 'error');
                hidePreloader();
                return;
            }

            const monthlyUnit = (watt * quantity * dailyHours * monthlyDays) / 1000;

            appliances.push({
                name: name,
                watt: watt,
                quantity: quantity,
                dailyHours: dailyHours,
                monthlyDays: monthlyDays,
                monthlyUnit: monthlyUnit,
                voltage: '২২০V',
                powerConsumptionLevel: getPowerConsumptionLabel(monthlyUnit)
            });

            showToast('যন্ত্রপাতি সফলভাবে যোগ করা হয়েছে!', 'success');
            renderApplianceList();
            calculateBill();
            clearApplianceInputs();
            hidePreloader();
        });

        function getPowerConsumptionLabel(unit) {
            if (unit < 5) return 'অত্যন্ত কম';
            if (unit < 20) return 'খুব কম';
            if (unit < 70) return 'কম';
            if (unit < 200) return 'মাঝারি';
            if (unit < 400) return 'বেশি';
            if (unit < 800) return 'খুব বেশি';
            return 'অতিরিক্ত বেশি';
        }


        $('#load-demo-data-btn').on('click', function() {
            showPreloader('ডেমো ডেটা লোড হচ্ছে...');
            appliances = [
                { name: "এলইডি লাইট", watt: 10, quantity: 5, dailyHours: 6, monthlyDays: 30, monthlyUnit: (10 * 5 * 6 * 30) / 1000, voltage: '২২০V', powerConsumptionLevel: getPowerConsumptionLabel((10 * 5 * 6 * 30) / 1000) },
                { name: "ফ্যান", watt: 75, quantity: 3, dailyHours: 10, monthlyDays: 30, monthlyUnit: (75 * 3 * 10 * 30) / 1000, voltage: '২২০V', powerConsumptionLevel: getPowerConsumptionLabel((75 * 3 * 10 * 30) / 1000) },
                { name: "রেফ্রিজারেটর", watt: 150, quantity: 1, dailyHours: 24, monthlyDays: 30, monthlyUnit: (150 * 1 * 24 * 30) / 1000, voltage: '২২০V', powerConsumptionLevel: getPowerConsumptionLabel((150 * 1 * 24 * 30) / 1000) },
                { name: "টিভি", watt: 100, quantity: 1, dailyHours: 5, monthlyDays: 30, monthlyUnit: (100 * 1 * 5 * 30) / 1000, voltage: '২২০V', powerConsumptionLevel: getPowerConsumptionLabel((100 * 1 * 5 * 30) / 1000) },
                { name: "এসি (১ টন)", watt: 1000, quantity: 1, dailyHours: 8, monthlyDays: 20, monthlyUnit: (1000 * 1 * 8 * 20) / 1000, voltage: '২২০V', powerConsumptionLevel: getPowerConsumptionLabel((1000 * 1 * 8 * 20) / 1000) }
            ];
            showToast('ডেমো ডেটা লোড করা হয়েছে!', 'success');
            renderApplianceList();
            calculateBill();
            hidePreloader();
        });

        $('#load-three-phase-demo-btn').on('click', function() {
            showPreloader('থ্রি-ফেজ ডেমো ডেটা লোড হচ্ছে...');
            $('#total-units-three-phase').val(1000).addClass('success');
            $('#demand-three-phase').val(10).addClass('success');
            $('#power-factor-three-phase').val(0.85).addClass('success');
            $('#peak-units-three-phase').val(400).addClass('success');
            $('#offpeak-units-three-phase').val(600).addClass('success');
            showToast('থ্রি-ফেজ ডেমো ডেটা লোড করা হয়েছে!', 'success');
            calculateBill();
            hidePreloader();
        });


        function renderApplianceList() {
            const $applianceList = $('#appliance-list');
            $applianceList.empty();

            if (appliances.length === 0) {
                $('#appliance-list-card').addClass('hidden');
                $applianceList.append('<tr id="no-appliance-row"><td colspan="8" class="py-4 text-center text-gray-500">কোনো যন্ত্রপাতি যোগ করা হয়নি।</td></tr>');
            } else {
                $('#appliance-list-card').removeClass('hidden');
                appliances.forEach((appliance, index) => {
                    const row = `
                        <tr class="${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-100 last:border-b-0">
                            <td class="py-2 px-4 text-center align-middle text-sm text-gray-700">${toBengaliNumber(index + 1)}</td>
                            <td class="py-2 px-4 text-center align-middle text-sm text-gray-700">${appliance.name}</td>
                            <td class="py-2 px-4 text-center align-middle text-sm text-gray-700">${toBengaliNumber(appliance.watt)}</td>
                            <td class="py-2 px-4 text-center align-middle text-sm text-gray-700">${toBengaliNumber(appliance.quantity)}</td>
                            <td class="py-2 px-4 text-center align-middle text-sm text-gray-700">${toBengaliNumber(appliance.dailyHours)}</td>
                            <td class="py-2 px-4 text-center align-middle text-sm text-gray-700">${toBengaliNumber(appliance.monthlyDays)}</td>
                            <td class="py-2 px-4 text-center align-middle text-sm font-medium">${toBengaliNumber(appliance.monthlyUnit.toFixed(2))}</td>
                            <td class="py-2 px-4 text-center align-middle flex flex-col md:flex-row justify-center items-center gap-1">
                                <button class="btn-secondary edit-appliance-btn text-sm px-3 py-1" data-index="${index}">আপডেট</button>
                                <button class="btn-danger remove-appliance-btn text-sm px-3 py-1" data-index="${index}">মুছুন</button>
                            </td>
                        </tr>
                    `;
                    $applianceList.append(row);
                });
            }
        }

        $(document).on('click', '.edit-appliance-btn', function() {
            editingIndex = $(this).data('index');
            const appliance = appliances[editingIndex];

            $('#edit-appliance-select').val('');
            const predefinedOption = $(`#appliance-select option[value='${appliance.name}|${appliance.watt}']`);
            if (predefinedOption.length) {
                $('#edit-appliance-select').val(`${appliance.name}|${appliance.watt}`);
            } else {
                $('#edit-appliance-select').val('');
            }

            $('#edit-appliance-name').val(appliance.name).addClass('success');
            $('#edit-appliance-watt').val(appliance.watt).addClass('success');
            $('#edit-appliance-quantity').val(appliance.quantity).addClass('success');
            $('#edit-daily-hours').val(appliance.dailyHours).addClass('success');
            $('#edit-monthly-days').val(appliance.monthlyDays).addClass('success');

            $('#edit-appliance-modal').addClass('open');
        });

        $('#edit-appliance-select').on('change', function() {
            const selectedValue = $(this).val();
            if (selectedValue) {
                const [name, watt] = selectedValue.split('|');
                $('#edit-appliance-name').val(name).addClass('success');
                $('#edit-appliance-watt').val(watt).addClass('success');
            } else {
                $('#edit-appliance-name').val('').removeClass('success error');
                $('#edit-appliance-watt').val('').removeClass('success error');
            }
        });


        $('#save-appliance-changes-btn').on('click', function() {
            showPreloader('যন্ত্রপাতির তথ্য আপডেট করা হচ্ছে...');
            const name = $('#edit-appliance-name').val().trim();
            const watt = parseFloat($('#edit-appliance-watt').val());
            const quantity = parseInt($('#edit-appliance-quantity').val());
            const dailyHours = parseFloat($('#edit-daily-hours').val());
            const monthlyDays = parseInt($('#edit-monthly-days').val());

            let isValid = true;
            if (!validateInputField($('#edit-appliance-name')[0])) isValid = false;
            if (!validateInputField($('#edit-appliance-watt')[0])) isValid = false;
            if (!validateInputField($('#edit-appliance-quantity')[0])) isValid = false;
            if (!validateInputField($('#edit-daily-hours')[0])) isValid = false;
            if (!validateInputField($('#edit-monthly-days')[0])) isValid = false;

            if (!isValid) {
                showToast('অনুগ্রহ করে যন্ত্রপাতির সকল তথ্য সঠিকভাবে পূরণ করুন।', 'error');
                hidePreloader();
                return;
            }

            const monthlyUnit = (watt * quantity * dailyHours * monthlyDays) / 1000;

            appliances[editingIndex] = {
                name: name,
                watt: watt,
                quantity: quantity,
                dailyHours: dailyHours,
                monthlyDays: monthlyDays,
                monthlyUnit: monthlyUnit,
                voltage: '২২০V',
                powerConsumptionLevel: getPowerConsumptionLabel(monthlyUnit)
            };

            $('#edit-appliance-modal').removeClass('open');
            editingIndex = -1;
            showToast('যন্ত্রপাতির তথ্য সফলভাবে আপডেট করা হয়েছে!', 'success');
            renderApplianceList();
            calculateBill();
            clearApplianceInputs();
            hidePreloader();
        });

        $(document).on('click', '.remove-appliance-btn', function() {
            showPreloader('যন্ত্রপাতি মুছে ফেলা হচ্ছে...');
            const indexToRemove = $(this).data('index');
            appliances.splice(indexToRemove, 1);
            showToast('যন্ত্রপাতি সফলভাবে মুছে ফেলা হয়েছে!', 'info');
            renderApplianceList();
            calculateBill();
            if (appliances.length === 0) {
                $('#appliance-list-card').addClass('hidden');
            }
            hidePreloader();
        });

        function clearApplianceInputs() {
            $('#appliance-select').val('');
            $('#custom-appliance-name').val('').removeClass('success error');
            $('#custom-appliance-watt').val('').removeClass('success error');
            $('#appliance-quantity').val('1').removeClass('success error');
            $('#daily-hours').val('8').removeClass('success error');
            $('#monthly-days').val('30').removeClass('success error');
            editingIndex = -1;
            $('#add-appliance-btn').text('যন্ত্রপাতি যোগ করুন').removeClass('bg-orange-500 hover:bg-orange-600').addClass('btn-primary');
        }

        function calculateBill() {
            showPreloader('বিল গণনা করা হচ্ছে...');
            let totalUnits = 0;
            let avgUnitPrice = 0;
            let fixedCharge = 0;
            let demandCharge = 0;
            let vatAmount = 0;
            let totalBill = 0;
            let powerFactorPenalty = 0;

            const activeTab = $('.tab-button.active').data('tab');

            $('#appliance-feedback').addClass('hidden').find('ul').empty();
            $('#general-feedback').addClass('hidden').find('ul').empty();
            $('#three-phase-feedback').addClass('hidden').find('ul').empty();
            currentFeedbackMessages = [];

            let hasFeedback = false;

            if (activeTab === 'appliance-wise') {
                totalUnits = appliances.reduce((sum, app) => sum + app.monthlyUnit, 0);
                $('#show-graph-btn').show();

                const $applianceFeedbackList = $('#appliance-feedback-list');
                $applianceFeedbackList.empty();
                
                if (appliances.length > 0) {
                    if (totalUnits > 500) {
                        const sortedByConsumption = [...appliances].sort((a, b) => b.monthlyUnit - a.monthlyUnit);
                        const topConsumer = sortedByConsumption[0];
                        const msg = `আপনার মাসিক বিদ্যুৎ ব্যবহার (${toBengaliNumber(totalUnits.toFixed(2))} kWh) তুলনামূলকভাবে বেশি। আপনার "${topConsumer.name}" সবচেয়ে বেশি বিদ্যুৎ খরচ করছে। এর ব্যবহার পর্যালোচনা করুন।`;
                        $applianceFeedbackList.append(`<li class="flex items-center"><i class="fas fa-exclamation-triangle text-red-500 mr-2"></i>${msg}</li>`);
                        currentFeedbackMessages.push(msg);
                        hasFeedback = true;
                    } else if (totalUnits < 50 && totalUnits > 0) {
                        const msg = 'আপনার বিদ্যুৎ ব্যবহার খুবই কম। আপনি বিদ্যুৎ সাশ্রয়ে ভালো কাজ করছেন!';
                        $applianceFeedbackList.append(`<li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2"></i>${msg}</li>`);
                        currentFeedbackMessages.push(msg);
                        hasFeedback = true;
                    }
                    if (appliances.some(app => app.watt > 1500 && app.dailyHours > 2)) {
                        const msg = 'আপনার কিছু যন্ত্রপাতি (যেমন: গিজার, এসি, হিটার) উচ্চ ওয়াটের। এগুলোর ব্যবহার সীমিত করে বা স্মার্ট উপায়ে ব্যবহার করে বিদ্যুৎ সাশ্রয় করতে পারেন।';
                        $applianceFeedbackList.append(`<li class="flex items-center"><i class="fas fa-lightbulb text-orange-500 mr-2"></i>${msg}</li>`);
                        currentFeedbackMessages.push(msg);
                        hasFeedback = true;
                    }
                    if (appliances.some(app => app.monthlyDays < 10 && app.monthlyUnit > 50)) {
                        const msg = 'কিছু যন্ত্রপাতি কম দিন ব্যবহার হলেও বেশি ইউনিট খরচ করছে। এগুলোর দৈনিক ব্যবহারের সময় বা সংখ্যা কমানোর কথা ভাবুন।';
                        $applianceFeedbackList.append(`<li class="flex items-center"><i class="fas fa-calendar-alt text-purple-500 mr-2"></i>${msg}</li>`);
                        currentFeedbackMessages.push(msg);
                        hasFeedback = true;
                    }
                }

                if (hasFeedback) {
                    $('#appliance-feedback').removeClass('hidden');
                } else {
                    $('#appliance-feedback').addClass('hidden');
                }

                if (currentSelectedTariff && currentSelectedTariff.residential) {
                    let remainingUnits = totalUnits;
                    let totalCostFromSlabs = 0;

                    currentSelectedTariff.residential.forEach(slab => {
                        const [minStr, maxStr] = slab.slab.split('-');
                        const min = parseInt(minStr);
                        const max = maxStr === '+' ? Infinity : parseInt(maxStr);

                        if (remainingUnits > 0) {
                            const unitsInThisSlab = Math.min(remainingUnits, max - min + 1);
                            if (unitsInThisSlab > 0) {
                                totalCostFromSlabs += unitsInThisSlab * slab.rate;
                                remainingUnits -= unitsInThisSlab;
                            }
                        }
                    });

                    avgUnitPrice = totalUnits > 0 ? totalCostFromSlabs / totalUnits : 0;
                    fixedCharge = currentSelectedTariff.fixedCharge || 0;
                    demandCharge = currentSelectedTariff.demandCharge || 0;
                    totalBill = totalCostFromSlabs + fixedCharge + demandCharge;
                    vatAmount = totalBill * 0.05;
                    totalBill += vatAmount;

                } else {
                    let remainingUnits = totalUnits;
                    let totalCostFromSlabs = 0;

                    generalTariffRates.residential.forEach(slab => {
                        if (remainingUnits > 0) {
                            const unitsInThisSlab = Math.min(remainingUnits, slab.slabEnd - slab.slabStart + 1);
                            if (unitsInThisSlab > 0) {
                                totalCostFromSlabs += unitsInThisSlab * slab.rate;
                                remainingUnits -= unitsInThisSlab;
                            }
                        }
                    });

                    avgUnitPrice = totalUnits > 0 ? totalCostFromSlabs / totalUnits : 0;
                    fixedCharge = generalTariffRates.fixedCharge.residential || 0;
                    demandCharge = generalTariffRates.demandCharge.residential || 0;
                    totalBill = totalCostFromSlabs + fixedCharge + demandCharge;
                    vatAmount = totalBill * 0.05;
                    totalBill += vatAmount;
                }
                if (totalUnits > 0) {
                    $('#bill-summary-card').removeClass('hidden');
                    showToast('বিল সফলভাবে গণনা করা হয়েছে!', 'success');
                } else {
                    $('#bill-summary-card').addClass('hidden');
                }

            } else if (activeTab === 'general-bill') {
                const totalUnitsGeneral = parseFloat($('#total-units-general').val()) || 0;
                const peakUnitsGeneral = parseFloat($('#peak-units-general').val()) || 0;
                const offPeakUnitsGeneral = parseFloat($('#offpeak-units-general').val()) || 0;
                
                const tariffType = $('#tariff-type-general').val();
                currentTariffType = tariffType;
                $('#show-graph-btn').hide();

                const $generalFeedbackList = $('#general-feedback-list');
                $generalFeedbackList.empty();
                
                let isValidCalculation = true;

                if (isNaN(totalUnitsGeneral) || totalUnitsGeneral <= 0) {
                    const msg = 'অনুগ্রহ করে মোট ব্যবহৃত ইউনিট সঠিকভাবে পূরণ করুন এবং এটি শূন্যের বেশি হতে হবে।';
                    $generalFeedbackList.append(`<li class="flex items-center"><i class="fas fa-exclamation-triangle text-red-500 mr-2"></i>${msg}</li>`);
                    currentFeedbackMessages.push(msg);
                    hasFeedback = true;
                    isValidCalculation = false;
                }
                // Show peak/off-peak inputs for all tariff types in general bill
                if ($('#general-peak-offpeak-inputs').is(':visible')) {
                    if (isNaN(peakUnitsGeneral) || peakUnitsGeneral < 0 || isNaN(offPeakUnitsGeneral) || offPeakUnitsGeneral < 0) {
                        const msg = 'পিক আওয়ার এবং অফ-পিক আওয়ার ইউনিট সঠিকভাবে পূরণ করুন।';
                        $generalFeedbackList.append(`<li class="flex items-center"><i class="fas fa-exclamation-triangle text-red-500 mr-2"></i>${msg}</li>`);
                        currentFeedbackMessages.push(msg);
                        hasFeedback = true;
                        isValidCalculation = false;
                    } else if (Math.abs(peakUnitsGeneral + offPeakUnitsGeneral - totalUnitsGeneral) > 0.01) {
                        const msg = 'পিক আওয়ার এবং অফ-পিক আওয়ার ইউনিটের যোগফল মোট ইউনিটের সমান নয়।';
                        $generalFeedbackList.append(`<li class="flex items-center"><i class="fas fa-exclamation-triangle text-red-500 mr-2"></i>${msg}</li>`);
                        currentFeedbackMessages.push(msg);
                        hasFeedback = true;
                        isValidCalculation = false;
                    }
                    if (peakUnitsGeneral > (offPeakUnitsGeneral * 1.5) && offPeakUnitsGeneral > 0) {
                        const msg = 'আপনার পিক আওয়ারের ব্যবহার অফ-পিক আওয়ারের চেয়ে বেশি। সম্ভব হলে কিছু ব্যবহার অফ-পিক আওয়ারে স্থানান্তরিত করার চেষ্টা করুন। এতে খরচ কমতে পারে।';
                        $generalFeedbackList.append(`<li class="flex items-center"><i class="fas fa-lightbulb text-blue-500 mr-2"></i>${msg}</li>`);
                        currentFeedbackMessages.push(msg);
                        hasFeedback = true;
                    }
                }
                if (totalUnitsGeneral > 400 && tariffType === 'residential') {
                    const msg = `আপনার মাসিক বিদ্যুৎ ব্যবহার (${toBengaliNumber(totalUnitsGeneral.toFixed(2))} kWh) আবাসিক ব্যবহারের জন্য তুলনামূলকভাবে বেশি। বিদ্যুৎ সাশ্রয়ের টিপসগুলো অনুসরণ করুন।`;
                    $generalFeedbackList.append(`<li class="flex items-center"><i class="fas fa-exclamation-triangle text-red-500 mr-2"></i>${msg}</li>`);
                    currentFeedbackMessages.push(msg);
                    hasFeedback = true;
                } else if (totalUnitsGeneral <= 100 && totalUnitsGeneral > 0 && tariffType === 'residential') {
                    const msg = 'আপনার বিদ্যুৎ ব্যবহার খুবই সাশ্রয়ী। এই ধারা বজায় রাখুন!';
                    $generalFeedbackList.append(`<li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2"></i>${msg}</li>`);
                    currentFeedbackMessages.push(msg);
                    hasFeedback = true;
                }
                if (tariffType === 'commercial' && totalUnitsGeneral > 1000) {
                    const msg = 'বাণিজ্যিক ব্যবহারের জন্য আপনার বিদ্যুৎ খরচ বেশি। এনার্জি অডিট করে অপ্রয়োজনীয় খরচ কমানোর সুযোগ খুঁজতে পারেন।';
                    $generalFeedbackList.append(`<li class="flex items-center"><i class="fas fa-building text-orange-500 mr-2"></i>${msg}</li>`);
                    currentFeedbackMessages.push(msg);
                    hasFeedback = true;
                }
                if (tariffType === 'industrial' && totalUnitsGeneral > 5000) {
                    const msg = 'শিল্প খাতে আপনার বিদ্যুৎ ব্যবহার অনেক বেশি। পাওয়ার ফ্যাক্টর সংশোধন, দক্ষ যন্ত্রপাতি ব্যবহার এবং লোড শেডিং পরিকল্পনা করে খরচ কমাতে পারেন।';
                    $generalFeedbackList.append(`<li class="flex items-center"><i class="fas fa-industry text-red-500 mr-2"></i>${msg}</li>`);
                    currentFeedbackMessages.push(msg);
                    hasFeedback = true;
                }

                if (hasFeedback) {
                    $('#general-feedback').removeClass('hidden');
                } else {
                    $('#general-feedback').addClass('hidden');
                }

                if (!isValidCalculation) {
                    $('#bill-summary-card').addClass('hidden');
                    hidePreloader();
                    return;
                }

                let totalCostFromSlabs = 0;
                
                // Check if peak/off-peak inputs are visible and rates are available
                if ($('#general-peak-offpeak-inputs').is(':visible') && generalTariffRates[tariffType][0].peakRate && generalTariffRates[tariffType][0].offPeakRate) {
                    totalUnits = peakUnitsGeneral + offPeakUnitsGeneral;
                    let remainingPeakUnits = peakUnitsGeneral;
                    let remainingOffPeakUnits = offPeakUnitsGeneral;

                    generalTariffRates[tariffType].forEach(slab => {
                        if (remainingPeakUnits > 0) {
                            const unitsInThisPeakSlab = Math.min(remainingPeakUnits, slab.slabEnd - slab.slabStart + 1);
                            if (unitsInThisPeakSlab > 0) {
                                totalCostFromSlabs += unitsInThisPeakSlab * slab.peakRate;
                                remainingPeakUnits -= unitsInThisPeakSlab;
                            }
                        }
                        if (remainingOffPeakUnits > 0) {
                            const unitsInThisOffPeakSlab = Math.min(remainingOffPeakUnits, slab.slabEnd - slab.slabStart + 1);
                            if (unitsInThisOffPeakSlab > 0) {
                                totalCostFromSlabs += unitsInThisOffPeakSlab * slab.offPeakRate;
                                remainingOffPeakUnits -= unitsInThisOffPeakSlab;
                            }
                        }
                    });

                } else { // Fallback to general rate if no peak/off-peak or inputs not visible
                    totalUnits = totalUnitsGeneral;
                    let remainingUnits = totalUnits;
                    if (generalTariffRates[tariffType]) {
                        generalTariffRates[tariffType].forEach(slab => {
                            if (remainingUnits > 0) {
                                const unitsInThisSlab = Math.min(remainingUnits, slab.slabEnd - slab.slabStart + 1);
                                if (unitsInThisSlab > 0) {
                                    totalCostFromSlabs += unitsInThisSlab * slab.rate;
                                    remainingUnits -= unitsInThisSlab;
                                }
                            }
                        });
                    }
                }

                avgUnitPrice = totalUnits > 0 ? totalCostFromSlabs / totalUnits : 0;
                fixedCharge = generalTariffRates.fixedCharge[tariffType] || 0;
                demandCharge = generalTariffRates.demandCharge[tariffType] || 0;
                totalBill = totalCostFromSlabs + fixedCharge + demandCharge;
                vatAmount = totalBill * 0.05;
                totalBill += vatAmount;

                if (totalUnits > 0) {
                    $('#bill-summary-card').removeClass('hidden');
                    showToast('বিল সফলভাবে গণনা করা হয়েছে!', 'success');
                } else {
                    $('#bill-summary-card').addClass('hidden');
                }

            } else if (activeTab === 'three-phase-bill') {
                const peakUnits = parseFloat($('#peak-units-three-phase').val()) || 0;
                const offPeakUnits = parseFloat($('#offpeak-units-three-phase').val()) || 0;
                totalUnits = peakUnits + offPeakUnits;

                const demandKW = parseFloat($('#demand-three-phase').val()) || 0;
                const powerFactor = parseFloat($('#power-factor-three-phase').val()) || 1.0;
                currentTariffType = 'three-phase';
                $('#show-graph-btn').hide();

                const $threePhaseFeedbackList = $('#three-phase-feedback-list');
                $threePhaseFeedbackList.empty();
                
                let isValidCalculation = true;

                if (!validateInputField($('#total-units-three-phase')[0])) isValidCalculation = false;
                if (!validateInputField($('#demand-three-phase')[0])) isValidCalculation = false;
                if (!validateInputField($('#power-factor-three-phase')[0])) isValidCalculation = false;
                if (!validateInputField($('#peak-units-three-phase')[0])) isValidCalculation = false;
                if (!validateInputField($('#offpeak-units-three-phase')[0])) isValidCalculation = false;

                if (!isValidCalculation) {
                    const msg = 'অনুগ্রহ করে থ্রি-ফেজ বিল গণনার সকল তথ্য সঠিকভাবে পূরণ করুন।';
                    $threePhaseFeedbackList.append(`<li class="flex items-center"><i class="fas fa-exclamation-triangle text-red-500 mr-2"></i>${msg}</li>`);
                    currentFeedbackMessages.push(msg);
                    hasFeedback = true;
                } else {
                    if (Math.abs(parseFloat($('#total-units-three-phase').val() || 0) - (peakUnits + offPeakUnits)) > 0.01) {
                        const msg = 'পিক আওয়ার এবং অফ-পিক আওয়ার ইউনিটের যোগফল মোট ইউনিটের সমান নয়।';
                        $threePhaseFeedbackList.append(`<li class="flex items-center"><i class="fas fa-exclamation-triangle text-red-500 mr-2"></i>${msg}</li>`);
                        currentFeedbackMessages.push(msg);
                        hasFeedback = true;
                    }
                    if (powerFactor < 0.8) {
                        const msg = 'আপনার পাওয়ার ফ্যাক্টর ০.৮ এর নিচে, যা অতিরিক্ত বিলের কারণ হতে পারে। পাওয়ার ফ্যাক্টর উন্নত করার জন্য ক্যাপাসিটর ব্যাংক ব্যবহার বিবেচনা করুন।';
                        $threePhaseFeedbackList.append(`<li class="flex items-center"><i class="fas fa-exclamation-triangle text-red-500 mr-2"></i>${msg}</li>`);
                        currentFeedbackMessages.push(msg);
                        hasFeedback = true;
                    } else if (powerFactor < 0.9) {
                        const msg = 'আপনার পাওয়ার ফ্যাক্টর ০.৯ এর নিচে, যার জন্য জরিমানা প্রযোজ্য হতে পারে। পাওয়ার ফ্যাক্টর উন্নত করার চেষ্টা করুন।';
                        $threePhaseFeedbackList.append(`<li class="flex items-center"><i class="fas fa-info-circle text-orange-500 mr-2"></i>${msg}</li>`);
                        currentFeedbackMessages.push(msg);
                        hasFeedback = true;
                    }

                    if (demandKW > 50) {
                        const msg = 'আপনার ডিমান্ড (kW) অনেক বেশি, যা ডিমান্ড চার্জ বৃদ্ধি করছে। ব্যবহারের ধরণ পর্যালোচনা করুন এবং পিক ডিমান্ড কমানোর চেষ্টা করুন।';
                        $threePhaseFeedbackList.append(`<li class="flex items-center"><i class="fas fa-exclamation-triangle text-red-500 mr-2"></i>${msg}</li>`);
                        currentFeedbackMessages.push(msg);
                        hasFeedback = true;
                    }

                    if (peakUnits > (offPeakUnits * 2) && offPeakUnits > 0) {
                        const msg = 'আপনার পিক আওয়ারের ব্যবহার অফ-পিক আওয়ারের চেয়ে উল্লেখযোগ্যভাবে বেশি। সম্ভব হলে কিছু ব্যবহার অফ-পিক আওয়ারে স্থানান্তরিত করার চেষ্টা করুন, এতে খরচ কমতে পারে।';
                        $threePhaseFeedbackList.append(`<li class="flex items-center"><i class="fas fa-lightbulb text-blue-500 mr-2"></i>${msg}</li>`);
                        currentFeedbackMessages.push(msg);
                        hasFeedback = true;
                    }
                    if (totalUnits > 10000) {
                        const msg = 'আপনার মোট বিদ্যুৎ ব্যবহার অত্যন্ত বেশি। লোড ব্যালেন্সিং এবং এনার্জি ম্যানেজমেন্ট সিস্টেম ব্যবহারের কথা বিবেচনা করুন।';
                        $threePhaseFeedbackList.append(`<li class="flex items-center"><i class="fas fa-bolt text-red-500 mr-2"></i>${msg}</li>`);
                        currentFeedbackMessages.push(msg);
                        hasFeedback = true;
                    }
                }


                if (hasFeedback) {
                    $('#three-phase-feedback').removeClass('hidden');
                } else {
                    $('#three-phase-feedback').addClass('hidden');
                }

                if (!isValidCalculation) {
                    $('#bill-summary-card').addClass('hidden');
                    hidePreloader();
                    return;
                }

                const unitCost = (peakUnits * threePhaseTariffRates.peakUnitRate) + (offPeakUnits * threePhaseTariffRates.offPeakUnitRate);
                const demandCost = demandKW * threePhaseTariffRates.demandChargePerKW;
                fixedCharge = threePhaseTariffRates.fixedCharge;
                
                powerFactorPenalty = 0;
                if (powerFactor < 0.9 && powerFactor > 0) {
                    powerFactorPenalty = unitCost * threePhaseTariffRates.powerFactorPenaltyRate * (0.9 - powerFactor);
                }

                totalBill = unitCost + demandCost + fixedCharge + powerFactorPenalty;
                vatAmount = totalBill * 0.05;
                totalBill += vatAmount;
                avgUnitPrice = totalUnits > 0 ? totalBill / totalUnits : 0;
                demandCharge = demandCost;

                if (totalUnits > 0) {
                    $('#bill-summary-card').removeClass('hidden');
                    showToast('বিল সফলভাবে গণনা করা হয়েছে!', 'success');
                } else {
                    $('#bill-summary-card').addClass('hidden');
                }
            }

            $('#total-units').text(`${toBengaliNumber(totalUnits.toFixed(2))} kWh`);
            $('#avg-unit-price').text(`৳ ${toBengaliNumber(avgUnitPrice.toFixed(2))}`);
            $('#fixed-charge').text(`৳ ${toBengaliNumber(fixedCharge.toFixed(2))}`);
            $('#demand-charge').text(`৳ ${toBengaliNumber(demandCharge.toFixed(2))}`);
            $('#vat-amount').text(`৳ ${toBengaliNumber(vatAmount.toFixed(2))}`);
            $('#total-bill').text(`৳ ${toBengaliNumber(totalBill.toFixed(2))}`);
            hidePreloader();
        }

        $('#calculate-general-bill-btn').on('click', calculateBill);
        $('#calculate-three-phase-bill-btn').on('click', calculateBill);

        $('#tariff-type-general').on('change', function() {
            // Show peak/off-peak inputs for all tariff types in general bill
            $('#general-peak-offpeak-inputs').removeClass('hidden');
            // Clear peak/off-peak values when tariff type changes, to avoid stale data
            $('#peak-units-general').val('').removeClass('success error');
            $('#offpeak-units-general').val('').removeClass('success error');
        });


        $('.tab-button').on('click', function() {
            $('.tab-button').removeClass('active');
            $(this).addClass('active');
            $('.tab-content').addClass('hidden');
            const targetTab = $(this).data('tab');
            $(`#${targetTab}`).removeClass('hidden');
            
            $('#bill-summary-card').addClass('hidden');
            $('#show-graph-btn').hide();
            $('#appliance-feedback').addClass('hidden').find('ul').empty();
            $('#general-feedback').addClass('hidden').find('ul').empty();
            $('#three-phase-feedback').addClass('hidden').find('ul').empty();
            currentFeedbackMessages = [];

            if (targetTab === 'appliance-wise') {
                renderApplianceList();
                if (appliances.length > 0) {
                    calculateBill();
                } else {
                    $('#appliance-feedback').addClass('hidden');
                }
            } else {
                $('#bill-summary-card').addClass('hidden');
            }
            if (targetTab === 'general-bill') {
                $('#total-units-general').val('').removeClass('success error');
                $('#tariff-type-general').val('residential').trigger('change'); // Trigger change to show peak/off-peak inputs
                $('#peak-units-general').val('').removeClass('success error');
                $('#offpeak-units-general').val('').removeClass('success error');
            } else if (targetTab === 'three-phase-bill') {
                $('#total-units-three-phase').val('').removeClass('success error');
                $('#demand-three-phase').val('').removeClass('success error');
                $('#power-factor-three-phase').val('').removeClass('success error');
                $('#peak-units-three-phase').val('').removeClass('success error');
                $('#offpeak-units-three-phase').val('').removeClass('success error');
            }
        });

        $('#reset-btn').on('click', function() {
            showPreloader('তথ্য রিসেট করা হচ্ছে...');
            appliances = [];
            renderApplianceList();
            $('#division-select').val('');
            $('#district-select').empty().append('<option value="">জেলা নির্বাচন করুন</option>').prop('disabled', true);
            $('#upazila-select').empty().append('<option value="">উপজেলা নির্বাচন করুন</option>').prop('disabled', true);
            $('#area-select').empty().append('<option value="">এলাকা নির্বাচন করুন</option>').prop('disabled', true);
            $('#provider-select').empty().append('<option value="">বিদ্যুৎ সরবরাহকারী নির্বাচন করুন</option>').prop('disabled', true);
            $('#tariff-info').addClass('hidden');
            $('#tariff-info-toggle-area').addClass('hidden');
            $('#toggle-tariff-info').html('<i class="fas fa-eye"></i> দেখান').removeClass('active');
            currentSelectedTariff = null;
            $('#total-units-general').val('').removeClass('success error');
            $('#peak-units-general').val('').removeClass('success error');
            $('#offpeak-units-general').val('').removeClass('success error');
            $('#tariff-type-general').val('residential').trigger('change');
            $('#total-units-three-phase').val('').removeClass('success error');
            $('#demand-three-phase').val('').removeClass('success error');
            $('#power-factor-three-phase').val('').removeClass('success error');
            $('#peak-units-three-phase').val('').removeClass('success error');
            $('#offpeak-units-three-phase').val('').removeClass('success error');
            clearApplianceInputs();
            calculateBill();
            $('#bill-summary-card').addClass('hidden');
            $('#appliance-feedback').addClass('hidden').find('ul').empty();
            $('#general-feedback').addClass('hidden').find('ul').empty();
            $('#three-phase-feedback').addClass('hidden').find('ul').empty();
            currentFeedbackMessages = [];
            showToast('সকল তথ্য রিসেট করা হয়েছে!', 'info');
            hidePreloader();
        });

        $('#generate-invoice-btn').on('click', function() {
            showPreloader('ইনভয়েস তৈরি হচ্ছে...');
            $('#invoice-content').addClass('hidden');
            $('#invoice-modal').addClass('open');

            const today = new Date();
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const formattedDate = today.toLocaleDateString('bn-BD', options);
            const invoiceId = `INV-${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}-${Math.floor(1000 + Math.random() * 9000)}`;
            const billMonth = today.toLocaleDateString('bn-BD', { month: 'long', year: 'numeric' });

            $('#invoice-date').text(formattedDate);
            $('#invoice-id').text(invoiceId);
            $('#invoice-bill-month').text(billMonth);

            const division = $('#division-select option:selected').val();
            const district = $('#district-select option:selected').val();
            const upazila = $('#upazila-select option:selected').val();
            const area = $('#area-select option:selected').val();
            let fullAddressParts = [];
            if (area) fullAddressParts.push(area);
            if (upazila) fullAddressParts.push(upazila);
            if (district) fullAddressParts.push(district);
            if (division) fullAddressParts.push(division);
            
            const fullAddress = fullAddressParts.join(', ');
            $('#invoice-full-address').text(fullAddress ? `${fullAddress}` : 'ঠিকানা নির্বাচন করুন');

            $('#invoice-provider').text($('#provider-select option:selected').text() || 'বিদ্যুৎ সরবরাহকারী নির্বাচন করুন');

            let displayedTariffType = '';
            const activeTab = $('.tab-button.active').data('tab');

            $('#invoice-appliance-list-section').addClass('hidden');
            $('#invoice-general-bill-details-section').addClass('hidden');
            $('#invoice-three-phase-bill-details-section').addClass('hidden');
            $('#invoice-feedback-section').addClass('hidden').find('ul').empty();

            if (activeTab === 'appliance-wise') {
                displayedTariffType = 'আবাসিক (যন্ত্রপাতি-ভিত্তিক)';
                $('#invoice-appliance-list-section').removeClass('hidden');
                const $invoiceApplianceList = $('#invoice-appliance-list');
                $invoiceApplianceList.empty();
                if (appliances.length === 0) {
                    $invoiceApplianceList.append('<tr><td colspan="7" class="py-3 text-center text-gray-500">কোনো যন্ত্রপাতি যোগ করা হয়নি।</td></tr>');
                } else {
                    appliances.forEach((appliance, index) => {
                        const row = `
                            <tr class="${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}">
                                <td class="py-2 px-3 text-center align-middle">${toBengaliNumber(index + 1)}</td>
                                <td class="py-2 px-3 text-center align-middle">${appliance.name}</td>
                                <td class="py-2 px-3 text-center align-middle">${toBengaliNumber(appliance.watt)}</td>
                                <td class="py-2 px-3 text-center align-middle">${toBengaliNumber(appliance.quantity)}</td>
                                <td class="py-2 px-3 text-center align-middle">${toBengaliNumber(appliance.dailyHours)}</td>
                                <td class="py-2 px-3 text-center align-middle">${toBengaliNumber(appliance.monthlyDays)}</td>
                                <td class="py-2 px-3 text-center align-middle">${toBengaliNumber(appliance.monthlyUnit.toFixed(2))}</td>
                            </tr>
                        `;
                        $invoiceApplianceList.append(row);
                    });
                }
            } else if (activeTab === 'general-bill') {
                displayedTariffType = `মোট ইউনিট অনুযায়ী (${$('#tariff-type-general option:selected').text()})`;
                $('#invoice-general-bill-details-section').removeClass('hidden');
                $('#invoice-general-total-units').text(toBengaliNumber(parseFloat($('#total-units-general').val() || 0).toFixed(2)));
                $('#invoice-general-tariff-type-display').text($('#tariff-type-general option:selected').text());
                $('#invoice-general-peak-units').text(toBengaliNumber(parseFloat($('#peak-units-general').val() || 0).toFixed(2)));
                $('#invoice-general-offpeak-units').text(toBengaliNumber(parseFloat($('#offpeak-units-general').val() || 0).toFixed(2)));

            } else if (activeTab === 'three-phase-bill') {
                displayedTariffType = 'থ্রি-ফেজ';
                $('#invoice-three-phase-bill-details-section').removeClass('hidden');
                $('#invoice-three-phase-total-units').text(toBengaliNumber(parseFloat($('#total-units-three-phase').val() || 0).toFixed(2)));
                $('#invoice-three-phase-demand').text(toBengaliNumber(parseFloat($('#demand-three-phase').val() || 0).toFixed(2)));
                $('#invoice-three-phase-power-factor').text(toBengaliNumber(parseFloat($('#power-factor-three-phase').val() || 1.0).toFixed(2)));
                $('#invoice-three-phase-peak-units').text(toBengaliNumber(parseFloat($('#peak-units-three-phase').val() || 0).toFixed(2)));
                $('#invoice-three-phase-offpeak-units').text(toBengaliNumber(parseFloat($('#offpeak-units-three-phase').val() || 0).toFixed(2)));
            }
            $('#invoice-tariff-type').text(displayedTariffType);

            $('#invoice-total-units').text($('#total-units').text());
            $('#invoice-avg-unit-price').text($('#avg-unit-price').text());
            $('#invoice-fixed-charge').text($('#fixed-charge').text());
            $('#invoice-demand-charge').text($('#demand-charge').text());
            $('#invoice-vat-amount').text($('#vat-amount').text());
            $('#invoice-total-bill').text($('#total-bill').text());

            if (currentFeedbackMessages.length > 0) {
                const $invoiceFeedbackList = $('#invoice-feedback-list');
                currentFeedbackMessages.forEach(msg => {
                    $invoiceFeedbackList.append(`<li>${msg}</li>`);
                });
                $('#invoice-feedback-section').removeClass('hidden');
            } else {
                $('#invoice-feedback-section').addClass('hidden');
            }

            setTimeout(() => {
                hidePreloader();
                $('#invoice-content').removeClass('hidden');
                showToast('ইনভয়েস তৈরি হয়েছে!', 'success');
            }, 500);
        });

        $('#download-pdf-btn').on('click', function() {
            showPreloader('PDF তৈরি হচ্ছে...');
            const { jsPDF } = window.jspdf;
            const element = document.getElementById('invoice-content');

            html2canvas(element, {
                scale: 2,
                useCORS: true,
                logging: false,
                allowTaint: true
            }).then(canvas => {
                const imgData = canvas.toDataURL('image/png');
                
                const pdfWidth = canvas.width;
                const pdfHeight = canvas.height;

                const pdf = new jsPDF('p', 'px', [pdfWidth, pdfHeight]);
                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                
                pdf.save('বিদ্যুৎ_বিল_ইনভয়েস.pdf');
                showToast('PDF সফলভাবে ডাউনলোড হয়েছে!', 'success');
                hidePreloader();
            }).catch(error => {
                console.error("Error generating PDF:", error);
                showToast("PDF তৈরি করতে সমস্যা হয়েছে।", "error");
                hidePreloader();
            });
        });

        // Removed PNG download functionality as per user request
        // $('#download-png-btn').on('click', function() {
        //     showPreloader('PNG তৈরি হচ্ছে...');
        //     const element = document.getElementById('invoice-content');

        //     html2canvas(element, {
        //         scale: 2, // Increase scale for better resolution
        //         useCORS: true,
        //         logging: false,
        //         allowTaint: true
        //     }).then(canvas => {
        //         const imgData = canvas.toDataURL('image/png');
        //         const link = document.createElement('a');
        //         link.href = imgData;
        //         link.download = 'বিদ্যুৎ_বিল_ইনভয়েস.png';
        //         document.body.appendChild(link);
        //         link.click();
        //         document.body.removeChild(link);
        //         showToast('PNG সফলভাবে ডাউনলোড হয়েছে!', 'success');
        //         hidePreloader();
        //     }).catch(error => {
        //         console.error("Error generating PNG:", error);
        //         showToast("PNG তৈরি করতে সমস্যা হয়েছে।", "error");
        //         hidePreloader();
        //     });
        // });


        let powerChart;

        $('#show-graph-btn').on('click', function() {
            showPreloader('গ্রাফ লোড হচ্ছে...');
            $('#graph-modal').addClass('open');
            setTimeout(() => {
                hidePreloader();
                renderPowerConsumptionChart();
            }, 500);
        });

        function renderPowerConsumptionChart() {
            const ctx = document.getElementById('powerConsumptionChart').getContext('2d');

            if (powerChart) {
                powerChart.destroy();
            }

            const labels = appliances.map(a => a.name);
            const data = appliances.map(a => a.monthlyUnit);
            const costs = appliances.map(a => {
                const avgUnitPriceText = $('#avg-unit-price').text().replace('৳', '').replace(' kWh', '');
                const avgUnitPrice = parseFloat(toEnglishNumber(avgUnitPriceText));
                return (a.monthlyUnit * avgUnitPrice);
            });

            const sortedAppliances = [...appliances].sort((a, b) => b.monthlyUnit - a.monthlyUnit);
            const top3Appliances = sortedAppliances.slice(0, 3).map(a => a.name);

            const backgroundColors = labels.map(label => {
                if (top3Appliances.includes(label)) {
                    return 'rgba(239, 68, 68, 0.8)';
                }
                return 'rgba(16, 185, 129, 0.8)';
            });
            const borderColors = labels.map(label => {
                if (top3Appliances.includes(label)) {
                    return 'rgba(239, 68, 68, 1)';
                }
                return 'rgba(16, 185, 129, 1)';
            });

            powerChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'মাসিক ইউনিট খরচ (kWh)',
                        data: data,
                        backgroundColor: backgroundColors,
                        borderColor: borderColors,
                        borderWidth: 1
                    },
                    {
                        label: 'মাসিক খরচ (৳)',
                        data: costs,
                        type: 'line',
                        borderColor: 'rgba(59, 130, 246, 1)',
                        backgroundColor: 'rgba(59, 130, 246, 0.2)',
                        fill: true,
                        yAxisID: 'y1',
                        tension: 0.3
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    const appliance = appliances[context.dataIndex];
                                    if (context.dataset.label === 'মাসিক ইউনিট খরচ (kWh)') {
                                        const unit = toBengaliNumber(appliance.monthlyUnit.toFixed(2));
                                        return `মাসিক ইউনিট: ${unit} kWh`;
                                    } else if (context.dataset.label === 'মাসিক খরচ (৳)') {
                                        const cost = toBengaliNumber(costs[context.dataIndex].toFixed(2));
                                        return `আনুমানিক খরচ: ৳ ${cost}`;
                                    }
                                    return context.label;
                                },
                                title: function(context) {
                                    const appliance = appliances[context[0].dataIndex];
                                    return `${appliance.name} (পাওয়ার লেবেল: ${appliance.powerConsumptionLevel})`;
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'মাসিক ইউনিট (kWh)',
                                font: {
                                    family: 'Noto Sans Bengali',
                                    size: 14
                                }
                            },
                            ticks: {
                                callback: function(value) {
                                    return toBengaliNumber(value);
                                },
                                font: {
                                    family: 'Noto Sans Bengali'
                                }
                            }
                        },
                        y1: {
                            type: 'linear',
                            position: 'right',
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'মাসিক খরচ (৳)',
                                font: {
                                    family: 'Noto Sans Bengali',
                                    size: 14
                                }
                            },
                            grid: {
                                drawOnChartArea: false
                            },
                            ticks: {
                                callback: function(value) {
                                    return `৳ ${toBengaliNumber(value)}`;
                                },
                                font: {
                                    family: 'Noto Sans Bengali'
                                }
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'যন্ত্রপাতির নাম',
                                font: {
                                    family: 'Noto Sans Bengali',
                                    size: 14
                                }
                            },
                            ticks: {
                                font: {
                                    family: 'Noto Sans Bengali'
                                }
                            }
                        }
                    },
                    onClick: (event, elements) => {
                        if (elements.length > 0) {
                            const index = elements[0].index;
                            const appliance = appliances[index];
                            
                            $('#detail-appliance-name').text(appliance.name);
                            $('#detail-appliance-watt').text(toBengaliNumber(appliance.watt));
                            $('#detail-appliance-quantity').text(toBengaliNumber(appliance.quantity));
                            $('#detail-daily-hours').text(toBengaliNumber(appliance.dailyHours));
                            $('#detail-monthly-days').text(toBengaliNumber(appliance.monthlyDays));
                            $('#detail-monthly-unit').text(toBengaliNumber(appliance.monthlyUnit.toFixed(2)));
                            $('#detail-voltage').text(appliance.voltage);
                            $('#detail-power-level').text(appliance.powerConsumptionLevel);

                            $('#appliance-details-modal').addClass('open');
                        }
                    }
                }
            });
        }

        $('#download-graph-pdf-btn').on('click', function() {
            showPreloader('গ্রাফ PDF তৈরি হচ্ছে...');
            const { jsPDF } = window.jspdf;
            const chartCanvas = document.getElementById('powerConsumptionChart');
            const graphExplanation = document.querySelector('#graph-modal .mt-6.p-6');

            const tempDiv = document.createElement('div');
            tempDiv.style.width = '8.27in';
            tempDiv.style.padding = '0.5in';
            tempDiv.style.backgroundColor = '#fff';
            tempDiv.style.fontFamily = 'Noto Sans Bengali, sans-serif';
            tempDiv.style.color = '#333';
            tempDiv.style.boxSizing = 'border-box';
            tempDiv.style.position = 'relative';

            const pdfGraphHeader = document.createElement('div');
            pdfGraphHeader.className = 'pdf-stylish-footer';
            pdfGraphHeader.innerHTML = `
                <p class="flex items-center justify-center">
                    <i class="fas fa-bolt footer-logo"></i>
                    <span class="footer-text">বিদ্যুৎ বিল ক্যালকুলেটর - পাওয়ার কনজাম্পশন গ্রাফ</span>
                </p>
            `;
            pdfGraphHeader.style.marginBottom = '1rem';
            tempDiv.appendChild(pdfGraphHeader);

            const mainTitle = document.createElement('h2');
            mainTitle.textContent = 'যন্ত্রপাতি পাওয়ার কনজাম্পশন গ্রাফ';
            mainTitle.style.textAlign = 'center';
            mainTitle.style.fontSize = '1.75rem';
            mainTitle.style.fontWeight = 'bold';
            mainTitle.style.marginBottom = '1rem';
            mainTitle.style.color = '#10B981';
            tempDiv.appendChild(mainTitle);

            const chartImg = new Image();
            chartImg.src = chartCanvas.toDataURL('image/png', 2.0);
            chartImg.style.width = '100%';
            chartImg.style.height = 'auto';
            tempDiv.appendChild(chartImg);

            const explanationClone = graphExplanation.cloneNode(true);
            explanationClone.style.marginTop = '1.5rem';
            tempDiv.appendChild(explanationClone);

            const pdfGraphFooter = document.createElement('div');
            pdfGraphFooter.className = 'pdf-stylish-footer';
            pdfGraphFooter.innerHTML = `
                <p class="flex items-center justify-center">
                    <i class="fas fa-bolt footer-logo"></i>
                    <span class="footer-text">বিদ্যুৎ বিল ক্যালকুলেটর - আপনার বিদ্যুৎ খরচ কমাতে আমরা আপনার পাশে আছি!</span>
                </p>
                <p class="text-xs mt-1">এই গ্রাফটি শুধুমাত্র আনুমানিক গণনার জন্য। প্রকৃত বিল আপনার বিদ্যুৎ সরবরাহকারীর নিয়মানুযায়ী পরিবর্তিত হতে পারে।</p>
            `;
            tempDiv.appendChild(pdfGraphFooter);

            document.body.appendChild(tempDiv);

            html2canvas(tempDiv, {
                scale: 2,
                useCORS: true,
                logging: false,
                allowTaint: true
            }).then(canvas => {
                const imgData = canvas.toDataURL('image/png');
                
                const pdfWidth = canvas.width;
                const pdfHeight = canvas.height;

                const pdf = new jsPDF('p', 'px', [pdfWidth, pdfHeight]);
                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                
                pdf.save('যন্ত্রপাতি_পাওয়ার_কনজাম্পশন_গ্রাফ.pdf');
                showToast('গ্রাফ PDF সফলভাবে ডাউনলোড হয়েছে!', 'success');

                document.body.removeChild(tempDiv);
                hidePreloader();
            }).catch(error => {
                console.error("Error generating graph PDF:", error);
                showToast("গ্রাফ PDF তৈরি করতে সমস্যা হয়েছে।", "error");
                if (document.body.contains(tempDiv)) {
                    document.body.removeChild(tempDiv);
                }
                hidePreloader();
            });
        });

        function animateHowItWorksSteps() {
            const steps = $('.how-it-works-step');
            steps.each(function(index) {
                const $step = $(this);
                setTimeout(() => {
                    $step.addClass('show');
                }, index * 300);
            });
        }

        $(document).ready(function() {
            populateDivisions();
            renderTips();
            // Removed renderMotivationalTips() call
            $('#current-year').text(toBengaliNumber(new Date().getFullYear()));
            $('#bill-summary-card').addClass('hidden');
            $('#show-graph-btn').hide();
            $('#general-peak-offpeak-inputs').addClass('hidden');
            $('#tariff-info-toggle-area').addClass('hidden');

            $('#beta-info-span').on('click', function() {
                showToast('এটি বিদ্যুৎ বিল ক্যালকুলেটর -এর একটি পরীক্ষামূলক সংস্করণ। আমরা প্রতিনিয়ত নতুন ফিচার যোগ করছি এবং বিদ্যমান ফিচারগুলো উন্নত করছি। আপনার প্রতিক্রিয়া আমাদের জন্য মূল্যবান!', 'info', 5000);
            });
            $('#three-phase-beta-span').on('click', function() {
                showToast('থ্রি-ফেজ বিল গণনা ফিচারটি বর্তমানে পরীক্ষামূলক পর্যায়ে রয়েছে। ডেটা এবং গণনার নির্ভুলতা যাচাই করা হচ্ছে।', 'info', 5000);
            });

            // Initial preloader hide and welcome modal show
            hidePreloader();
            $('#welcome-modal').addClass('open');
            animateHowItWorksSteps();

            $('#welcome-get-started-btn').on('click', function() {
                $('#welcome-modal').removeClass('open');
            });
        });
