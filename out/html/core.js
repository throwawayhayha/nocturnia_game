window.game={"compiled":"{\"scenes\":{\"prevScene\":{\"id\":\"prevScene\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"prevTopScene\":{\"id\":\"prevTopScene\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"jumpScene\":{\"id\":\"jumpScene\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"backSpecialScene\":{\"id\":\"backSpecialScene\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"returnScene\":{\"id\":\"returnScene\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"bts_var_calc.upcoming\":{\"id\":\"bts_var_calc.upcoming\",\"newPage\":true,\"goTo\":[{\"id\":\"bts_var_calc.events_choice\",\"predicate\":{\"$code\":\"return ((Q['has_event'] || 0)===1);\"}},{\"id\":\"main_trial\",\"predicate\":{\"$code\":\"return ((Q['has_event'] || 0)===0);\"}}],\"content\":{\"content\":{\"type\":\"heading\",\"content\":[\"\",{\"type\":\"conditional\",\"content\":\"Before the Trial\",\"predicate\":0},{\"type\":\"conditional\",\"content\":[\"Day \",{\"type\":\"insert\",\"insert\":2},\" \"],\"predicate\":1},\"\"]},\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['day'] || 0)===0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['day'] || 0) >= 1);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['day'] || 0);\"}}]}},\"credits.credits_menu\":{\"id\":\"credits.credits_menu\",\"options\":[{\"id\":\"@credits.image\",\"title\":\"Image sources\"},{\"id\":\"@credits.music\",\"title\":\"Music sources\"},{\"id\":\"@credits.miscreads\",\"title\":\"Miscellanous readings\"},{\"id\":\"@root\",\"title\":\"Back\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"library.library_menu\":{\"id\":\"library.library_menu\",\"options\":[{\"id\":\"@library.lib_nocturnia\",\"title\":\"Kingdom of Nocturnia\"},{\"id\":\"@library.lib_royal_fam\",\"title\":\"The Royal Family\"},{\"id\":\"@library.lib_darlyne\",\"title\":\"Princess Darlyne Nightbloom\"},{\"id\":\"@library.lib_nobility\",\"title\":\"Nobility\"},{\"id\":\"@library.lib_imperial_forum\",\"title\":\"Imperial Forum\"},{\"id\":\"@library.lib_judiciary\",\"title\":\"Supreme Court\"},{\"id\":\"@library.lib_royal_tribunal\",\"title\":\"Royal Tribunal\"},{\"id\":\"@library.lib_informants\",\"title\":\"Informants\"},{\"id\":\"@library.lib_freelancers\",\"title\":\"Freelancers\"},{\"id\":\"@library.remove_when_done\",\"title\":\"rubicon test\"},{\"id\":\"@backSpecialScene\",\"title\":\"Exit library.\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"main_trial.actions\":{\"id\":\"main_trial.actions\",\"title\":\"Actions\",\"cardImage\":\"img/image_deck.jpg\",\"isDeck\":true,\"options\":[{\"id\":\"#card_actions\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"root.menu_start\":{\"id\":\"root.menu_start\",\"options\":[{\"id\":\"@root.start\",\"title\":\"Start\"},{\"id\":\"@credits\"},{\"id\":\"@disclaim\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"status\":{\"id\":\"status\",\"type\":\"scene\",\"title\":\"Status\",\"newPage\":true,\"isSpecial\":true,\"content\":{\"content\":[{\"type\":\"heading\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"State of the Trial\"},\"\"]},{\"type\":\"paragraph\",\"content\":[\"Defense Counsel strength: \",{\"type\":\"insert\",\"insert\":0},\"\"]},{\"type\":\"paragraph\",\"content\":[\"Prosecution strength: \",{\"type\":\"insert\",\"insert\":1},\"\"]},{\"type\":\"paragraph\",\"content\":[\"The balance of this trial is \",{\"type\":\"insert\",\"insert\":2},\"\"]},{\"type\":\"paragraph\",\"content\":\"((delete after))\"},{\"type\":\"paragraph\",\"content\":[\"defend: \",{\"type\":\"insert\",\"insert\":3},\"\"]},{\"type\":\"paragraph\",\"content\":[\"prosec: \",{\"type\":\"insert\",\"insert\":4},\"\"]},{\"type\":\"paragraph\",\"content\":[\"difference: \",{\"type\":\"insert\",\"insert\":5},\"\"]},{\"type\":\"paragraph\",\"content\":[\"action_timer: \",{\"type\":\"insert\",\"insert\":6},\"\"]},{\"type\":\"paragraph\",\"content\":[\"day: \",{\"type\":\"insert\",\"insert\":7},\"\"]},{\"type\":\"heading\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"Relationship\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"Princess's relation:\"},\" \"],\"predicate\":8},{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"Former Princess's relation:\"},\" \"],\"predicate\":9},\"\"]},{\"type\":\"paragraph\",\"content\":[\"Darlyne Nightbloom: \",{\"type\":\"insert\",\"insert\":10},\"\"]},{\"type\":\"paragraph\",\"content\":[\"Currently, she is feeling \",{\"type\":\"insert\",\"insert\":11},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"Other relations:\"},\"\"]},{\"type\":\"paragraph\",\"content\":[\"King and Queen of Nocturnia: \",{\"type\":\"insert\",\"insert\":12},\"\"]},{\"type\":\"paragraph\",\"content\":[\"Nobility: \",{\"type\":\"insert\",\"insert\":13},\"\"]},{\"type\":\"paragraph\",\"content\":[\"Judiciary: \",{\"type\":\"insert\",\"insert\":14},\"\"]},{\"type\":\"paragraph\",\"content\":[\"Alchemy Center: \",{\"type\":\"insert\",\"insert\":15},\"\"]},{\"type\":\"heading\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"Knowledge\"},\"\"]},{\"type\":\"paragraph\",\"content\":[\"Internal politics: \",{\"type\":\"insert\",\"insert\":16},\"\"]},{\"type\":\"paragraph\",\"content\":[\"Law: \",{\"type\":\"insert\",\"insert\":17},\"\"]},{\"type\":\"paragraph\",\"content\":[\"Alchemy: \",{\"type\":\"insert\",\"insert\":18},\"\"]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['diff_strength'] || 0);\"},\"qdisplay\":\"defend_strength\"},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['diff_strength'] || 0);\"},\"qdisplay\":\"prosec_strength\"},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['diff_strength'] || 0);\"},\"qdisplay\":\"trial_balance\"},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['defense_strength'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['prosecution_strength'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['diff_strength'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['action_timer'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['day'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (!(((Q['guilty'] || 0)) !== 0));\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['guilty'] || 0)) !== 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['relation_darlyne'] || 0);\"},\"qdisplay\":\"darlyne_relation\"},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['darlyne_mood'] || 0);\"},\"qdisplay\":\"mood\"},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['relation_king'] || 0);\"},\"qdisplay\":\"relationships\"},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['relation_nobility'] || 0);\"},\"qdisplay\":\"relationships\"},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['relation_judiciary'] || 0);\"},\"qdisplay\":\"relationships\"},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['relation_alchemy_center'] || 0);\"},\"qdisplay\":\"relationships\"},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['knowledge_politics'] || 0);\"},\"qdisplay\":\"knowledges\"},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['knowledge_law'] || 0);\"},\"qdisplay\":\"knowledges\"},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['knowledge_alchemy'] || 0);\"},\"qdisplay\":\"knowledges\"}]}},\"disclaim\":{\"id\":\"disclaim\",\"type\":\"scene\",\"title\":\"Disclaimer\",\"newPage\":true,\"options\":[{\"id\":\"@root\",\"title\":\"Back\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-1\",\"content\":\"Nocturnia: Trial of the Century\"},\" is a fan-made work of fiction created for non-commercial entertainment purposes (a.k.a. for hobbying and, really, purely for the fun of it) protected under... (I have looked for Fan Content Policy for \",{\"type\":\"emphasis-1\",\"content\":\"WhickerButler\"},\" for quite a bit but I couldn't find it anywhere, help).\"]},{\"type\":\"paragraph\",\"content\":[\"Portions of the materials used are properties of \",{\"type\":\"emphasis-1\",\"content\":\"WhickerButler\"},\" with all rights reserved.\"]},{\"type\":\"paragraph\",\"content\":\"(. . . Further description . . .)\"}]},\"freelancer.solstair\":{\"id\":\"freelancer.solstair\",\"subtitle\":\"A self-proclaimed freelancer whose job resembles a mercenary more than anything else.\",\"chooseIf\":{\"$code\":\"return ((Q['ori_move'] || 0) < 1);\"},\"unavailableSubtitle\":\"She is no longer available to accept our request.\",\"onArrival\":[{\"$code\":\"Q['ori_move'] = 1;\"}],\"faceImage\":\"img/oriana_censored_image.jpg\",\"options\":[{\"id\":\"@freelancer.signed_ori\",\"title\":\"Oriana finally agrees to sign the contract with us.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Oriana Solstair, a self-proclaimed freelancer whose job resembles a mercenary more than anything else. She is relatively well-known in the unseen part of this kingdom as a principled mercenary, refusing to take up certain requests when they go against her moral code.\"},{\"type\":\"paragraph\",\"content\":\"We have gotten along quite well with her in our previous meetings, and she didn't seem to mind taking up our side. However, she has made it clear that she will accept our request only once, as she does not want any further involvement in the trial.\"}]},\"informant.valthea\":{\"id\":\"informant.valthea\",\"subtitle\":\"A world-class actress with a rumoured double life as a secret informant.\",\"chooseIf\":{\"$code\":\"return ((Q['val_move'] || 0) < 1);\"},\"unavailableSubtitle\":\"She is only willing to accept our request once.\",\"audio\":\"music/val_intro.mp3 loop\",\"faceImage\":\"img/valthea_censored_image.jpg\",\"options\":[{\"id\":\"@informant.signed_val\",\"title\":\"Valthea finally agrees to collaborate with us.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Valthea Nankila, a world-class actress with a rumoured double life behind the scenes. Indeed, there are whispers about how she is working as a secret informant, with networks spanning the entire continent.\"},{\"type\":\"paragraph\",\"content\":\"Of course, as outrageous as it sounds, we cannot deny its possibility, and our previous meetings have simply strengthened that belief. That is also precisely why we have decided to go along with her, after all.\"},{\"type\":\"paragraph\",\"content\":\"Thanks to our good connections, we have gotten along quite well with her in our previous meetings, and she didn't seem to mind taking up our side. However, she has made it clear that she will accept our request only once, as she does not want any further involvement in the trial.\"}]},\"knowledge.politics_know\":{\"id\":\"knowledge.politics_know\",\"subtitle\":\"Perhaps we could gain some insight to how their inner minds work?\",\"chooseIf\":{\"$code\":\"return ((Q['knowledge_politics'] || 0) <= 25);\"},\"unavailableSubtitle\":\"You have mastered this subject.\",\"onArrival\":[{\"$code\":\"Q['knowledge_politics'] = (Q['knowledge_politics'] || 0) + 3;\\nQ['knowledge_alchemy'] = (Q['knowledge_alchemy'] || 0) - 1;\\nQ['knowledge_law'] = (Q['knowledge_law'] || 0) - 1;\\nQ['relation_nobility'] = (Q['relation_nobility'] || 0) + 3;\\nQ['relation_king'] = (Q['relation_king'] || 0) + 1;\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"We have increased our knowledge about the internal politics of Nocturnia.\"},{\"type\":\"paragraph\",\"content\":\"The insight we've gained have also increased our understanding of the nobility, thus improving our relationship.\"}]},\"secret_action.return\":{\"id\":\"secret_action.return\",\"onArrival\":[{\"$code\":\"Q['secret_action_counts'] = (Q['secret_action_counts'] || 0) - 1;\\nQ['action_timer'] = (Q['action_timer'] || 0) - 1;\"}],\"content\":{\"content\":\"Although we could utilize our networks right away, this is arguably not the right time. Perhaps our efforts would be better placed in other, more urgent things to be dealt with elsewhere.\",\"type\":\"paragraph\"}},\"secret_action\":{\"id\":\"secret_action\",\"type\":\"scene\",\"title\":\"Secret actions\",\"newPage\":true,\"viewIf\":{\"$code\":\"return (((Q['secret_action_counts'] || 0) < 4) && ((((Q['monarch_available'] || 0)===1) || ((Q['ori_tata_available'] || 0)===1))));\"},\"onArrival\":[{\"$code\":\"Q['action_timer'] = (Q['action_timer'] || 0) + 2;\\nQ['secret_action_counts'] = (Q['secret_action_counts'] || 0) + 1;\"}],\"isCard\":true,\"cardImage\":\"img/secret_action_card.jpg\",\"tags\":[\"secret_actions\"],\"options\":[{\"id\":\"@informant\",\"title\":\"Reach out to our information network.\"},{\"id\":\"@freelancer\",\"title\":\"Get in touch with trust-worthy freelancers underground.\"},{\"id\":\"@secret_action.return\",\"title\":\"No, we will not do this.\"}],\"content\":[{\"type\":\"heading\",\"content\":\"Secret Actions\"},{\"type\":\"paragraph\",\"content\":\"We might be able to utilize the network we cultivated to secure the upper hand in this trial. A few cheeky little tricks up our sleeves are't going to hurt much after all, right?\"}]},\"relations.royals\":{\"id\":\"relations.royals\",\"onArrival\":[{\"$code\":\"Q['relation_king'] = (Q['relation_king'] || 0) + 2;\\nQ['relation_darlyne'] = (Q['relation_darlyne'] || 0) + 2;\\nQ['relation_nobility'] = (Q['relation_nobility'] || 0) - 2;\\nQ['relation_judiciary'] = (Q['relation_judiciary'] || 0) - 1;\\nQ['darlyne_mood'] = (Q['darlyne_mood'] || 0) + 2;\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Our meeting with the King and Queen of Nocturnia have gone quite well, and we have built a closer relationship as a result.\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne is delighted at our meeting. However, some nobles detest our approach at a closer relationship with the King, and the Royal Tribunal might see it as an attempt to influence the direction of the trial's proceedings.\"}]},\"strategic_meeting.offense\":{\"id\":\"strategic_meeting.offense\",\"chooseIf\":{\"$code\":\"return ((((Q['knowledge_politics'] || 0) > 10) || ((Q['knowledge_law'] || 0) > 12)) || ((Q['day'] || 0) > 3));\"},\"unavailableSubtitle\":\"We don't have enough preparation to go on the attack.\",\"onArrival\":[{\"$code\":\"Q.prosecution_strength -= (2 + Math.floor(Q.relation_nobility/8));\\n    Q.defense_strength += (2 + Math.floor(Q.knowledge_politics/3));\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"With our improved knowledge and expertise, we can improvise our prepared statements to go on the offensive in the courtroom.\"},{\"type\":\"paragraph\",\"content\":\"Attack is the best defense, after all, and turning the pressure right back towards them could prove to be a winning strategy in this trial.\"}]},\"secret_meeting.informant_1\":{\"id\":\"secret_meeting.informant_1\",\"viewIf\":{\"$code\":\"return (((Q['informant_network'] || 0)===0) && ((Q['monarch_available'] || 0)===0));\"},\"onArrival\":[{\"$code\":\"Q['informant_network'] = (Q['informant_network'] || 0) + 1;\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"With Princess Darlyne's connections and ours, we can secure important and confidential sources of information that could be pivotal to our defense's success.\"},{\"type\":\"paragraph\",\"content\":\"This is merely the start, however, and time will tell if putting our effort here can bear fruits in the near-future.\"}]},\"2_alchemy_chamber.not_brought\":{\"id\":\"2_alchemy_chamber.not_brought\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"1_alchemy_chamber.what_that_mean\":{\"id\":\"1_alchemy_chamber.what_that_mean\",\"options\":[{\"id\":\"@1_alchemy_chamber.why_flasks\",\"title\":\"\\\"What are all those flasks for?\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Greetings, Your Highness,\\\" you greet with a light bow. \\\"And what is that last part supposed to mean?\\\"\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne grins teasingly as she sits on the table across where you stand. \\\"Nope, it's nothing you have to be worried about.\\\"\"},{\"type\":\"paragraph\",\"content\":\"You let out a flat unconvinced stare, but she merely keeps her silent grin as a reply. You could only sigh inwardly as you lightly shake your head. \\\"...Never mind, then.\\\"\"}]},\"2_library_room.stay\":{\"id\":\"2_library_room.stay\",\"onArrival\":[{\"$code\":\"Q['darlyne_mood'] = (Q['darlyne_mood'] || 0) - 1;\\nQ['darlyne_relation'] = (Q['darlyne_relation'] || 0) - 1;\"}],\"content\":{\"content\":\"You decide to stay where you are, not far away from the reading table near the door. After all, if Princess Darlyne is indeed inside, it would be a matter of time before she crosses path with him standing here.\",\"type\":\"paragraph\"}},\"discussion_with_princess.sleepenough\":{\"id\":\"discussion_with_princess.sleepenough\",\"onArrival\":[{\"$code\":\"Q['darlyne_mood'] = (Q['darlyne_mood'] || 0) + 2;\\nQ['relation_darlyne'] = (Q['relation_darlyne'] || 0) + 1;\"}],\"options\":[{\"id\":\"@discussion_with_princess.paper_talk\",\"title\":\"\\\"There are a few things I'd like to talk about, Your Highness.\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"There are several things I'd like to discuss, but...\\\" you reply with a bit of hesitancy in your voice, \\\"...you look exhausted, Your Highness.\\\"\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne lets out a chuckle. \\\"Pfft, it's all good, Levon. I appreciate your concerns,\\\" she responds as she waves her hands in a dismissive manner. \\\"There's no need to worry about me, though. I've felt worse before.\\\"\"},{\"type\":\"paragraph\",\"content\":\"You are still hardly convinced by her response. However, you remember how she got severely annoyed the last time you tried to ask her about when did she last sleep, so you reluctantly decide to hold back.\"},{\"type\":\"paragraph\",\"content\":\"Also, Princess Darlyne in her half-asleep state can be a sight to behold sometimes. It's not something anyone gets to see, after all. A true privilege, indeed.\"},{\"type\":\"paragraph\",\"content\":\"\\\"So, what is it that you wanted to talk about?\\\" she asks again as she tidies up a stack of papers on her desk.\"}]},\"1_princess_office.desk_messy\":{\"id\":\"1_princess_office.desk_messy\",\"onArrival\":[{\"$code\":\"Q['relation_darlyne'] = (Q['relation_darlyne'] || 0) - 1;\\nQ['darlyne_mood'] = (Q['darlyne_mood'] || 0) - 2;\"}],\"options\":[{\"id\":\"@1_princess_office.next_research\",\"title\":\"\\\"So, what is the next step?\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"...The desk is as messy as usual, huh?\\\" You respond with a cheeky remark. \\\"I wonder what you've been working on, Your Highness.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Hmph, is that all that you pay attention to?\\\" Princess Darlyne let out an indignant huff as she crosses her arms. However, her annoyed expression soon gives way to a hearty chuckle. \\\"Anyway, I'm happy to say, another progress have been made this morning!\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh, another progress?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yep. The color of the potion is finally turning into something I'm happy with!\\\" she responds with excitement as she picks up one of the flasks filled with a pink-colored liquid. \\\"Here, I spent a good part of this morning fixing this before you came in, and it's finally done!\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Wow...\\\"\"},{\"type\":\"paragraph\",\"content\":\"You don't really know what to say except for an amazed remark. It's hard for you to not be in awe by that. After all, it wasn't that long ago when she confided to you about how it felt like her research had hit an insurmountable wall. And now, in the past few days, her progress bar is ticking up again, all by herself.\"},{\"type\":\"paragraph\",\"content\":[\"She really, \",{\"type\":\"emphasis-1\",\"content\":\"really\"},\" is a prodigy in a league of her own.\"]}]},\"2_princess_office.princess\":{\"id\":\"2_princess_office.princess\",\"options\":[{\"id\":\"@2_princess_office.newspaper_morning\",\"title\":\"\\\"Is that the news from this morning?\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"...Princess?\\\"\"},{\"type\":\"paragraph\",\"content\":\"As you lift your head, your gaze slowly moves towards the direction of the main desk where the princess would usually sit. What you see, however, is something completely beyond any of your expectations.\"},{\"type\":\"paragraph\",\"content\":\"The desk is far messier than usual with stacks of paper scattered across it. Several of them are even hanging on for dear life on the edge of the desk, and a few had already fallen to the floor.\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne herself doesn't look to be in a good condition either. In fact, you can very see various emotions mixed on her face; a mixture of sadness, fury, and disappointment. Her hand is gripping several papers tightly, and you can see sweat forming on her temples.\"},{\"type\":\"paragraph\",\"content\":\"As you look more closely, you recognize the paper she is holding. It's the same newspaper you just read a while ago.\"}]},\"1_library_room.chemistry\":{\"id\":\"1_library_room.chemistry\",\"onArrival\":[{\"$code\":\"Q['knowledge_alchemy'] = (Q['knowledge_alchemy'] || 0) + 3;\\nQ['knowledge_politics'] = (Q['knowledge_politics'] || 0) - 2;\\nQ['knowledge_law'] = (Q['knowledge_law'] || 0) - 2;\"}],\"options\":[{\"id\":\"@1_library_room.next_scene\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-1\",\"content\":\"Natural Alchemy of the World Ahead\"},\". Released around six years ago, the book theorizes about the future of natural alchemy in the world with the advent of more modern technology.\"]},{\"type\":\"paragraph\",\"content\":[\"Some parts of the books are infamously described as futuristic. \",{\"type\":\"emphasis-1\",\"content\":\"Too futuristic\"},\", in fact. So much so that several well-known alchemists at the time called the book \\\"\",{\"type\":\"emphasis-1\",\"content\":\"a complete work of fiction\"},\"\\\".\"]},{\"type\":\"paragraph\",\"content\":\"However, with major breakthroughs in various parts of the scientific community, the book has experienced a sort of revival in popularity.\"},{\"type\":\"paragraph\",\"content\":\"Without much hesitation, you grab the book from the shelf before heading towards the reading tables to read it.\"}]},\"deadlock_in_imperial_forum.new_day_1\":{\"id\":\"deadlock_in_imperial_forum.new_day_1\",\"newPage\":true,\"options\":[{\"id\":\"@deadlock_in_imperial_forum.new_day_2\",\"title\":\"And another day passes by...\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"first_summon_received.meet_1\":{\"id\":\"first_summon_received.meet_1\",\"subtitle\":\"From none other than the King of Nocturnia himself.\",\"newPage\":true,\"options\":[{\"id\":\"@first_summon_received.what_for\",\"title\":\"\\\"What for, if we may know?\\\"\"},{\"id\":\"@first_summon_received.alright\",\"title\":\"\\\"Alright, we understand.\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"It obviously does not take long for the news to spread far and wide. With the newspaper's extensive publication network, the ground-breaking headline is sure to take the attention of many people, inside and even outside the kingdom.\"},{\"type\":\"paragraph\",\"content\":\"And so it doesn't surprise you when one of the King's butlers soon approaches you and Princess Darlyne together to inform that the King of Nocturnia wants to summon both of you this afternoon.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Salutations, Your Highness, Sir Levon,\\\" the butler greets as he gives a deep bow. \\\"I am here to inform both of you that the King demands both of you to be in his presence as soon as possible.\\\"\"}]},\"game_over.eg_menu\":{\"id\":\"game_over.eg_menu\",\"options\":[{\"id\":\"#endings\"},{\"id\":\"@game_over.end_game\",\"title\":\"End game.\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"end_of_day_1.option_intro_1\":{\"id\":\"end_of_day_1.option_intro_1\",\"subtitle\":\"...and another one begins anew.\",\"newPage\":true,\"options\":[{\"id\":\"@end_of_day_1.the_news\",\"title\":\"The news.\"}],\"content\":[{\"type\":\"heading\",\"content\":\"Another early morning\"},{\"type\":\"paragraph\",\"content\":\"You wake up rather early in the morning once again as the sun is yet to be visible above the horizon.\"},{\"type\":\"paragraph\",\"content\":\"That makes it two-in-a-row, then. A new record, huh?\"},{\"type\":\"paragraph\",\"content\":\"Taking a glance at the clock, you notice that there is still quite some time left before you have to go to the Royal Palace. As you prepare for the day, your mind begins wandering about...\"}]},\"iggy_media_1_news\":{\"id\":\"iggy_media_1_news\",\"type\":\"scene\",\"title\":\"Ignis has fulfilled the request.\",\"subtitle\":\"The investigation has yielded some interesting results...\",\"viewIf\":{\"$code\":\"return ((((Q['day'] || 0) >= 2) && ((Q['iggy_timer_1'] || 0)===4)) && (!(((Q['iggy_1_act_done'] || 0)) !== 0)));\"},\"newPage\":true,\"tags\":[\"events\"],\"onArrival\":[{\"$code\":\"Q['iggy_1_act_done'] = 1;\\nQ['prosecution_strength'] = (Q['prosecution_strength'] || 0) - 2;\\n if (((((Q['prosecution_strength'] || 0) - (Q['defense_strength'] || 0)) > 2)) ) { Q['prosecution_strength'] = (Q['prosecution_strength'] || 0) - 1; } \\nQ['knowledge_politics'] = (Q['knowledge_politics'] || 0) + 2;\\nQ['relation_nobility'] = (Q['relation_nobility'] || 0) - 2;\\nQ['relation_darlyne'] = (Q['relation_darlyne'] || 0) + 2;\\nQ['darlyne_mood'] = (Q['darlyne_mood'] || 0) + 2;\"}],\"content\":{\"type\":\"heading\",\"content\":\"A successful media operation!\"}},\"ori_action_news\":{\"id\":\"ori_action_news\",\"type\":\"scene\",\"title\":\"Oriana has fulfilled the request.\",\"subtitle\":\"The sabotaging operation has been successful.\",\"viewIf\":{\"$code\":\"return ((((Q['ori_timer'] || 0)===5) && ((Q['day'] || 0) >= 3)) && ((Q['ori_act_done'] || 0)===0));\"},\"newPage\":true,\"tags\":[\"events\"],\"onArrival\":[{\"$code\":\"Q['ori_act_done'] = 1;\\nQ['prosecution_strength'] = (Q['prosecution_strength'] || 0) - 2;\\n if (((((Q['prosecution_strength'] || 0) - (Q['defense_strength'] || 0)) > 2)) ) { Q['prosecution_strength'] = (Q['prosecution_strength'] || 0) - 1; } \\n if (((((Q['prosecution_strength'] || 0) - (Q['defense_strength'] || 0)) > 4)) ) { Q['prosecution_strength'] = (Q['prosecution_strength'] || 0) - 1; } \\nQ['knowledge_politics'] = (Q['knowledge_politics'] || 0) + 3;\\nQ['relation_nobility'] = (Q['relation_nobility'] || 0) - 3;\\nQ['relation_darlyne'] = (Q['relation_darlyne'] || 0) + 2;\\nQ['darlyne_mood'] = (Q['darlyne_mood'] || 0) + 2;\"}],\"content\":{\"type\":\"heading\",\"content\":\"A successful sabotage!\"}},\"first_meeting_palace.first_meet_1\":{\"id\":\"first_meeting_palace.first_meet_1\",\"title\":\"Another day, another meeting\",\"subtitle\":\"Just like any other workday.\",\"newPage\":true,\"goTo\":[{\"id\":\"first_meeting_palace.option\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"You have finally arrived at the front gate of the palace. The guards, already familiar with your face by now, greet with a polite bow as they open the gates for you.\"},{\"type\":\"paragraph\",\"content\":\"You politely nod back in reply as you walk past the gate, before quickly heading towards the princess' office. That, or one of her many rooms, wherever she might be.\"},{\"type\":\"paragraph\",\"content\":\"...Yes, as weird as it sounds, aside from her own office, the princess also has several other miscellanous rooms inside the Royal Palace.\"},{\"type\":\"paragraph\",\"content\":[\"You remembered in one of your private meetings with the head of the Alchemy Center about it, he casually explained how there were incredibly wide rooms dedicated to her chemical activities. \",{\"type\":\"emphasis-1\",\"content\":\"\\\"Heh, that's just the kind of person the Princess is!\\\"\"},\" he would jest afterwards.\"]},{\"type\":\"paragraph\",\"content\":\"In any case, it's already time to get to work. Or research, whichever you want to deal with first. In the end, you decide to...\"}]},\"palace_day_2.hurry\":{\"id\":\"palace_day_2.hurry\",\"title\":\"You need to hurry up.\",\"subtitle\":\"Unlike any workday you've ever experienced before.\",\"newPage\":true,\"goTo\":[{\"id\":\"palace_day_2.option\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"You have finally arrived at the front gate of the palace. The guards, already familiar with your face by now, greet with a polite bow as they open the gates for you.\"},{\"type\":\"paragraph\",\"content\":\"However, you couldn't even manage to nod back in time as you run past the gate at full speed, heading straight towards... wherever the princess might be.\"},{\"type\":\"paragraph\",\"content\":\"Normally, it's already time to get to work. Or research, whichever you would want to deal with first. However, in such urgent situation, you decide to...\"}]},\"iggy_media_2_news\":{\"id\":\"iggy_media_2_news\",\"type\":\"scene\",\"title\":\"Ignis has fulfilled another request.\",\"subtitle\":\"The investigation has yielded some interesting results...\",\"viewIf\":{\"$code\":\"return ((((Q['day'] || 0) >= 3) && ((Q['iggy_timer_2'] || 0)===4)) && (!(((Q['iggy_2_act_done'] || 0)) !== 0)));\"},\"newPage\":true,\"tags\":[\"events\"],\"onArrival\":[{\"$code\":\"Q['iggy_2_act_done'] = 1;\\nQ['prosecution_strength'] = (Q['prosecution_strength'] || 0) - 2;\\n if (((((Q['prosecution_strength'] || 0) - (Q['defense_strength'] || 0)) > 2)) ) { Q['prosecution_strength'] = (Q['prosecution_strength'] || 0) - 1; } \\n if (((((Q['prosecution_strength'] || 0) - (Q['defense_strength'] || 0)) > 4)) ) { Q['prosecution_strength'] = (Q['prosecution_strength'] || 0) - 1; } \\nQ['knowledge_politics'] = (Q['knowledge_politics'] || 0) + 3;\\nQ['relation_nobility'] = (Q['relation_nobility'] || 0) - 3;\\nQ['relation_darlyne'] = (Q['relation_darlyne'] || 0) + 2;\\nQ['darlyne_mood'] = (Q['darlyne_mood'] || 0) + 2;\"}],\"content\":{\"type\":\"heading\",\"content\":\"A successful media operation!\"}},\"opening.intro_1\":{\"id\":\"opening.intro_1\",\"subtitle\":\"Time to wake up!\",\"newPage\":true,\"goTo\":[{\"id\":\"opening.option_intro\"}],\"content\":[{\"type\":\"heading\",\"content\":\"An early morning\"},{\"type\":\"paragraph\",\"content\":\"You wake up rather early in the morning as the sun is yet to be visible above the horizon.\"},{\"type\":\"paragraph\",\"content\":\"You feel pleasantly surprised. It has been quite a while since you've managed to wake up this early, after all.\"},{\"type\":\"paragraph\",\"content\":\"Taking a glance at the clock, you notice that there is still quite some time left before you have to go to the Royal Palace. As you prepare for the day, your mind begins wandering about...\"}]},\"unusedtest_trial_page.await\":{\"id\":\"unusedtest_trial_page.await\",\"subtitle\":\"The hour of judgement has finally arrived.\",\"options\":[{\"id\":\"@unusedtest_trial_page.what_nex\",\"title\":\"What next?\"}],\"content\":[{\"type\":\"heading\",\"content\":\"Darlyne found guilty!\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne is officially found guilty on all accusations! The trial is completely out of her hands now.\"},{\"type\":\"paragraph\",\"content\":\"What is to be done?\"}]},\"tribunal_announcement.option_intro_1\":{\"id\":\"tribunal_announcement.option_intro_1\",\"subtitle\":\"...and another one begins anew.\",\"newPage\":true,\"options\":[{\"id\":\"@tribunal_announcement.headline\",\"title\":\"And the headline reads...\"}],\"content\":[{\"type\":\"heading\",\"content\":\"An early morning\"},{\"type\":\"paragraph\",\"content\":\"You wake up quite early in the morning as the sun is yet to be visible above the horizon.\"},{\"type\":\"paragraph\",\"content\":\"You feel pleasantly surprised. It has been quite a while since you've managed to wake up this early, after all.\"},{\"type\":\"paragraph\",\"content\":\"However, that pleasant feeling does not last very long. Despite the fact that there is still quite some time left before you have to go to the Royal Palace, the uncomfortable hunch from yesterday's discussion still lingers.\"},{\"type\":\"paragraph\",\"content\":\"The morning newspaper arrives in front of the door right as you are about to head out. Curious, you decide to pick it up to read what the headline said.\"}]},\"king_public_statement.new_day\":{\"id\":\"king_public_statement.new_day\",\"subtitle\":\"And so have another set of tasks for the day.\",\"newPage\":true,\"options\":[{\"id\":\"@king_public_statement.what\",\"title\":\"\\\"...The King's speech?\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"After everything that has happened yesterday, the day seems to pass by in a blink, and before you realize it, you find yourself already working on another paper in the library this noon.\"},{\"type\":\"paragraph\",\"content\":\"You are not alone this time, however, as there just so happens to be a young lady sitting next to you, casually reading through what looks to be an artbook.\"},{\"type\":\"paragraph\",\"content\":\"Her name is Rea. She is known for her expertise as an artist, and the Royal Family had even commissioned multiple works of art from her previously.\"},{\"type\":\"paragraph\",\"content\":\"She maintains a good relationship with many people inside the palace, including Princess Darlyne herself, and you have also acquainted yourself with her quite a few times before.\"},{\"type\":\"paragraph\",\"content\":\"\\\"By the way, Levon, have you seen the King's speech earlier this morning?\\\" Rea says as she shifts her gaze from the artbook towards you. \\\"Fiercely defensive, apparently. Even tried to denounce those newspapers for spreading rumours before.\\\"\"}]},\"the_trial_begins.trial_begins\":{\"id\":\"the_trial_begins.trial_begins\",\"goTo\":[{\"id\":\"the_trial_begins.trial_begins_2\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"val_action_news\":{\"id\":\"val_action_news\",\"type\":\"scene\",\"title\":\"Valthea has fulfilled the request.\",\"subtitle\":\"Beyond expectations, truly nothing short of a mastery in manipulation.\",\"viewIf\":{\"$code\":\"return ((((Q['val_timer'] || 0)===5) && ((Q['day'] || 0) >= 3)) && ((Q['val_act_done'] || 0)===0));\"},\"newPage\":true,\"tags\":[\"events\"],\"onArrival\":[{\"$code\":\"Q['val_act_done'] = 1;\\nQ['prosecution_strength'] = (Q['prosecution_strength'] || 0) - 3;\\n if (((((Q['prosecution_strength'] || 0) - (Q['defense_strength'] || 0)) > 4)) ) { Q['prosecution_strength'] = (Q['prosecution_strength'] || 0) - 2; } \\n if (((((Q['prosecution_strength'] || 0) - (Q['defense_strength'] || 0)) > 2)) ) { Q['prosecution_strength'] = (Q['prosecution_strength'] || 0) - 2; } \\nQ['knowledge_politics'] = (Q['knowledge_politics'] || 0) + 5;\\nQ['relation_nobility'] = (Q['relation_nobility'] || 0) - 5;\\nQ['relation_darlyne'] = (Q['relation_darlyne'] || 0) + 5;\\nQ['darlyne_mood'] = (Q['darlyne_mood'] || 0) + 4;\\nQ['relation_judiciary'] = (Q['relation_judiciary'] || 0) + 3;\\nQ['relation_king'] = (Q['relation_king'] || 0) + 5;\"}],\"content\":{\"type\":\"heading\",\"content\":\"A masterpiece in manipulation\"}},\"tata_action_news\":{\"id\":\"tata_action_news\",\"type\":\"scene\",\"title\":\"Thalita has fulfilled the request.\",\"subtitle\":\"The sabotaging operation has been successful.\",\"viewIf\":{\"$code\":\"return ((((Q['tata_timer'] || 0)===5) && ((Q['day'] || 0) >= 3)) && ((Q['tata_act_done'] || 0)===0));\"},\"newPage\":true,\"tags\":[\"events\"],\"onArrival\":[{\"$code\":\"Q['tata_act_done'] = 1;\\nQ['prosecution_strength'] = (Q['prosecution_strength'] || 0) - 2;\\n if (((((Q['prosecution_strength'] || 0) - (Q['defense_strength'] || 0)) > 2)) ) { Q['prosecution_strength'] = (Q['prosecution_strength'] || 0) - 1; } \\n if (((((Q['prosecution_strength'] || 0) - (Q['defense_strength'] || 0)) > 4)) ) { Q['prosecution_strength'] = (Q['prosecution_strength'] || 0) - 1; } \\nQ['knowledge_politics'] = (Q['knowledge_politics'] || 0) + 3;\\nQ['relation_nobility'] = (Q['relation_nobility'] || 0) - 3;\\nQ['relation_darlyne'] = (Q['relation_darlyne'] || 0) + 2;\\nQ['darlyne_mood'] = (Q['darlyne_mood'] || 0) + 2;\"}],\"content\":{\"type\":\"heading\",\"content\":\"A successful sabotage!\"}},\"bts_var_calc.events_choice\":{\"id\":\"bts_var_calc.events_choice\",\"options\":[{\"id\":\"#events\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"bts_var_calc\":{\"id\":\"bts_var_calc\",\"type\":\"scene\",\"title\":\"Post Event\",\"onArrival\":[{\"$code\":\"// update timers\\n\\nQ.day = Math.floor(Q.action_timer/3);\\nQ.secret_action_timer = Math.max(0, Q.secret_action_timer - 1);\\n\\n// update for secret actions\\n\\nif(Q.informant_network >= 2){\\n    Q.monarch_available = 1;\\n}\\nif(Q.freelancer_network >= 2){\\n    Q.ori_tata_available = 1;\\n}\\n\\n// update timer delay for secret actions\\nif(Q.val_move && Q.val_timer < 6){\\n    Q.val_timer += 1;\\n}\\nif(Q.ori_move && Q.ori_timer < 6){\\n    Q.ori_timer += 1;\\n}\\nif(Q.tata_move && Q.tata_timer < 6){\\n    Q.tata_timer += 1;\\n}\\nif(Q.iggy_move_1 && Q.iggy_timer_1 < 5){\\n    Q.iggy_timer_1 += 1;\\n}\\n\\nif(Q.iggy_move_2 && Q.iggy_timer_2 < 5){\\n    Q.iggy_timer_2 += 1;\\n}\\n\\n// updates defense strength and strength difference once a day,\\n// but calculation can change if too overpowered or underpowered during playtesting\\n\\nif(Q.action_timer % 3 == 0){\\n    Q.defense_strength += Math.floor((0.5*Q.knowledge_politics + 0.3*Q.knowledge_law + 0.1*Q.knowledge_alchemy)/12 + (0.2*Q.relation_alchemy_center +  0.4*Q.relation_judiciary + 0.3*Q.relation_nobility + 0.3*Q.relation_king) / 10);\\n    Q.diff_strength = Q.defense_strength - Q.prosecution_strength;\\n}\\n\\n\\nif(Q.diff_strength < -6){\\n    Q.prosecution_strength -= 2;\\n    Q.defense_strength += 1;\\n} else if(Q.diff_strength < -2){\\n    Q.prosecution_strength -= 1;\\n    Q.defense_strength += 1;\\n} else if(Q.diff_strength < 0){\\n    Q.defense_strength -= 1;\\n} else if(Q.diff_strength > 2){\\n    Q.prosecution_strength += 1;\\n    Q.defense_strength -= 1;\\n} else {\\n    Q.prosecution_strength += 2;\\n    Q.defense_strength -= 1;\\n}\\n\\n// limits the max. and min. for relations\\nif(Q.relation_darlyne < 0){\\n    Q.relation_darlyne = 0;\\n}\\nif(Q.relation_king < 0){\\n    Q.relation_king = 0;\\n}\\nif(Q.relation_nobility < 0){\\n    Q.relation_nobility = 0;\\n}\\nif(Q.relation_judiciary < 0){\\n    Q.relation_judiciary = 0;\\n}\\nif(Q.relation_alchemy_center < 0){\\n    Q.relation_alchemy_center = 0;\\n}\\n\\n\\nQ.has_event = 0;\\n\\n// check if there are any cards in #event, and then go to main if not.\\n\\nvar scene = this.game.scenes['bts_var_calc.events_choice'];\\nvar choices = this._compileChoices(scene);\\nif (choices && choices[0].title != \\\"Continue...\\\") {\\n    Q.has_event = 1;\\n} else {\\n    Q.has_event = 0;\\n}\\n\\n// pre-load all of the event images\\nif (this.ui && this.ui.show_portraits) {\\n    for (var choice of choices) {\\n        var cc = this.game.scenes[choice.id];\\n        if (cc.faceImage) {\\n            var im = new Image();\\n            im.url = cc.faceImage;\\n        }\\n    }\\n}\\n\\n// check if bgm is playing (LOW-PRIORITY)\\n// const isPlaying = (dendryUI.audioQueue && dendryUI.audioQueue.length > 0);\\n// if (!isPlaying && Q.day < 3) {\\n//     dendryUI.currentAudioURL = \\\"music/greenwich_in_the_sky_marasy.mp3\\\";\\n// }\\n\\n\\nif (typeof window !== \\\"undefined\\\" && window.generateBar) {\\n}\"}],\"goTo\":[{\"id\":\"bts_var_calc.upcoming\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"credits.image\":{\"id\":\"credits.image\",\"goTo\":[{\"id\":\"credits.credits_menu\"}],\"content\":[{\"type\":\"heading\",\"content\":\"Images\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-1\",\"content\":\"WhickerButler map\"},\". WhickerStudio. https://www.whickeruniverse.com/portofolio/background-map.\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-1\",\"content\":\"[LORE VIDEO] STORY ABOUT THE PRINCESS OF NOCTURNIA\"},\". Darlyne Nightbloom [Whicker Butler]. https://www.youtube.com/watch?v=JyyYarc0z8I.\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-1\",\"content\":\"President Bill Clinton at a Bi-Partisan Congressional Meeting\"},\". https://commons.wikimedia.org/wiki/File:President_Bill_Clinton_at_a_Bi-Partisan_Congressional_Meeting_(89).jpg\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"Card actions:\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-1\",\"content\":\"Tailpiece with Books and Candle\"},\". https://www.oldbookillustrations.com/illustrations/book-candle-tailpiece/\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-1\",\"content\":\"Queen Anne in the House of Lords\"},\". https://en.wikipedia.org/wiki/File:Queen_Anne_in_the_House_of_Lords.jpg\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-1\",\"content\":\"Avocat parlant à sa cliente\"},\". https://www.nga.gov/artworks/7012-avocat-parlant-sa-cliente-lawyer-talking-his-client\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-1\",\"content\":\"Friends - Hanna Pauli\"},\". https://commons.wikimedia.org/wiki/File:Hanna_Pauli_-_Friends_-_Google_Art_Project.jpg\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-1\",\"content\":\"The Revolutionary Meeting\"},\". https://www.wikiart.org/en/ilya-repin/the-revolutionary-meeting-1883\"]},{\"type\":\"paragraph\",\"content\":\"(...)\"}]},\"library.lib_nocturnia\":{\"id\":\"library.lib_nocturnia\",\"goTo\":[{\"id\":\"library.library_menu\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"Kingdom of Nocturnia\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"The Kingdom of Nocturnia is a kingdom in the northeasternmost region of the continent, with its capital being the city of Nocturnia. The kingdom is ruled by the Nightbloom family since its founding a long time ago. The capital is surrounded by mountainous terrain, causing the weather to be consistently cool compared to other regions on the continent.\"}]},\"main_trial.secret\":{\"id\":\"main_trial.secret\",\"title\":\"Secret actions\",\"viewIf\":{\"$code\":\"return ((((Q['secret_action_timer'] || 0) <= 0) && ((((Q['monarch_available'] || 0)===1) || ((Q['ori_tata_available'] || 0)===1)))) && ((Q['secret_action_counts'] || 0) < 4));\"},\"cardImage\":\"img/secret_action_card.jpg\",\"isDeck\":true,\"options\":[{\"id\":\"#secret_actions\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"main_trial\":{\"id\":\"main_trial\",\"type\":\"scene\",\"title\":\"Next actions\",\"isHand\":true,\"maxCards\":2,\"options\":[{\"id\":\"@main_trial.actions\"},{\"id\":\"@main_trial.secret\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"root.start\":{\"id\":\"root.start\",\"newPage\":true,\"onArrival\":[{\"$code\":\"Q.started = 1;\\n\\n// Mood and relationships\\nQ.darlyne_mood = 3;\\nQ.relation_darlyne = 8;\\nQ.relation_king = 7;\\nQ.relation_nobility = 3;\\nQ.relation_judiciary = 5;\\nQ.relation_alchemy_center = 10;\\n\\n// Knowledge\\nQ.knowledge_law = 9;\\nQ.knowledge_alchemy = 15;\\nQ.knowledge_politics = 5;\\n\\n// Timer\\nQ.royal_tribunal_formed = 0;\\nQ.action_timer = 0;\\nQ.secret_action_timer = 0;\\nQ.secret_action_counts = 0;\\nQ.day = 0;\\n\\n// Trial strength\\nQ.diff_strength = 0;\\nQ.defense_strength = 0;\\nQ.prosecution_strength = 15;\\n\\n// Secret tactics\\nQ.dirty_play = 0;\\nQ.secret_available = 0;\\nQ.informant_network = 0;\\nQ.freelancer_network = 0;\\nQ.media_network = 0;\\n\\n// Availability of characters\\nQ.monarch_available = 0;\\nQ.ori_tata_available = 0;\\n\\n// Timer for secret actions\\nQ.val_timer = 0;\\nQ.ori_timer = 0;\\nQ.tata_timer = 0;\\nQ.iggy_timer_1 = 0;\\nQ.iggy_timer_2 = 0;\\n\\n// Limiting secret actions possible\\nQ.val_move = 0;\\nQ.ori_move = 0;\\nQ.tata_move = 0;\\nQ.iggy_move_1 = 0;\\nQ.iggy_move_2 = 0;\\nQ.iggy_1_act_done = 0;\\nQ.iggy_2_act_done = 0;\\n\\n// Result of the Trial\\nQ.verdict_win = 0;\\nQ.verdict_lose = 0;\\n\\n// Sentence received if guilty\\nQ.sentence_exile = 0;\\nQ.sentence_life = 0;\"}],\"goTo\":[{\"id\":\"opening\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"root\":{\"id\":\"root\",\"type\":\"scene\",\"title\":\"Root Scene\",\"newPage\":true,\"goTo\":[{\"id\":\"bts_var_calc\",\"predicate\":{\"$code\":\"return ((Q['started'] || 0)===1);\"}},{\"id\":\"root.menu_start\",\"predicate\":{\"$code\":\"return ((Q['started'] || 0)===0);\"}}],\"content\":[{\"type\":\"heading\",\"content\":[\"\",{\"type\":\"emphasis-1\",\"content\":\"Nocturnia: Trial of the Century\"},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-1\",\"content\":\"”With all these innovations, it is very difficult for an officer of the King... to know where his duty lies: the kingdom or its people.”\"},\"\"]},{\"type\":\"paragraph\",\"content\":[\"- \",{\"type\":\"emphasis-1\",\"content\":\"An unnamed officer before the Storming of the Bastille\"},\", 1789\"]},{\"type\":\"paragraph\",\"content\":\"This is a short story from another world. The story of a trial that shook the entire continent, from the very eyes of the one standing closest to it.\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-1\",\"content\":\"This mini-game is a fan-made work of fiction, and thus must not be mistaken for official work. See Disclaimer for further reading.\"},\"\"]}]},\"freelancer.signed_ori\":{\"id\":\"freelancer.signed_ori\",\"content\":[{\"type\":\"paragraph\",\"content\":\"The request in our contract for her to formulate and act upon a plan to sabotage the prosecution team is accepted without much fuss.\"},{\"type\":\"paragraph\",\"content\":\"Now, with that matter settled for the moment, we can refocus our attention back elsewhere. There are more urgent things to be done.\"}]},\"informant.signed_val\":{\"id\":\"informant.signed_val\",\"onArrival\":[{\"$code\":\"Q['val_move'] = 1;\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"The request in our collaboration for crucial pieces of information about the prosecution team is accepted without much fuss.\"},{\"type\":\"paragraph\",\"content\":\"Though there are several other conditions for the agreement to work, it's nothing too big to be handled anyway. In the end, we have safely secured her collaboration and resources into our fold.\"},{\"type\":\"paragraph\",\"content\":\"Now, with that matter settled for the moment, we can refocus our attention back elsewhere. There are more urgent things to be done.\"}]},\"knowledge.law_know\":{\"id\":\"knowledge.law_know\",\"subtitle\":\"Perhaps understanding the law could give an edge to our cause?\",\"chooseIf\":{\"$code\":\"return ((Q['knowledge_law'] || 0) <= 25);\"},\"unavailableSubtitle\":\"You have mastered this subject.\",\"onArrival\":[{\"$code\":\"Q['knowledge_law'] = (Q['knowledge_law'] || 0) + 3;\\nQ['knowledge_alchemy'] = (Q['knowledge_alchemy'] || 0) - 1;\\nQ['knowledge_politics'] = (Q['knowledge_politics'] || 0) - 1;\\nQ['relation_judiciary'] = (Q['relation_judiciary'] || 0) + 3;\\nQ['relation_nobility'] = (Q['relation_nobility'] || 0) - 1;\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"We have increased our knowledge about the laws and regulations in Nocturnia.\"},{\"type\":\"paragraph\",\"content\":\"The insight we've gained have also increased our understanding of the Royal Tribunal and the judiciary as a whole, thus improving our relationship.\"}]},\"relations.nobles\":{\"id\":\"relations.nobles\",\"onArrival\":[{\"$code\":\"Q['relation_nobility'] = (Q['relation_nobility'] || 0) + 2;\\nQ['relation_darlyne'] = (Q['relation_darlyne'] || 0) - 3;\\nQ['relation_king'] = (Q['relation_king'] || 0) - 1;\\nQ['relation_judiciary'] = (Q['relation_judiciary'] || 0) + 1;\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Our meeting with several members of the nobility have gone quite well, and we have built a closer relationship as a result.\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne, however, is not pleased by our eagerness to meet them. Perhaps we'll have to keep that in mind for our next meeting.\"}]},\"strategic_meeting.defense\":{\"id\":\"strategic_meeting.defense\",\"onArrival\":[{\"$code\":\"if(Q.diff_strength < 4){\\n        Q.defense_strength += (1 + Math.floor((Q.relation_nobility + Q.relation_judiciary)/8));\\n    }\\n    Q.prosecution_strength -= 1;\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"The best strategy we can adopt for now is to play it safe, and focus our preparation on blocking every single one of their potential attacks.\"},{\"type\":\"paragraph\",\"content\":\"They are the ones with a point to prove, after all, and it will be beneficial for us to not allow any opening for them for the time being.\"}]},\"secret_meeting.informant_2\":{\"id\":\"secret_meeting.informant_2\",\"viewIf\":{\"$code\":\"return (((Q['informant_network'] || 0) > 0) && ((Q['monarch_available'] || 0)===0));\"},\"onArrival\":[{\"$code\":\"Q['informant_network'] = (Q['informant_network'] || 0) + 1;\"}],\"content\":{\"content\":\"We are continuing to expand our network of information. Hopefully, it will simply be a matter of time before table-turning pieces of information hit our desk.\",\"type\":\"paragraph\"}},\"2_alchemy_chamber.if_brought_up\":{\"id\":\"2_alchemy_chamber.if_brought_up\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"2_alchemy_chamber\":{\"id\":\"2_alchemy_chamber\",\"type\":\"scene\",\"title\":\"Alchemy chamber scene #2\",\"newPage\":true,\"goTo\":[{\"id\":\"2_alchemy_chamber.if_brought_up\",\"predicate\":{\"$code\":\"return ((Q['brought_up'] || 0)===1);\"}},{\"id\":\"2_alchemy_chamber.not_brought\",\"predicate\":{\"$code\":\"return ((Q['brought_up'] || 0)===0);\"}}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"1_alchemy_chamber.why_flasks\":{\"id\":\"1_alchemy_chamber.why_flasks\",\"onArrival\":[{\"$code\":\"Q['knowledge_alchemy'] = (Q['knowledge_alchemy'] || 0) + 2;\\nQ['darlyne_mood'] = (Q['darlyne_mood'] || 0) + 2;\\nQ['relation_darlyne'] = (Q['relation_darlyne'] || 0) + 1;\"}],\"options\":[{\"id\":\"@1_alchemy_chamber.bring_up\",\"title\":\"Bring it up.\"},{\"id\":\"@1_alchemy_chamber.not_bring_up\",\"title\":\"Avoid the subject.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"By the way... what are all those scattered flasks for?\\\" you ask. Though the floor of the alchemy chamber has been witnesses to messier scenes, it's still not that often that you see so many of those in one place, after all.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Hehe... Remember those potions I'm currently researching?\\\" Princess Darlyne giggles as she answers cheerfully, \\\"I've managed to make a few of them work!\\\"\"},{\"type\":\"paragraph\",\"content\":\"You could hardly contain your surprise. \\\"Wow... You've managed to make the potion work?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yep!\\\" Princess Darlyne nods vigorously, although her expression subtly morphs into a more thoughtful one. \\\"Actually, it's not exactly final yet, but the colour of the potion is already turning into something I'm quite happy with. Hmm... Maybe I should...\\\"\"},{\"type\":\"paragraph\",\"content\":\"She trails off at the end, leaving you to wonder about what she was trying to say. However, you decide not to think too deeply into it. She would probably tell you what it is later anyway, at least if it turns out to be something important.\"},{\"type\":\"paragraph\",\"content\":\"The conversation eventually settles into a temporary lull as Princess Darlyne focuses her attention towards the various flasks scattered around the chamber. Privately, you wonder if should bring up the newspaper you read this morning.\"}]},\"2_library_room.search\":{\"id\":\"2_library_room.search\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"2_library_room\":{\"id\":\"2_library_room\",\"type\":\"scene\",\"title\":\"Library scene #2\",\"newPage\":true,\"options\":[{\"id\":\"@2_library_room.stay\",\"title\":\"Stay where you are.\"},{\"id\":\"@2_library_room.search\",\"title\":\"Look around the place.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"You rush into the library, hoping that the princess is somehow here as well. In fairness, she would usually already be here, reading some chemical books that you have never even heard of before.\"},{\"type\":\"paragraph\",\"content\":\"However, when you step your feet inside, you couldn't spot anyone else in this room. You don't know whether it would be better off looking for her actively or just wait for her to show up in this place. After briefly considering your options, you decide to...\"}]},\"discussion_with_princess.paper_talk\":{\"id\":\"discussion_with_princess.paper_talk\",\"options\":[{\"id\":\"@discussion_with_princess.rumour_true\",\"title\":\"So the rumours were true, after all...\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"So... these are some of the things I'd like to talk about, Your Highness.\\\" You hand over the paper that you've scribbled before to the Princess. \\\"I received many information from the conversations I had with some... Imperial Forum members, quite a while ago.\\\"\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne skims through the paper, her eyes moving back-and-forth as she processes the scribbles that you've written.\"},{\"type\":\"paragraph\",\"content\":\"...Now that you think about it, you should've organized your scribbling first before you hand the paper over to her.\"},{\"type\":\"paragraph\",\"content\":\"Luckily, it seems that she understands what you've written just fine. At least, judging from how she nods every now and then while reading through it.\"},{\"type\":\"paragraph\",\"content\":\"\\\"The plan as it stands is... to put me on a public trial, overseen by the Supreme Court themselves?\\\" Princess Darlyne mumbles as she picks up a different paper from the desk. She seems to say something under her breath afterwards, but you couldn't exactly hear what she is muttering about.\"},{\"type\":\"paragraph\",\"content\":\"It doesn't take long before she hands the paper back to you. She gives a smile as she picks up a few more papers. \\\"I've read through what you wrote, and there are quite a few interesting information in there. It also matches with some of the information I've received from... a good contact of mine.\\\"\"},{\"type\":\"paragraph\",\"content\":\"Though it's understandable that a royal princess would have access to special sources, you couldn't completely hide your surprise.\"},{\"type\":\"paragraph\",\"content\":\"\\\"You have your own sources that confirm this?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Pretty much, but it's nothing that you'd need to worry about for now,\\\" Princess Darlyne remarks with a confident voice. \\\"One thing that I should tell you however, is that it seems that the Supreme Court's involvement is pretty much confirmed at this point.\\\"\"}]},\"1_princess_office.why_right\":{\"id\":\"1_princess_office.why_right\",\"onArrival\":[{\"$code\":\"Q['relation_darlyne'] = (Q['relation_darlyne'] || 0) + 2;\"}],\"options\":[{\"id\":\"@1_princess_office.next_research\",\"title\":\"\\\"So, what is the next step?\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"...Why the right time, if I may ask?\\\" You ask, slightly confused at that.\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne's smile grows even wider. \\\"Well, I'm happy to say, another progress have been made this morning!\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh, wow, really?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yep. The color of the potion is finally turning into something I'm happy with!\\\" she responds with excitement as she picks up one of the flasks filled with a pink-colored liquid. \\\"Here, I spent a good part of this morning fixing this before you came in, and it's finally done!\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"That is... incredible.\\\"\"},{\"type\":\"paragraph\",\"content\":\"You don't really know what to say except for an amazed remark. It's hard for you to not be in awe by that. After all, it wasn't that long ago when she confided to you about how it felt like her research had hit an insurmountable wall. And now, in the past few days, her progress bar is ticking up again, all by herself.\"},{\"type\":\"paragraph\",\"content\":[\"She really, \",{\"type\":\"emphasis-1\",\"content\":\"really\"},\" is a prodigy in a league of her own.\"]}]},\"2_princess_office.newspaper_morning\":{\"id\":\"2_princess_office.newspaper_morning\",\"options\":[{\"id\":\"@2_princess_office.silent\",\"title\":\"...\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Princess, is that the news from this morning?\\\" You ask, not hiding the feeling of worry in your tone as you close the door before rushing to her desk.\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne lifts her head up to look right into your eyes. \\\"That is... correct,\\\" she replies with a slow nod. \\\"The headline of this morning's newspaper... I simply cannot believe this.\\\"\"},{\"type\":\"paragraph\",\"content\":\"You nod along. However, before you could open your mouth to reply, she immediately cuts you off.\"},{\"type\":\"paragraph\",\"content\":[\"\\\"This is libel of insane proportions; what the hell do they mean by \",{\"type\":\"emphasis-1\",\"content\":\"cases of infidelity\"},\"?!\\\" Princess Darlyne shouts, her voice laced with intense fury. \\\"How dare they- How dare those newspapers write such blatantly libelous headlines! All for their own gains!\\\"\"]}]},\"1_library_room.law\":{\"id\":\"1_library_room.law\",\"onArrival\":[{\"$code\":\"Q['knowledge_law'] = (Q['knowledge_law'] || 0) + 3;\\nQ['knowledge_alchemy'] = (Q['knowledge_alchemy'] || 0) - 2;\\nQ['knowledge_politics'] = (Q['knowledge_politics'] || 0) - 2;\"}],\"options\":[{\"id\":\"@1_library_room.next_scene\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-1\",\"content\":\"Under the Nightbloom: Evolution of Law and Order in Nocturnia\"},\". Released around 11 years ago, the book explains the history of Nocturnia's evolving laws and regulations, including many of its more... interestingly controversial laws.\"]},{\"type\":\"paragraph\",\"content\":\"You still remember one of your lecturers describing the story that around a decade ago, not long after the book was released, the Kingdom moved swiftly to ban it due to its rather fiery writing. The book was then rewritten in a more formal style as a compromise, and the ban was lifted afterwards.\"},{\"type\":\"paragraph\",\"content\":\"Without much hesitation, you grab the book from the shelf before heading towards the reading tables to read it.\"}]},\"deadlock_in_imperial_forum.new_day_2\":{\"id\":\"deadlock_in_imperial_forum.new_day_2\",\"newPage\":true,\"options\":[{\"id\":\"@deadlock_in_imperial_forum.new_day_3\",\"title\":\"And another day passes by...\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"first_summon_received.what_for\":{\"id\":\"first_summon_received.what_for\",\"options\":[{\"id\":\"@first_summon_received.alright\",\"title\":\"\\\"Alright, we understand.\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"What for, if we may know?\\\" you ask first. You could quite easily deduce the reason behind the King's summoning, but it's often better to just confirm it straight away.\"},{\"type\":\"paragraph\",\"content\":\"\\\"For...\\\" the butler hesitates for a bit, and his gaze briefly shifts away from you. \\\"...For issues that have risen up in relation to the Princess' activity recently.\\\"\"},{\"type\":\"paragraph\",\"content\":\"You lift your eyebrows slightly. That is a much vaguer answer than you had expected.\"},{\"type\":\"paragraph\",\"content\":\"\\\"I apologize if that is not clear,\\\" the butler immediately replies with a curt nod, as if he could see what you were thinking about before. \\\"But that is all that we could disclose for now.\\\"\"},{\"type\":\"paragraph\",\"content\":\"You briefly share a glance with Princess Darlyne. She looks composed enough from the outside, but for you who have seen her so many times, you could notice her slightly trembling hand and shaken expression.\"}]},\"game_over.darlyne_survive\":{\"id\":\"game_over.darlyne_survive\",\"title\":\"Princess Darlyne marches on in Nocturnia!\",\"tags\":[\"endings\"],\"goTo\":[{\"id\":\"game_over.eg_menu\"}],\"content\":{\"content\":\"(Princess Darlyne survives the trial and the verdict declares her not guilty.)\",\"type\":\"paragraph\"}},\"end_of_day_1.the_news\":{\"id\":\"end_of_day_1.the_news\",\"options\":[{\"id\":\"@end_of_day_1.next_up\",\"title\":\"And then...\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"...Yeah. The headline-grabbing news that appeared just yesterday morning.\"},{\"type\":\"paragraph\",\"content\":\"Truth be told, it's neither the most insane thing you've ever heard in your entire life, nor is it the most far-fetched. Actually, that is also partially why the news had been so shocking to read about at first.\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne did mention a bit about the chaos from a while back. Though it was quite some time before you got into this role, you've heard about it from the newspapers and some of your past lecturers talking about them.\"},{\"type\":\"paragraph\",\"content\":\"You don't exactly remember much, but there was a major controversy involving Princess Darlyne's alchemy research with several nobles who disapprove of some of her actions. The nobles eventually backed down after some sort of settlement, but even now you could still see some unresolved tensions between them.\"},{\"type\":\"paragraph\",\"content\":\"Deep inside, your biggest hope is for the news to die down soon, one way or another. There is no telling what would happen if whatever happens next explodes way beyond any of your control.\"}]},\"first_meeting_palace.option\":{\"id\":\"first_meeting_palace.option\",\"options\":[{\"id\":\"@first_meeting_palace.room_1\",\"title\":\"Head to the library first.\"},{\"id\":\"@first_meeting_palace.room_2\",\"title\":\"Head to the alchemy chamber first.\"},{\"id\":\"@first_meeting_palace.room_main\",\"title\":\"Head to the Princess' office first.\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"palace_day_2.option\":{\"id\":\"palace_day_2.option\",\"options\":[{\"id\":\"@palace_day_2.room_1\",\"title\":\"Head to the library.\"},{\"id\":\"@palace_day_2.room_2\",\"title\":\"Head to the alchemy chamber.\"},{\"id\":\"@palace_day_2.room_3\",\"title\":\"Head straight to the Princess' office.\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"opening.option_intro\":{\"id\":\"opening.option_intro\",\"options\":[{\"id\":\"@opening.myself\",\"title\":\"Yourself.\"},{\"id\":\"@opening.job\",\"title\":\"Your assigned tasks.\"},{\"id\":\"@opening.darlyne\",\"title\":\"The princess herself.\"},{\"id\":\"@opening.intro_news\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"unusedtest_trial_page.what_nex\":{\"id\":\"unusedtest_trial_page.what_nex\",\"onDisplay\":[{\"$code\":\"var cardEl = document.createElement('div');\\n    cardEl.className = \\\"face-figure2\\\";\\n\\n    var image = new Image();\\n    image.className = \\\"face-img\\\";\\n    image.src = \\\"img/wbmap.jpg\\\";\\n\\n    cardEl.appendChild(image);\\n    var contentDiv = document.querySelector(\\\"#page #mid_panel #content\\\");\\n    contentDiv.appendChild(cardEl);\"}],\"options\":[{\"id\":\"@unusedtest_trial_page.cont\",\"title\":\"contninue\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"// It works!\"},{\"type\":\"paragraph\",\"content\":\"What next, then?\"},{\"type\":\"paragraph\",\"content\":\"Test test one two threeeeeeeee\"}]},\"tribunal_announcement.headline\":{\"id\":\"tribunal_announcement.headline\",\"options\":[{\"id\":\"@tribunal_announcement.what\",\"title\":\"blablabla innit aye\"}],\"content\":[{\"type\":\"heading\",\"content\":\"The Supreme Court announces the formation of the Royal Tribunal!\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-1\",\"content\":\"And the scandal surrounding the Princess of Nocturnia is officially heading to a public trial!\"},\"\"]}]},\"king_public_statement.what\":{\"id\":\"king_public_statement.what\",\"options\":[{\"id\":\"@king_public_statement.kings_speech\",\"title\":\"On to the King's Speech.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"...The King's speech?\\\"\"},{\"type\":\"paragraph\",\"content\":\"You blink a few times as you repeat what she just mentioned.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yeah, it was all over the newspapers too, you know?\\\" Rea says with a very casual tone. As she pauses for another few seconds, she fully turns her sitting position towards you. \\\"...So I assume you haven't heard of it?\\\"\"},{\"type\":\"paragraph\",\"content\":\"Slightly embarrassed, you admit that you haven't heard much of it. Though you could recall that there were probably numerous chatters and gossips related to the speech, you didn't really understand what they were talking about at all.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Well, I suppose that makes sense.\\\" Rea lets out a sigh as she closed the artbook. For some reason, however, you could see a small smile forming on her lips. \\\"There's also the whole thing with the Imperial Forum too, so... do you want the full details?\\\"\"},{\"type\":\"paragraph\",\"content\":\"You nod once more, now eagerly prepared to listen.\"},{\"type\":\"paragraph\",\"content\":\"Rea takes a deep breath. \\\"Alright, here we go...\\\"\"}]},\"the_trial_begins.trial_begins_2\":{\"id\":\"the_trial_begins.trial_begins_2\",\"onArrival\":[{\"$code\":\"dendryUI.audioQueue = []\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"the_trial_begins\":{\"id\":\"the_trial_begins\",\"type\":\"scene\",\"title\":\"The Trial of the Century begins.\",\"subtitle\":\"The fate of Nocturnia rests in their hands.\",\"newPage\":true,\"onArrival\":[{\"$code\":\"Q.darlyne_mood -= 5;\\n\\nQ.defense_strength += Math.round((Q.knowledge_politics + Q.relation_darlyne)/3 + Q.relation_judiciary/5 + (Q.knowledge_law - Q.prosecution_strength)/2);\\nQ.diff_strength = Q.defense_strength - Q.prosecution_strength;\\n\\nconst contentElement = document.getElementById('content');\\ncontentElement.style.backgroundColor = '#98677e';\\n\\nconst header = document.querySelector('header');\\nheader.style.color = '#28c4e7';\\ncontentElement.style.color = '#FFFFFF';\\n\\nconst isMobile = window.innerWidth <= 768;\\nconst toolsElements = document.querySelectorAll('.tools');\\n\\ntoolsElements.forEach(tool => {\\n    if (isMobile) {\\n        tool.style.marginLeft = '';\\n        tool.style.padding = '0.6em';\\n        tool.style.width = '';\\n        tool.style.color = '#FFFFFF';\\n        tool.style.backgroundColor = '#98677e';\\n        tool.style.boxShadow = '4px 4px 16px #92608e';\\n    } else {\\n        tool.style.marginLeft = '-6em';\\n        tool.style.padding = '0.6em';\\n        tool.style.width = '20rem';\\n        tool.style.color = '#FFFFFF';\\n        tool.style.backgroundColor = '#98677e';\\n        tool.style.boxShadow = '4px 4px 16px #92608e';\\n    }\\n});\\n\\nconst mainTab = document.getElementById('main_tab');\\nmainTab.style.width = '100%';\\n\\ndocument.body.style.setProperty('--link-color', '#FFFFFF');\\ndocument.body.style.setProperty('--bg-color',  'rgb(246, 212, 228)');\\ndocument.body.style.setProperty('--choice-border-color',  'rgb(255, 161, 205)');\\n\\nconst qualitiesH1 = document.querySelector('#qualities h1');\\nif (qualitiesH1) {\\n    qualitiesH1.style.color = 'white';\\n}\\n\\nconst choiceElements = document.querySelectorAll('.choices');\\nchoiceElements.forEach(element => {\\n    element.style.color = 'rgb(224,224,224)';\\n});\\n\\nconst tabContainer = document.querySelector('.tab_container');\\nif (tabContainer) {\\n    tabContainer.style.backgroundColor = '#d59dbe';\\n}\\n\\nconst headerLinks = document.querySelectorAll('#header-links a');\\nheaderLinks.forEach(link => {\\n    link.style.color = 'black';\\n});\\n\\nconst statsLink = document.querySelector('#stats-link');\\nif (statsLink) {\\n    statsLink.style.display = 'inline-block';\\n}\\n\\nconst leftTools = document.querySelector('.tools.left');\\nif (leftTools) {\\n    leftTools.style.display = 'block';\\n}\\n\\nwindow.changeTab('status','main_tab');\\n\\ndendryUI.audioPlaylist = []\"}],\"onDisplay\":[{\"$code\":\"var cardEl = document.createElement('div');\\n    cardEl.className = \\\"face-figure2\\\";\\n\\n    var image = new Image();\\n    image.className = \\\"face-img\\\";\\n    image.src = \\\"img/dadar_3.png\\\";  // change this image at some point\\n\\n    cardEl.appendChild(image);\\n    var contentDiv = document.querySelector(\\\"#page #mid_panel #content\\\");\\n    contentDiv.appendChild(cardEl);\"}],\"goTo\":[{\"id\":\"the_trial_begins.trial_begins\"}],\"setBg\":\"img/empty_room.jpg\",\"audio\":\"music/greenwich_in_the_sky_marasy.mp3 loop\",\"content\":[{\"type\":\"heading\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"The Trial of The Century begins\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"The day has finally arrived.\"},{\"type\":\"paragraph\",\"content\":\"The fate of Princess Darlyne — and with that, the future of Nocturnia — is no longer entirely in her hands, but in the hands of the Royal Tribunal.\"},{\"type\":\"paragraph\",\"content\":\"Time slows. We enter the day-by-day struggle.\"}]},\"credits.music\":{\"id\":\"credits.music\",\"goTo\":[{\"id\":\"credits.credits_menu\"}],\"content\":[{\"type\":\"heading\",\"content\":\"Music\"},{\"type\":\"paragraph\",\"content\":\"Darlyne Nightbloom’s opening stream BGM.\"},{\"type\":\"paragraph\",\"content\":\"Valthea Nankila's opening stream BGM.\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-1\",\"content\":\"Greenwich in the Sky\"},\" - ZUN, performed by Marasy. https://www.youtube.com/watch?v=EKUuW7eznM8\"]},{\"type\":\"paragraph\",\"content\":\"(...)\"}]},\"library.lib_royal_fam\":{\"id\":\"library.lib_royal_fam\",\"goTo\":[{\"id\":\"library.library_menu\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"The Royal Family\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"The Royal Family is the current ruling family in the Kingdom of Nocturnia. They belong to the Nightbloom family which has ruled Nocturnia since the founding of this kingdom. Currently, the main family consists of the King, the Queen, and their sole daughter, Princess Darlyne.\"}]},\"freelancer.sylvaine\":{\"id\":\"freelancer.sylvaine\",\"subtitle\":\"A rowdy, energetic girl with a surprisingly powerful aerokinetic ability.\",\"chooseIf\":{\"$code\":\"return ((Q['tata_move'] || 0) < 1);\"},\"unavailableSubtitle\":\"She is only willing to accept our request once.\",\"onArrival\":[{\"$code\":\"Q['tata_move'] = 1;\"}],\"faceImage\":\"img/thalita_censored_image.jpg\",\"options\":[{\"id\":\"@freelancer.signed_tata\",\"title\":\"Thalita finally agrees to sign the contract with us.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Thalita Sylvaine, a rowdy, energetic girl with a surprisingly powerful aerokinetic ability. Though she looks quite young, she has gained quite a bit of notoriety around Mistral with her ability to control the wind in her favor.\"},{\"type\":\"paragraph\",\"content\":\"We have gotten along surprisingly well with her in our previous meetings, and she didn't seem to mind taking up our side. However, she has made it clear that she will accept our request only once, as she is wary of getting deeply involved in this trial.\"}]},\"informant.iggy_1\":{\"id\":\"informant.iggy_1\",\"viewIf\":{\"$code\":\"return ((Q['iggy_move_1'] || 0) < 1);\"},\"subtitle\":\"An enigmatic bartender with an elusive background\",\"faceImage\":\"img/ignis_censored_image.jpg\",\"options\":[{\"id\":\"@informant.signed_iggy_1\",\"title\":\"Ignis finally agrees to cooperate with us.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Ignis Grimoire, an enimagtic bartender with, as far as our research have gone, no officially-recorded background. He is rumoured to also be working as a butler, but no one seems to know where.\"},{\"type\":\"paragraph\",\"content\":\"(. . .)\"},{\"type\":\"paragraph\",\"content\":\"(. . .), and he didn't seem to mind working taking up our offer. However, he has made it clear that he would prefer to avoid getting too deeply involved in this trial.\"}]},\"knowledge.alchemy_know\":{\"id\":\"knowledge.alchemy_know\",\"subtitle\":\"Perhaps our mastery in alchemy could prove helpful in our defense?\",\"chooseIf\":{\"$code\":\"return ((Q['knowledge_alchemy'] || 0) <= 25);\"},\"unavailableSubtitle\":\"You have mastered this subject.\",\"onArrival\":[{\"$code\":\"Q['knowledge_alchemy'] = (Q['knowledge_alchemy'] || 0) + 3;\\nQ['knowledge_law'] = (Q['knowledge_law'] || 0) - 1;\\nQ['knowledge_politics'] = (Q['knowledge_politics'] || 0) - 1;\\nQ['relation_alchemy_center'] = (Q['relation_alchemy_center'] || 0) + 3;\\nQ['relation_darlyne'] = (Q['relation_darlyne'] || 0) + 2;\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"We have increased our knowledge and expertise in alchemy.\"},{\"type\":\"paragraph\",\"content\":\"The insight we've gained have also increased our understanding of the Alchemy Center, thus improving our relationship.\"}]},\"relations.courts\":{\"id\":\"relations.courts\",\"onArrival\":[{\"$code\":\"Q['knowledge_law'] = (Q['knowledge_law'] || 0) + 2;\\nQ['relation_judiciary'] = (Q['relation_judiciary'] || 0) + 2;\\nQ['relation_nobility'] = (Q['relation_nobility'] || 0) - 2;\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Our brief discussion with several members of the Royal Tribunal — including with the Chief Judge — have gone quite well, and we have built a closer relationship as a result.\"},{\"type\":\"paragraph\",\"content\":\"Various insights from the discussion has helped increase our expertise in law. However, some nobles are voicing their disapproval, as they see it as an attempt to interfere with the proceedings of the trial.\"}]},\"strategic_meeting.dirty\":{\"id\":\"strategic_meeting.dirty\",\"chooseIf\":{\"$code\":\"return (((Q['knowledge_politics'] || 0) > 10) && ((Q['relation_nobility'] || 0) > 13));\"},\"viewIf\":{\"$code\":\"return ((Q['day'] || 0) >= 2);\"},\"unavailableSubtitle\":{\"content\":[{\"type\":\"conditional\",\"content\":\"We don't have enough insight about their internal politics. \",\"predicate\":0},\" \",{\"type\":\"conditional\",\"content\":\"A closer relationship with the nobility could help with this.\",\"predicate\":1}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['knowledge_politics'] || 0) <= 10);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['relation_nobility'] || 0) <= 13);\"}}]},\"onArrival\":[{\"$code\":\"Q['dirty_play'] = 1;\"}],\"maxVisits\":1,\"content\":[{\"type\":\"paragraph\",\"content\":\"This trial will have immense ramification on the future of Nocturnia, especially with Princess Darlyne's status as the first individual in the line of succession.\"},{\"type\":\"paragraph\",\"content\":\"With various parts of the nobility backing the case against us, it is not inconceivable to believe that it would be in their interest for this trial to result in her defeat. Even worse, it wouldn't be out of the realm of possibility that they might aim for the princess to be banished from this kingdom.\"},{\"type\":\"paragraph\",\"content\":\"However, quite a few of them have also prepared to discreetly help us due to both our close relations and their enmity towards several nobles that are opposing us.\"},{\"type\":\"paragraph\",\"content\":\"This fight will not only take place inside the court, but also outside of it, and we will have to organize our strategy accordingly.\"}],\"countVisitsMax\":1},\"secret_meeting.freelancer_1\":{\"id\":\"secret_meeting.freelancer_1\",\"viewIf\":{\"$code\":\"return (((Q['freelancer_network'] || 0)===0) && ((Q['ori_tata_available'] || 0)===0));\"},\"onArrival\":[{\"$code\":\"Q['freelancer_network'] = (Q['freelancer_network'] || 0) + 1;\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"With Princess Darlyne's connections and ours, we can secure the ability to make important moves with unaffiliated freelancers against the prosecutors. We can never rule them out from using tricks behind the scenes too, after all.\"},{\"type\":\"paragraph\",\"content\":\"This is merely the start, however, and time will tell if putting our effort here can bear fruits in the near-future.\"}]},\"1_alchemy_chamber.bring_up\":{\"id\":\"1_alchemy_chamber.bring_up\",\"onArrival\":[{\"$code\":\"Q['brought_up'] = (Q['brought_up'] || 0) + 1;\"}],\"options\":[{\"id\":\"@1_alchemy_chamber.apologize\",\"title\":\"\\\"Your Highness, I apologize in advance, but...\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Inwardly, you take a deep breath.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Um... Your Highness?\\\"\"},{\"type\":\"paragraph\",\"content\":\"The princess, still counting the flasks scattered in front of her, immediately stops as she turns her gaze to you. \\\"Yes?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Have you heard any worrying news recently?\\\" You ask, trying to sound as nonchalant as possible. Inwardly, you hope that she has at least had an idea of the news so you don't have to be the first to tell her about it.\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne tilted her head. \\\"Worrying news? Hmm... Not really, at least not since the threats from that chaos a while back, but I don't think there has been much more to it.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"...\\\"\"},{\"type\":\"paragraph\",\"content\":\"You take another deep breath.\"},{\"type\":\"paragraph\",\"content\":\"As you open the bag to pull out the newspaper from this morning, you reply with a cautious voice.\"}]},\"discussion_with_princess.rumour_true\":{\"id\":\"discussion_with_princess.rumour_true\",\"options\":[{\"id\":\"@discussion_with_princess.what_strategy\",\"title\":\"Then... what is to be done?\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Indeed, the remarks from Princess Darlyne practically confirms the rumour that the Supreme Court will be in charge of the trial.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Now that the Supreme Court will be in charge of the trial, though,\\\" you ponder aloud, \\\"I wonder if there's any more information on how would the trial be conducted?\\\"\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne remains silent for a brief few seconds. \\\"Hmm... I did hear that there will be a special body formed for this trial. A <span class=\\\"tooltip-text\\\" title=\\\"A tribunal is a special court, specifically formed to officially focus on a specific legal topic or issue.\\\">tribunal</span> of sorts, I guess?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Do you think those people will announce it at the same time?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Perhaps, who knows?\\\" Princess Darlyne gives a nonchalant shrug. \\\"It's just political intrigue all the way at this point... I have as much knowledge as you have at this point.\\\"\"}]},\"1_princess_office.next_research\":{\"id\":\"1_princess_office.next_research\",\"onArrival\":[{\"$code\":\"Q['knowledge_alchemy'] = (Q['knowledge_alchemy'] || 0) + 2;\\nQ['darlyne_mood'] = (Q['darlyne_mood'] || 0) + 2;\"}],\"options\":[{\"id\":\"@1_princess_office.bring_up\",\"title\":\"Bring it up.\"},{\"id\":\"@1_princess_office.not_bring_up\",\"title\":\"Avoid the subject.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"So... what would be the next steps after that, Your Highness?\\\" you ask. Princess Darlyne's expression turns into a thoughtful one as she rests her chin on her hand.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Hmm... As far as I remember, it would just be a couple more steps, including the checking for different side effects, and then...\\\"\"},{\"type\":\"paragraph\",\"content\":\"She continues to list off various stuff as you try to memorize them in your head, hoping to keep them in mind to prepare for similar research cases in the future.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh, I just remembered, I think we're starting to run out of a few ingredients as well.\\\" She picks up one of her written notes on the desk. \\\"We'll definitely have to make another trip to the market next week or so.\\\"\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne hands the written note over to you. It's a note filled with a list of ingredients required for research that are either beginning to or already running out in the alchemy shelf. You decide to put it safely inside your pocket.\"},{\"type\":\"paragraph\",\"content\":\"If you remember correctly, it has been more or less three months since you went on a market trip to restock those research ingredients, so another trip is certainly overdue.\"},{\"type\":\"paragraph\",\"content\":\"The conversation eventually settles into a temporary lull as you see Princess Darlyne briefly focuses her attention onto the papers piling up on her desk. While the topic of the conversation hasn't changed yet, you wonder if you should bring up the newspaper you read this morning.\"}]},\"2_princess_office.silent\":{\"id\":\"2_princess_office.silent\",\"options\":[{\"id\":\"@2_princess_office.ready\",\"title\":\"And you will be ready to face the storm.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"You could only stand there with lips sealed, still too stunned to speak. You have never seen her as infuriated as this before.\"},{\"type\":\"paragraph\",\"content\":[\"\\\"I have suffered through this kind of thing before, and they want me to go through this \",{\"type\":\"emphasis-1\",\"content\":\"all over again\"},\"?\\\" Her tirade continues as she flails her arms. \\\"Even with only the slightest of my mistakes, they blast me off like that. Incredible! \",{\"type\":\"emphasis-1\",\"content\":\"Insane\"},\"! \",{\"type\":\"emphasis-2\",\"content\":\"Madness\"},\"!\\\"\"]},{\"type\":\"paragraph\",\"content\":\"She vigorously slams the table as she stands up from her seat. Tears are starting to gather on the corner of her eyes. It is almost inconceivable to think that the girl in front of you is the acclaimed alchemist, the Princess of Nocturnia herself. She looks so... vulnerable.\"},{\"type\":\"paragraph\",\"content\":\"\\\"I- Ugh...\\\" Princess Darlyne puts her hand over her mouth, and then her entire face. She slumps back on her chair, as though there is no more energy left in her. \\\"I'm sorry, Levon. This is just... awful.\\\"\"},{\"type\":\"paragraph\",\"content\":\"As you try to muster the most confident smile you can have, you give a wordless nod in reply.\"},{\"type\":\"paragraph\",\"content\":\"You know very well that your role as her personal assistant means that you will have to be the one to stand firmly by her side.\"},{\"type\":\"paragraph\",\"content\":\"And that means becoming a reliable shoulder for her to lean on; a trustworthy helper for her to confide in; a consistent ally for her to move forward.\"}]},\"1_library_room.relations\":{\"id\":\"1_library_room.relations\",\"onArrival\":[{\"$code\":\"Q['knowledge_politics'] = (Q['knowledge_politics'] || 0) + 3;\\nQ['knowledge_law'] = (Q['knowledge_law'] || 0) - 2;\\nQ['knowledge_alchemy'] = (Q['knowledge_alchemy'] || 0) - 2;\"}],\"options\":[{\"id\":\"@1_library_room.next_scene\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-1\",\"content\":\"Circles and Squares: Between the Nobility's Handshakes\"},\". Released around three years ago, the book delves into detail the various written and unwritten conventions of the nobility in different parts of the continent, including Nocturnia.\"]},{\"type\":\"paragraph\",\"content\":[\"Though the book does get a bit... \",{\"type\":\"emphasis-1\",\"content\":\"quirky\"},\", at times, it is still considered one of the most comprehensive books when talking about how politics is viewed and acted upon from within the nobility, and is thus often recommended for anyone trying to understand the balance of political power in this kingdom.\"]},{\"type\":\"paragraph\",\"content\":\"Without much hesitation, you grab the book from the shelf before heading towards the reading tables to read it.\"}]},\"deadlock_in_imperial_forum.new_day_3\":{\"id\":\"deadlock_in_imperial_forum.new_day_3\",\"subtitle\":\"(Is this guy too lazy to write things between the days or what?)\",\"newPage\":true,\"options\":[{\"id\":\"@deadlock_in_imperial_forum.new_day_4\",\"title\":\"And another day passes by...\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"first_summon_received.alright\":{\"id\":\"first_summon_received.alright\",\"options\":[{\"id\":\"@first_summon_received.time_to_go\",\"title\":\"It's time to go.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Alright, we understand.\\\" You share another glance with Princess Darlyne. \\\"Let us go, Your Highness.\\\"\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne gives an assured nod. Though you could see that she was anxious before, her eyes are now looking more determined than ever.\"},{\"type\":\"paragraph\",\"content\":\"As you bid a respectful nod to the butler, Princess Darlyne walks ahead, with you not far behind.\"}]},\"game_over.darlyne_exile\":{\"id\":\"game_over.darlyne_exile\",\"title\":\"Darlyne Nightbloom lives on in exile.\",\"tags\":[\"endings\"],\"goTo\":[{\"id\":\"game_over.eg_menu\"}],\"content\":{\"content\":\"(Princess Darlyne loses the trial and the verdict declares her guilty, and her sentence is exile from Nocturnia.)\",\"type\":\"paragraph\"}},\"end_of_day_1.next_up\":{\"id\":\"end_of_day_1.next_up\",\"options\":[{\"id\":\"@end_of_day_1.head_out\",\"title\":\"It's time to head out.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Before you realize it, the sun is already well and above the horizon, and the sky has already turned a rather bright blue.\"},{\"type\":\"paragraph\",\"content\":\"You quickly finish up your preparation before heading towards the door. Everything is nicely put into the bag, and you are now ready to go.\"}]},\"first_meeting_palace.room_1\":{\"id\":\"first_meeting_palace.room_1\",\"goTo\":[{\"id\":\"1_library_room\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"palace_day_2.room_1\":{\"id\":\"palace_day_2.room_1\",\"viewIf\":{\"$code\":\"return ((Q['brought_up'] || 0) == 1);\"},\"goTo\":[{\"id\":\"2_library_room\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"opening.myself\":{\"id\":\"opening.myself\",\"maxVisits\":1,\"onArrival\":[{\"$code\":\"Q['intro_myself_seen'] = 1;\"}],\"goTo\":[{\"id\":\"opening.option_intro\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"You are Levon, a youthful genius who was recently assigned to the prestigious post of Princess Darlyne's assistant.\"},{\"type\":\"paragraph\",\"content\":[\"You scored one of the highest final exam scores for both \",{\"type\":\"emphasis-1\",\"content\":\"Natural Alchemy\"},\" and \",{\"type\":\"emphasis-1\",\"content\":\"Law\"},\" in Nocturnia's history, and you hold a very high pride in becoming one of the few to achieve them.\"]}],\"countVisitsMax\":1},\"unusedtest_trial_page.cont\":{\"id\":\"unusedtest_trial_page.cont\",\"content\":{\"content\":\"contnitnure\",\"type\":\"paragraph\"}},\"unusedtest_trial_page\":{\"id\":\"unusedtest_trial_page\",\"type\":\"scene\",\"title\":\"The verdict\",\"newPage\":true,\"options\":[{\"id\":\"@unusedtest_trial_page.await\",\"title\":\"The verdict has been announced.\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"tribunal_announcement.what\":{\"id\":\"tribunal_announcement.what\",\"options\":[{\"id\":\"@tribunal_announcement.next_page\",\"title\":\"Well, perhaps it's time to finish some other tasks?\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"(A new day arrives, and ...)\"},{\"type\":\"paragraph\",\"content\":\"(...)\"},{\"type\":\"paragraph\",\"content\":\"(... You read through the newspaper's headline the newspaper's)\"}]},\"king_public_statement.kings_speech\":{\"id\":\"king_public_statement.kings_speech\",\"options\":[{\"id\":\"@king_public_statement.imperial_forum_response\",\"title\":\"The Imperial Forum's responses.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"The King's Speech\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"The King's speech from earlier this morning was said to revolve around the recent rumours swirling around Princess Darlyne.\"},{\"type\":\"paragraph\",\"content\":[\"The King started by addressing that the Royal Palace \",{\"type\":\"emphasis-1\",\"content\":\"is\"},\" indeed aware of recent reports regarding the Princess's alleged activity. However, His Majesty immediately followed it with statements defending his daughter's innocence. Furthermore, he even threatened that \",{\"type\":\"emphasis-1\",\"content\":\"\\\"... newspapers that continue to report such baseless rumours ... will be hammered for defamation by the rule of law\\\"\"},\".\"]},{\"type\":\"paragraph\",\"content\":\"It was a relatively short speech, lasting no more than ten or so minutes. Unsurprisingly, the reaction to it has been quite varied among the populace. Many agreed with the King's speech — though not a few agreed simply because it's a statement from the King — but many others also took problems with how dismissive the King was to what they view as a reported and legitimate concern.\"},{\"type\":\"paragraph\",\"content\":[\"What has certainly been \",{\"type\":\"emphasis-1\",\"content\":\"way\"},\" more interesting, however, is the reaction of the nobility, which perfectly segues into the next part, which is...\"]}]},\"credits.miscreads\":{\"id\":\"credits.miscreads\",\"goTo\":[{\"id\":\"credits.credits_menu\"}],\"content\":[{\"type\":\"heading\",\"content\":\"Miscellanous\"},{\"type\":\"paragraph\",\"content\":\"Sejm of the Polish-Lithuanian Commonwealth. https://en.wikipedia.org/wiki/Sejm_of_the_Polish%E2%80%93Lithuanian_Commonwealth\"},{\"type\":\"paragraph\",\"content\":\"Supreme Iraqi Criminal Tribunal. https://en.wikipedia.org/wiki/Supreme_Iraqi_Criminal_Tribunal\"},{\"type\":\"paragraph\",\"content\":\"Adversarial system. https://en.wikipedia.org/wiki/Adversarial_system\"},{\"type\":\"paragraph\",\"content\":\"(. . .)\"}]},\"credits\":{\"id\":\"credits\",\"type\":\"scene\",\"title\":\"Credits\",\"newPage\":true,\"goTo\":[{\"id\":\"credits.credits_menu\"}],\"content\":[{\"type\":\"heading\",\"content\":[\"\",{\"type\":\"emphasis-1\",\"content\":\"Nocturnia: Trial of the Century\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"Several works were used or referenced in the making of this game.\"}]},\"library.lib_darlyne\":{\"id\":\"library.lib_darlyne\",\"goTo\":[{\"id\":\"library.library_menu\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"Princess Darlyne Nightbloom\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne Nightbloom is the sole daughter of the current King and Queen of Nocturnia, and the heir-apparent to the Kingdom of Nocturnia.\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne is known to be a maniac of magic since her childhood, and has since become one of the most acclaimed alchemists in this Kingdom. However, little else is publicly known about her life.\"}]},\"freelancer.signed_tata\":{\"id\":\"freelancer.signed_tata\",\"content\":[{\"type\":\"paragraph\",\"content\":\"The request in our contract for her to formulate and act upon a plan to sabotage the prosecution team is accepted without much fuss.\"},{\"type\":\"paragraph\",\"content\":\"Now, with that matter settled for the moment, we can refocus our attention back elsewhere. There are more urgent things to be done.\"}]},\"freelancer\":{\"id\":\"freelancer\",\"type\":\"scene\",\"title\":\"Freelancers\",\"newPage\":true,\"chooseIf\":{\"$code\":\"return ((Q['ori_tata_available'] || 0)===1);\"},\"unavailableSubtitle\":\"We haven't built up enough relationship to trust them.\",\"maxVisits\":2,\"onArrival\":[{\"$code\":\"Q['secret_action_timer'] = (Q['secret_action_timer'] || 0) + 8;\"}],\"options\":[{\"id\":\"@freelancer.solstair\",\"title\":\"Oriana Solstair?\"},{\"id\":\"@freelancer.sylvaine\",\"title\":\"Thalita Sylvaine?\"}],\"content\":[{\"type\":\"heading\",\"content\":\"Freelancers\"},{\"type\":\"paragraph\",\"content\":\"With our concerted efforts over the past few days, we have successfully established a good relationship with two unaffiliated freelancers willing to join our cause!\"},{\"type\":\"paragraph\",\"content\":\"Though we can form a contract with them, we could only do so one at a time. So, the question as it stands is: who do we prefer to take up the job for now?\"}],\"countVisitsMax\":2},\"informant.signed_iggy_1\":{\"id\":\"informant.signed_iggy_1\",\"onArrival\":[{\"$code\":\"Q['iggy_move_1'] = 1;\"}],\"content\":{\"content\":\"(blablabla iggy agrees n whatnot)\",\"type\":\"paragraph\"}},\"knowledge.return\":{\"id\":\"knowledge.return\",\"content\":{\"content\":\"We can still work with what we have right now. Perhaps our efforts would be better placed elsewhere.\",\"type\":\"paragraph\"}},\"knowledge\":{\"id\":\"knowledge\",\"type\":\"scene\",\"title\":\"Building up knowledge\",\"newPage\":true,\"onArrival\":[{\"$code\":\"Q['action_timer'] = (Q['action_timer'] || 0) + 1;\"}],\"maxVisits\":48,\"isCard\":true,\"cardImage\":\"img/knowledge_card.jpg\",\"frequency\":1000,\"tags\":[\"card_actions\"],\"options\":[{\"id\":\"@knowledge.politics_know\",\"title\":\"The inner politics of Nocturnia's nobility.\"},{\"id\":\"@knowledge.law_know\",\"title\":\"The laws and regulations in Nocturnia.\"},{\"id\":\"@knowledge.alchemy_know\",\"title\":\"The knowledge of alchemy.\"},{\"id\":\"@knowledge.return\",\"title\":\"We can work with what we have for now.\"}],\"content\":[{\"type\":\"heading\",\"content\":\"Building up knowledge\"},{\"type\":\"paragraph\",\"content\":\"Though our defense counsel consists of experienced lawyers, it is still important for us to improve our knowledge in different subjects whenever it is possible to do so.\"},{\"type\":\"paragraph\",\"content\":\"In furthering our knowledge, we will have a greater insight in our ability to choose and organize our strategy in the courtroom accordingly. Perhaps we could even further our relations with different parties through our improved knowledge as a result.\"},{\"type\":\"paragraph\",\"content\":\"Which subject should we focus our efforts on for now?\"}],\"countVisitsMax\":48},\"relations.alchemy\":{\"id\":\"relations.alchemy\",\"onArrival\":[{\"$code\":\"Q['knowledge_alchemy'] = (Q['knowledge_alchemy'] || 0) + 2;\\nQ['relation_darlyne'] = (Q['relation_darlyne'] || 0) + 2;\\nQ['relation_alchemy_center'] = (Q['relation_alchemy_center'] || 0) + 2;\\nQ['darlyne_mood'] = (Q['darlyne_mood'] || 0) + 2;\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Our visit to the Alchemy Center have gone quite well, and we have built a closer relationship with the institution as a result.\"},{\"type\":\"paragraph\",\"content\":\"Various insights from the visit has helped increase our expertise in alchemy. Princess Darlyne is delighted at our meeting, and she looks forward to another visit as soon as possible.\"}]},\"strategic_meeting.return\":{\"id\":\"strategic_meeting.return\",\"onArrival\":[{\"$code\":\"Q['darlyne_mood'] = (Q['darlyne_mood'] || 0) + 2;\\nQ['relation_darlyne'] = (Q['relation_darlyne'] || 0) + 1;\"}],\"content\":{\"content\":\"We can still work with what we have for now. Perhaps our preparation efforts would be better placed elsewhere.\",\"type\":\"paragraph\"}},\"strategic_meeting\":{\"id\":\"strategic_meeting\",\"type\":\"scene\",\"title\":\"Strategic Meeting\",\"newPage\":true,\"onArrival\":[{\"$code\":\"Q['action_timer'] = (Q['action_timer'] || 0) + 1;\"}],\"maxVisits\":48,\"isCard\":true,\"cardImage\":\"img/strategic_meeting_card.jpg\",\"frequency\":500,\"tags\":[\"card_actions\"],\"options\":[{\"id\":\"@strategic_meeting.offense\",\"title\":\"Go on the offense against the prosecutors' team.\"},{\"id\":\"@strategic_meeting.defense\",\"title\":\"Play it safe, and focus on blocking their attacks.\"},{\"id\":\"@strategic_meeting.dirty\",\"title\":\"Some dirty tricks behind the scenes wouldn't hurt... right?\"},{\"id\":\"@strategic_meeting.return\",\"title\":\"We can work with what we have for now.\"}],\"content\":[{\"type\":\"heading\",\"content\":\"Strategic meeting\"},{\"type\":\"paragraph\",\"content\":\"Before the upcoming session of the trial begins, we will have to figure out what our strategy would look like against the prosecution team.\"},{\"type\":\"paragraph\",\"content\":\"What actions should we prioritize in our strategy?\"}],\"countVisitsMax\":48},\"secret_meeting.freelancer_2\":{\"id\":\"secret_meeting.freelancer_2\",\"viewIf\":{\"$code\":\"return (((Q['freelancer_network'] || 0) > 0) && ((Q['ori_tata_available'] || 0)===0));\"},\"onArrival\":[{\"$code\":\"Q['freelancer_network'] = (Q['freelancer_network'] || 0) + 1;\"}],\"content\":{\"content\":\"We are negotiating for a mutual agreement with several unaffiliated freelancers, enabling us to bring them over to our cause. Certainly, it will never hurt to be prepared against any potential tricks from the other side.\",\"type\":\"paragraph\"}},\"secret_meeting\":{\"id\":\"secret_meeting\",\"type\":\"scene\",\"title\":\"Secret meeting\",\"newPage\":true,\"viewIf\":{\"$code\":\"return ((((Q['dirty_play'] || 0)===1) && ((((Q['monarch_available'] || 0)===0) || ((Q['ori_tata_available'] || 0)===0)))) && ((Q['secret_action_counts'] || 0) < 4));\"},\"onArrival\":[{\"$code\":\"Q['action_timer'] = (Q['action_timer'] || 0) + 1;\"}],\"maxVisits\":4,\"isCard\":true,\"cardImage\":\"img/secret_meeting_card.jpg\",\"frequency\":250,\"tags\":[\"card_actions\"],\"options\":[{\"id\":\"@secret_meeting.informant_1\",\"title\":\"Gather some dirts through our network of informants.\"},{\"id\":\"@secret_meeting.informant_2\",\"title\":\"Gather some dirts through our network of informants.\"},{\"id\":\"@secret_meeting.freelancer_1\",\"title\":\"\\\"Freelancers\\\" could be useful for a trick or two.\"},{\"id\":\"@secret_meeting.freelancer_2\",\"title\":\"\\\"Freelancers\\\" could be useful for a trick or two.\"}],\"content\":[{\"type\":\"heading\",\"content\":\"Secret Meeting\"},{\"type\":\"paragraph\",\"content\":\"Within our circle, it has become a consensus that this fight will eventually be decided not just inside the court, but outside of it too. The nobles in Nocturnia, especially those who are against Princess Darlyne, will undoubtedly use everything at their disposal for a chance to oust her from the line of succession and banish her elsewhere.\"},{\"type\":\"paragraph\",\"content\":\"This might not be the most perfectly legal way of approaching things, but it will be important to consider some potential tricks behind our sleeves to our advantage.\"},{\"type\":\"paragraph\",\"content\":\"With our connections, we have managed to build contacts earlier with some... intriguing outsiders. So, the question that remains is: which tactic should we consider utilizing for now?\"}],\"countVisitsMax\":4},\"1_alchemy_chamber.apologize\":{\"id\":\"1_alchemy_chamber.apologize\",\"options\":[{\"id\":\"@1_alchemy_chamber.its_fine\",\"title\":\"\\\"Don't worry, I will always help you.\\\"\"},{\"id\":\"@1_alchemy_chamber.hope\",\"title\":\"\\\"I hope nothing big happens.\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Your Highness, I apologize in advance, but... you are being accused in the news this morning of being complicit in several cases of infidelity.\\\"\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne's eyes immediately goes wide.\"},{\"type\":\"paragraph\",\"content\":\"Her gaze slowly trails from your eyes down to the newspaper as you hand it over to her. \\\"I saw it in this newspaper's headline. I hope this is nothing but some sensationalist nonsense, but...\\\"\"},{\"type\":\"paragraph\",\"content\":\"Her eyes carefully read through the article, furiously flipping the pages with an intensity you have almost never seen before.\"},{\"type\":\"paragraph\",\"content\":\"After what feels like an eternity of her flipping back and forth between pages with her eyes scanning up and down over and over, she finally hands the newspaper back to you.\"},{\"type\":\"paragraph\",\"content\":\"Her eyes still hold the same wide-eyed, horrified expression from before.\"},{\"type\":\"paragraph\",\"content\":\"Actually, it's even worse now.\"},{\"type\":\"paragraph\",\"content\":\"She almost seems to be on the verge of tears. You don't exactly know what to do in this situation, and you're now unsure whether it was truly the right choice to tell her now.\"},{\"type\":\"paragraph\",\"content\":[\"\\\"That... That's not true, is it?\\\" She asks, almost in a pleading fashion. \\\"I'm not one to commit infidelity. \",{\"type\":\"emphasis-1\",\"content\":\"Never.\"},\"\\\"\"]},{\"type\":\"paragraph\",\"content\":\"\\\"I understand, Your Highness-\\\"\"},{\"type\":\"paragraph\",\"content\":[\"\\\"\",{\"type\":\"emphasis-2\",\"content\":\"Never!\"},\"\\\" Princess Darlyne shouts in visible fury as she aggressively stands up from her seat. She looks completely immersed in her rage.\"]},{\"type\":\"paragraph\",\"content\":\"You decide to remain silent in your seat for now, waiting for her to come back to her senses before anything else.\"},{\"type\":\"paragraph\",\"content\":[\"As much as you want to assure her by saying \",{\"type\":\"emphasis-1\",\"content\":\"No, it's nothing but an empty rumour\"},\", you know that this matter is completely out of your hands.\"]},{\"type\":\"paragraph\",\"content\":\"The next few minutes is spent in near-silence as Princess Darlyne tries to calm herself down with several consecutive deep breaths. You patiently wait without saying a word until her anger subsides.\"},{\"type\":\"paragraph\",\"content\":\"\\\"...I'm sorry you had to witness that,\\\" Princess Darlyne apologizes with a raspy voice as she wipes her watery eyes. \\\"I thought the chaos from last time has subsided, but...\\\"\"}]},\"discussion_with_princess.what_strategy\":{\"id\":\"discussion_with_princess.what_strategy\",\"options\":[{\"id\":\"@discussion_with_princess.next_page\",\"title\":\"Well, perhaps it's time to finish some other tasks?\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Then... what is to be done?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Who knows? I don't even know what do at this point,\\\" she answers as she ruffles through her hair in exasperation. The frustration in her voice could hardly be any clearer than that.\"},{\"type\":\"paragraph\",\"content\":\"The room falls silent as Princess Darlyne rests her forehead on her palmed fist. Both of you have no idea what to say, and the silence feels more like a comfortable enough alternative for now.\"},{\"type\":\"paragraph\",\"content\":\"\\\"I... I think we should probably have some early preparation, but what...?\\\" you try to suggest, but your shaky voice trail off at the end. The uncertainty is very much palpable at this point.\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne suddenly stands up from her desk. \\\"Perhaps we can continue this tomorrow. My mind is getting foggy, and I don't think it'll do us any good to continue like this.\\\"\"},{\"type\":\"paragraph\",\"content\":\"Absentmindedly, you nod along, and before you realize it, Princess Darlyne is already gone from the room.\"},{\"type\":\"paragraph\",\"content\":\"As if still on autopilot, you tidy up the scattered papers and books on the desk before heading out to lock the door.\"}]},\"1_princess_office.bring_up\":{\"id\":\"1_princess_office.bring_up\",\"onArrival\":[{\"$code\":\"Q['brought_up'] = (Q['brought_up'] || 0) + 1;\"}],\"options\":[{\"id\":\"@1_princess_office.apologize\",\"title\":\"\\\"Your Highness, I apologize in advance, but...\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Inwardly, you take a deep breath.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Um... Your Highness?\\\"\"},{\"type\":\"paragraph\",\"content\":\"The princess, still visibly pondering over some of the papers in front of her, immediately stops as she turns her gaze to you. \\\"Yes?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Have you heard any worrying news recently?\\\" You ask, trying to sound as nonchalant as possible. Inwardly, you hope that she has at least had an idea of the news so you don't have to be the first to tell her about it.\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne tilted her head. \\\"Worrying news? Hmm... Not really, at least not since the threats from that chaos a while back, but I don't think there has been much more to it.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"...\\\"\"},{\"type\":\"paragraph\",\"content\":\"You take another deep breath.\"},{\"type\":\"paragraph\",\"content\":\"As you open the bag to pull out the newspaper from this morning, you reply with a cautious voice.\"}]},\"2_princess_office.ready\":{\"id\":\"2_princess_office.ready\",\"options\":[{\"id\":\"@2_princess_office.next_page\",\"title\":\"It's time to go.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Whether you are prepared or not, you will have to be ready to face the impending storm.\"},{\"type\":\"paragraph\",\"content\":\"\\\"I will always have faith in you, Your Highness,\\\" you reply with an assuring tone, \\\"no matter what is about to come.\\\"\"}]},\"1_library_room.next_scene\":{\"id\":\"1_library_room.next_scene\",\"title\":\"And then...\",\"options\":[{\"id\":\"@1_library_room.next_scene_2\",\"title\":\"\\\"Princess... Darlyne?\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"You don't know how long it has been since you started reading when, out of nowhere, you suddenly feel a hand rests itself on your left shoulder.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Wha-!\\\" You hold back your surprised scream as you turn your head to the left.\"},{\"type\":\"paragraph\",\"content\":\"It turns out, the person resting its hand on you is none other than Princess Darlyne herself.\"}]},\"deadlock_in_imperial_forum.new_day_4\":{\"id\":\"deadlock_in_imperial_forum.new_day_4\",\"newPage\":true,\"options\":[{\"id\":\"@deadlock_in_imperial_forum.result_session\",\"title\":\"First, the result of the Emergency Session.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Several days have passed since the emergency session of the Imperial Forum. Though the newspapers' fiery reports are starting to quieten down, you could feel that it is closer to the calm before the storm instead of any sort of genuine peace. It almost feels like those hawkish headlines are sitting at the back, waiting patiently for their turns to appear.\"},{\"type\":\"paragraph\",\"content\":\"Well, not that there are much things you can do anyway. You are simply a working assistant for the Princess, after all, and your scope of work is relatively quite limited to do anything significant.\"},{\"type\":\"paragraph\",\"content\":\"You have, however, been weighing your options as you sit alone inside the Palace's library, preparing for various potential developments of the situation.\"},{\"type\":\"paragraph\",\"content\":\"Those thinkings are reinforced even more with some of your recent conversations with a representative from the Imperial Forum. There are many key information that you have gained from them.\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-1\",\"content\":\"(This is just a lengthily summarized chronology as to why the trial is set to happen. You don't have to read through this if you wish; these are simply for the purpose of understanding the plot.)\"},\"\"]}]},\"first_summon_received.time_to_go\":{\"id\":\"first_summon_received.time_to_go\",\"newPage\":true,\"options\":[{\"id\":\"@first_summon_received.king_meet\",\"title\":\"The King of Nocturnia is inside.\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"game_over.darlyne_life_prison\":{\"id\":\"game_over.darlyne_life_prison\",\"title\":\"Darlyne Nightbloom is imprisoned for life.\",\"tags\":[\"endings\"],\"goTo\":[{\"id\":\"game_over.eg_menu\"}],\"content\":{\"content\":\"(Princess Darlyne loses the trial and the verdict declares her guilty, and her sentence is life imprisonment)\",\"type\":\"paragraph\"}},\"end_of_day_1.head_out\":{\"id\":\"end_of_day_1.head_out\",\"newPage\":true,\"options\":[{\"id\":\"@end_of_day_1.newspaper_1\",\"title\":\"The morning newspaper has arrived!\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"first_meeting_palace.room_2\":{\"id\":\"first_meeting_palace.room_2\",\"goTo\":[{\"id\":\"1_alchemy_chamber\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"palace_day_2.room_2\":{\"id\":\"palace_day_2.room_2\",\"goTo\":[{\"id\":\"2_alchemy_chamber\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"opening.job\":{\"id\":\"opening.job\",\"maxVisits\":1,\"onArrival\":[{\"$code\":\"Q['intro_job_seen'] = 1;\"}],\"goTo\":[{\"id\":\"opening.option_intro\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Your job nowadays is to help Princess Darlyne across various things, though it would mostly either revolve around her chemical research or... really, anything that piqued her interests.\"},{\"type\":\"paragraph\",\"content\":\"As tiring as it might be sometimes, you can't help but be drawn into this job a little more with each passing day.\"}],\"countVisitsMax\":1},\"tribunal_announcement.next_page\":{\"id\":\"tribunal_announcement.next_page\",\"subtitle\":\"Or just go have some rest, whatever, it's up to you.\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"tribunal_announcement\":{\"id\":\"tribunal_announcement\",\"type\":\"scene\",\"title\":\"The Supreme Court announces the formation of the Royal Tribunal\",\"newPage\":true,\"options\":[{\"id\":\"@tribunal_announcement.option_intro_1\",\"title\":\"Another day comes to an end...\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"king_public_statement.imperial_forum_response\":{\"id\":\"king_public_statement.imperial_forum_response\",\"options\":[{\"id\":\"@king_public_statement.what_now\",\"title\":\"So... what happens next?\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"The Imperial Forum's response\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"Not long after the King's speech ended, several nobles immediately rushed into the Imperial Forum to call for an emergency session this noon. The agenda, of course, is to discuss the appropriate response — or perhaps more accurately, reaction — to that speech.\"},{\"type\":\"paragraph\",\"content\":[\"The Imperial Forum, simply put, is split between three camps: those publicly opposing the speech, those supportive of the speech, and those preferring to defer making their decisions for the time being. The debate had been a heated one so far. It is \",{\"type\":\"emphasis-1\",\"content\":\"still\"},\" ongoing, in fact.\"]},{\"type\":\"paragraph\",\"content\":[\"The opposing nobles know that they wouldn't stand a chance if they were standing alone against \",{\"type\":\"emphasis-1\",\"content\":\"the literal King himself\"},\" in any potential future lawsuits, so of course they would much rather deal with this early while it's still hot off the press. They \",{\"type\":\"emphasis-1\",\"content\":\"have\"},\" to do something against this — some of the victims from the allegations are under the protection of these nobles, after all.\"]},{\"type\":\"paragraph\",\"content\":\"To add fuel to the fire, however, the King was also reportedly on his way to attend the emergency session. His Majesty is probably already inside, watching through the chaos as we are talking in here right now.\"}]},\"library.lib_nobility\":{\"id\":\"library.lib_nobility\",\"goTo\":[{\"id\":\"library.library_menu\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"Nobility\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"The nobility in Nocturnia consists of various families appointed by and ranked below the Royal Family and above the common people. Many of these families have become parts of the nobility since shortly after the founding of Nocturnia, allowing them to wield significant influence in Nocturnian day-to-day politics and judiciary.\"},{\"type\":\"paragraph\",\"content\":\"Their loyalty towards the Royal Family have subtly been divided recently after a row involving Princess Darlyne’s activity as an alchemist in the kingdom. Though the altercation eventually subsided with relative ease, tensions remain between some of them, and there is no telling when or where their contradiction could truly come to a head.\"}]},\"informant.iggy_2\":{\"id\":\"informant.iggy_2\",\"viewIf\":{\"$code\":\"return ((Q['iggy_move_1'] || 0) > 0);\"},\"chooseIf\":{\"$code\":\"return ((Q['iggy_move_2'] || 0) < 1);\"},\"subtitle\":\"An enigmatic bartender with an elusive background\",\"unavailableSubtitle\":\"He refuses any further involvement in this trial.\",\"onArrival\":[{\"$code\":\"Q['iggy_move_2'] = 1;\"}],\"faceImage\":\"img/ignis_censored_image.jpg\",\"content\":{\"content\":\"(blablabla ignis continues his works n whatnot)\",\"type\":\"paragraph\"}},\"informant\":{\"id\":\"informant\",\"type\":\"scene\",\"title\":\"Information network\",\"newPage\":true,\"chooseIf\":{\"$code\":\"return ((Q['monarch_available'] || 0)===1);\"},\"unavailableSubtitle\":\"We haven't gathered enough information via our network.\",\"maxVisits\":3,\"onArrival\":[{\"$code\":\"Q['secret_action_timer'] = (Q['secret_action_timer'] || 0) + 8;\"}],\"options\":[{\"id\":\"@informant.iggy_1\",\"title\":\"Ignis Grimoire.\"},{\"id\":\"@informant.iggy_2\",\"title\":\"Ignis Grimoire.\"},{\"id\":\"@informant.valthea\",\"title\":\"Valthea Nankila.\"}],\"content\":[{\"type\":\"heading\",\"content\":\"Information Network\"},{\"type\":\"paragraph\",\"content\":\"With our concerted efforts over the past few days, we have successfully established a relatively wide range of connections with numerous contacts. However, to avoid any unreliable sources that could ruin our quality of information, we have to vet through our contacts carefully before we could look for an agreement with them.\"},{\"type\":\"paragraph\",\"content\":\"In the aftermath, we have decided to go with some of what could very well be the most significant and well-known names on the list.\"},{\"type\":\"paragraph\",\"content\":\"The informant we will be working with is...\"}],\"countVisitsMax\":3},\"relations.return\":{\"id\":\"relations.return\",\"onArrival\":[{\"$code\":\"Q['darlyne_mood'] = (Q['darlyne_mood'] || 0) + 2;\\nQ['relation_darlyne'] = (Q['relation_darlyne'] || 0) + 1;\"}],\"content\":{\"type\":\"paragraph\",\"content\":[\"Whether it is because we \",{\"type\":\"emphasis-1\",\"content\":\"cannot\"},\" or \",{\"type\":\"emphasis-1\",\"content\":\"will not\"},\", we decide not to approach any party at this moment. Perhaps our efforts would be better placed elsewhere.\"]}},\"relations\":{\"id\":\"relations\",\"type\":\"scene\",\"title\":\"Relationships\",\"newPage\":true,\"onArrival\":[{\"$code\":\"Q['action_timer'] = (Q['action_timer'] || 0) + 1;\"}],\"maxVisits\":48,\"isCard\":true,\"cardImage\":\"img/relationship_card.jpg\",\"frequency\":1000,\"tags\":[\"card_actions\"],\"options\":[{\"id\":\"@relations.royals\",\"title\":\"The King and Queen of Nocturnia.\"},{\"id\":\"@relations.nobles\",\"title\":\"The nobility.\"},{\"id\":\"@relations.courts\",\"title\":\"The Royal Tribunal.\"},{\"id\":\"@relations.alchemy\",\"title\":\"The Alchemy Center.\"},{\"id\":\"@relations.return\",\"title\":\"We can stand alone, for now.\"}],\"content\":[{\"type\":\"heading\",\"content\":\"Relationships\"},{\"type\":\"paragraph\",\"content\":\"As the upcoming session of the trial is yet to begin, we can utilize some of the spare time in between to meet up with various important figures across Nocturnia and improve our relationships with them.\"},{\"type\":\"paragraph\",\"content\":\"Where should we focus our efforts to build on our relationships?\"}],\"countVisitsMax\":48},\"1_alchemy_chamber.its_fine\":{\"id\":\"1_alchemy_chamber.its_fine\",\"onArrival\":[{\"$code\":\"Q['relation_darlyne'] = (Q['relation_darlyne'] || 0) + 3;\\nQ['darlyne_mood'] = (Q['darlyne_mood'] || 0) + 2;\"}],\"options\":[{\"id\":\"@1_alchemy_chamber.next_file\",\"title\":\"Let's get back to work.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Don't worry, if anything happens, I'll always help you,\\\" you confidently reply with a grin on your face.\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne chuckles, and inwardly, you feel an immense sense of relief washing over you. She is not that weak of a princess, after all.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Pfft, thank you, my dear assistant,\\\" Princess Darlyne cheekily responds, and you notice that tears are no longer falling from her eyes. \\\"I knew I can count on you.\\\"\"},{\"type\":\"paragraph\",\"content\":\"You give a nod, this time with a more sincere smile. \\\"You're always welcome, Your Highness.\\\"\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne replies with a silent nod, visibly pleased with the answer.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Now, come on, help me put these flasks back in there.\\\" She stands up from her seat with several flasks in hand as she motions you to follow her.\"},{\"type\":\"paragraph\",\"content\":\"You sigh inwardly as you pick up the rest of the flasks on the floor. Time for another errand session it is, then.\"}]},\"discussion_with_princess.next_page\":{\"id\":\"discussion_with_princess.next_page\",\"subtitle\":\"Or just go have some rest, whatever, it's up to you.\",\"goTo\":[{\"id\":\"tribunal_announcement\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"discussion_with_princess\":{\"id\":\"discussion_with_princess\",\"type\":\"scene\",\"title\":\"A Short Discussion with the Princess\",\"newPage\":true,\"options\":[{\"id\":\"@discussion_with_princess.sleepenough\",\"title\":\"\\\"Have you even had enough sleep, Your Highness?\\\"\"},{\"id\":\"@discussion_with_princess.paper_talk\",\"title\":\"\\\"There are a few things I'd like to talk about, Your Highness.\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"As you reach the Princess's office, you knock on the door as you usually do with several papers still in your hand.\"},{\"type\":\"paragraph\",\"content\":\"When you open the door, you are greeted with the sight of Princess Darlyne, sitting on the desk, pouring over a mountain of books and papers.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Good day, Levon!\\\" Princess Darlyne greets with a wide smile. \\\"So, what brings you here, then?\\\"\"},{\"type\":\"paragraph\",\"content\":\"As you reply with a greeting of your own, you can't help but notice how tired she looks despite her smile. Her lack of sleep is glaringly visible from her unkempt hair, along with dark circles underneath her eyes.\"},{\"type\":\"paragraph\",\"content\":\"You begin to wonder if it's even appropriate to come in and talk to the Princess when she is in a bad state.\"}]},\"1_princess_office.apologize\":{\"id\":\"1_princess_office.apologize\",\"options\":[{\"id\":\"@1_princess_office.its_fine\",\"title\":\"\\\"Don't worry, I will always help you.\\\"\"},{\"id\":\"@1_princess_office.hope\",\"title\":\"\\\"I hope nothing big happens.\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Your Highness, I apologize in advance, but... you are being accused in the news this morning of being complicit in several cases of infidelity.\\\"\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne's eyes immediately goes wide.\"},{\"type\":\"paragraph\",\"content\":\"Her gaze slowly trails from your eyes down to the newspaper as you hand it over to her. \\\"I saw it in this newspaper's headline. I hope this is nothing but some sensationalist nonsense, but...\\\"\"},{\"type\":\"paragraph\",\"content\":\"Her eyes carefully read through the article, furiously flipping the pages with an intensity you have almost never seen before.\"},{\"type\":\"paragraph\",\"content\":\"After what feels like an eternity of her flipping back and forth between pages with her eyes scanning up and down over and over, she finally hands the newspaper back to you.\"},{\"type\":\"paragraph\",\"content\":\"Her eyes still hold the same wide-eyed, horrified expression from before.\"},{\"type\":\"paragraph\",\"content\":\"Actually, it's even worse now.\"},{\"type\":\"paragraph\",\"content\":\"She almost seems to be on the verge of tears. You don't exactly know what to do in this situation, and you're now unsure whether it was truly the right choice to tell her now.\"},{\"type\":\"paragraph\",\"content\":[\"\\\"That... That's not true, is it?\\\" She asks, almost in a pleading fashion. \\\"I'm not one to commit infidelity. \",{\"type\":\"emphasis-1\",\"content\":\"Never.\"},\"\\\"\"]},{\"type\":\"paragraph\",\"content\":\"\\\"I understand, Your Highness-\\\"\"},{\"type\":\"paragraph\",\"content\":[\"\\\"\",{\"type\":\"emphasis-2\",\"content\":\"Never!\"},\"\\\" Princess Darlyne shouts in visible fury as she aggressively stands up from her seat. She looks completely immersed in her rage.\"]},{\"type\":\"paragraph\",\"content\":\"You decide to remain silent where you stand for now, waiting for her to come back to her senses before anything else.\"},{\"type\":\"paragraph\",\"content\":[\"As much as you want to assure her by saying \",{\"type\":\"emphasis-1\",\"content\":\"No, it's nothing but an empty rumour\"},\", you know that this matter is completely out of your hands.\"]},{\"type\":\"paragraph\",\"content\":\"The next few minutes is spent in near-silence as Princess Darlyne tries to calm herself down with several consecutive deep breaths. You patiently wait without saying a word until her anger subsides.\"},{\"type\":\"paragraph\",\"content\":\"\\\"...I'm sorry you had to witness that,\\\" Princess Darlyne apologizes with a raspy voice as she wipes her watery eyes. \\\"I thought the chaos from last time has subsided, but...\\\"\"}]},\"2_princess_office.next_page\":{\"id\":\"2_princess_office.next_page\",\"goTo\":[{\"id\":\"first_summon_received\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"2_princess_office\":{\"id\":\"2_princess_office\",\"type\":\"scene\",\"title\":\"Princess' office scene #2\",\"newPage\":true,\"options\":[{\"id\":\"@2_princess_office.princess\",\"title\":\"\\\"...Princess?\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"It does not take long for you to reach the princess' office. In a hurry, you give several strong knocks towards the door.\"},{\"type\":\"paragraph\",\"content\":\"You wait for her to respond from the inside, as is the usual. However, you couldn't hear any reply at all, even as you wait a few more seconds.\"},{\"type\":\"paragraph\",\"content\":\"You give another strong knock on the door. Finally, you hear a response not long after.\"},{\"type\":\"paragraph\",\"content\":\"\\\"C-come in!\\\" You could hear Princess Darlyne shouting from inside. Her voice sounds slightly shaky, somehow.\"},{\"type\":\"paragraph\",\"content\":\"You open the door slowly, bowing your head as you enter the office to greet her. \\\"Good morning, Your Highness.\\\"\"},{\"type\":\"paragraph\",\"content\":\"Contrary to the usual, you do not hear any response from her.\"}]},\"1_library_room.next_scene_2\":{\"id\":\"1_library_room.next_scene_2\",\"options\":[{\"id\":\"@1_library_room.answer_1\",\"title\":\"\\\"My apologies, there's been too many things on my mind recently.\\\"\"},{\"id\":\"@1_library_room.answer_2\",\"title\":\"\\\"I was intending to finish my researching part first.\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Princess... Darlyne?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yes, it's me,\\\" Princess Darlyne pulls her hand back as she crosses her arms. \\\"Didn't I tell you to meet me in the office last week?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Uh...\\\" You let out a sheepish smile.\"}]},\"deadlock_in_imperial_forum.result_session\":{\"id\":\"deadlock_in_imperial_forum.result_session\",\"options\":[{\"id\":\"@deadlock_in_imperial_forum.king_reaction\",\"title\":\"Then... how did the King respond?\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"The Emergency Session\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"The emergency session following the King's Speech saw heated debate across the entire hemicycle. The Forum was equally split, and it nearly erupted into violent clashes a few times.\"},{\"type\":\"paragraph\",\"content\":\"The compromise was only reached when several nobles from both sides argued for a fairer solution to this whole issue. That is, of course, putting up Princess Darlyne's cases on a public trial.\"},{\"type\":\"paragraph\",\"content\":\"The suggestion was met with a loud applause; perhaps the loudest the room has ever heard in its history.\"}]},\"first_summon_received.king_meet\":{\"id\":\"first_summon_received.king_meet\",\"subtitle\":\"You wonder what awaits behind the majestic door.\",\"newPage\":true,\"options\":[{\"id\":\"@first_summon_received.greet\",\"title\":\"\\\"With our utmost respect, we greet, Your Grace.\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"The two of you step inside as the guard opens the vast door. The King, you notice, sits still on top of the throne at the end of the room.\"},{\"type\":\"paragraph\",\"content\":\"The red carpet, which you had walked not too rarely, suddenly feels wider than ever before. Your heart beats with increasing intensity as you kneel together with Princess Darlyne in front of the King.\"},{\"type\":\"paragraph\",\"content\":\"It almost feels like a lifetime when the King finally speaks.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Greetings, Levon, and... my daughter,\\\" the King trails off slightly at the end.\"}]},\"game_over.you_win\":{\"id\":\"game_over.you_win\",\"title\":\"You have survived together with the Princess!\",\"tags\":[\"endings\"],\"goTo\":[{\"id\":\"game_over.eg_menu\"}],\"content\":{\"content\":\"(Princess Darlyne wins the trial and you basically continue your life unscathed.)\",\"type\":\"paragraph\"}},\"end_of_day_1.newspaper_1\":{\"id\":\"end_of_day_1.newspaper_1\",\"subtitle\":\"You wonder whether another news could snatch the headline away.\",\"newPage\":true,\"options\":[{\"id\":\"@end_of_day_1.headline\",\"title\":\"And the headline reads...\"}],\"content\":{\"content\":\"The morning newspaper arrives in front of the door right as you are about to head out. You decide to pick it up to read what the headline said.\",\"type\":\"paragraph\"}},\"first_meeting_palace.room_main\":{\"id\":\"first_meeting_palace.room_main\",\"goTo\":[{\"id\":\"1_princess_office\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"first_meeting_palace\":{\"id\":\"first_meeting_palace\",\"type\":\"scene\",\"title\":\"First time to the palace\",\"newPage\":true,\"options\":[{\"id\":\"@first_meeting_palace.first_meet_1\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"palace_day_2.room_3\":{\"id\":\"palace_day_2.room_3\",\"viewIf\":{\"$code\":\"return ((Q['brought_up'] || 0) == 0);\"},\"goTo\":[{\"id\":\"2_princess_office\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"palace_day_2\":{\"id\":\"palace_day_2\",\"type\":\"scene\",\"title\":\"Second day in the palace\",\"newPage\":true,\"options\":[{\"id\":\"@palace_day_2.hurry\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"opening.darlyne\":{\"id\":\"opening.darlyne\",\"maxVisits\":1,\"onArrival\":[{\"$code\":\"Q['intro_darlyne_seen'] = 1;\"}],\"goTo\":[{\"id\":\"opening.option_intro\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Princess Darlyne Nightbloom is the sole daughter of the current King and Queen of Nocturnia.\"},{\"type\":\"paragraph\",\"content\":\"In public, she is a very quiet lady, rarely conversing more than a few minutes before drawing herself back into solitude. However, when she is truly comfortable or immersed in something (as she often did with her research), her energy is truly a sight to behold.\"},{\"type\":\"paragraph\",\"content\":[\"Nowadays, she is occupied with her deep fascination with love potions (or, in her own words, \",{\"type\":\"emphasis-1\",\"content\":\"\\\"the mystical powers that unite hearts\\\"\"},\"), and she has even got to be known as \",{\"type\":\"emphasis-1\",\"content\":\"Doctor of Love\"},\". Though you are personally still unconvinced whether it is something worth pursuing, you don't mind helping her along the way as you should anyway.\"]},{\"type\":\"paragraph\",\"content\":\"Even after interacting so many times, she remains in your eyes as nothing short of an enigmatic prodigy.\"}],\"countVisitsMax\":1},\"king_public_statement.what_now\":{\"id\":\"king_public_statement.what_now\",\"options\":[{\"id\":\"@king_public_statement.wait_what\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"...God knows what will happen next.\"},{\"type\":\"paragraph\",\"content\":\"However, there have been some rumours flying out of the Forum that there is about to be a compromise solution.\"},{\"type\":\"paragraph\",\"content\":\"An unprecedented one, in fact.\"},{\"type\":\"paragraph\",\"content\":\"The compromise solution is to put Princess Darlyne Nightbloom on trial.\"}]},\"library.lib_imperial_forum\":{\"id\":\"library.lib_imperial_forum\",\"goTo\":[{\"id\":\"library.library_menu\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"Imperial Forum\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"Equivalent to a parliament, the Imperial Forum is where members meet to debate laws and regulations in the Kingdom of Nocturnia. Members of this forum consist of noble families and selected representatives from each region under the nobility. However, they are not a truly powerful independent body, as their decisions can be overruled with a veto from the King.\"}]},\"1_alchemy_chamber.hope\":{\"id\":\"1_alchemy_chamber.hope\",\"onArrival\":[{\"$code\":\"Q['relation_darlyne'] = (Q['relation_darlyne'] || 0) + 1;\\nQ['darlyne_mood'] = (Q['darlyne_mood'] || 0) + 1;\"}],\"options\":[{\"id\":\"@1_alchemy_chamber.next_file\",\"title\":\"Let's get back to work.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"It's fine, we can hope that nothing big happens,\\\" you reply with a reassuring grin on your face. \\\"Nothing ever happens anyway.\\\"\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne lets out a chuckle. She is still visibly unconvinced, but you get the feeling that she just chooses to believe your words anyway.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Pfft, thank you, my dear assistant,\\\" Princess Darlyne cheekily responds, and you notice that tears are no longer falling from her eyes. \\\"I hope I can always count on you.\\\"\"},{\"type\":\"paragraph\",\"content\":\"You give a nod, this time with a more sincere smile. \\\"Of course, Your Highness. I wouldn't be here if I couldn't do so.\\\"\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne replies with a silent nod, visibly pleased with the answer.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Now, come on, help me put these flasks back in the cabinet.\\\" She motions you to follow her with several flasks in hand.\"},{\"type\":\"paragraph\",\"content\":\"You sigh inwardly as you pick up the rest of the flasks on the floor. Time for another errand session it is, then.\"}]},\"1_princess_office.its_fine\":{\"id\":\"1_princess_office.its_fine\",\"onArrival\":[{\"$code\":\"Q['relation_darlyne'] = (Q['relation_darlyne'] || 0) + 3;\\nQ['darlyne_mood'] = (Q['darlyne_mood'] || 0) + 2;\"}],\"options\":[{\"id\":\"@1_princess_office.next_file\",\"title\":\"Let's get back to work.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Don't worry, if anything happens, I'll always help you,\\\" you confidently reply with a grin on your face.\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne chuckles, and inwardly, you feel an immense sense of relief washing over you. She is not that weak of a princess, after all.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Pfft, thank you, my dear assistant,\\\" Princess Darlyne cheekily responds, and you notice that tears are no longer falling from her eyes. \\\"I knew I can count on you.\\\"\"},{\"type\":\"paragraph\",\"content\":\"You give a nod, this time with a more sincere smile. \\\"You're always welcome, Your Highness.\\\"\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne replies with a silent nod, visibly pleased with the answer.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Now, come on, help me put these flasks back into the cabinet.\\\" She stands up from her seat with several flasks in hand as she motions you to follow her.\"},{\"type\":\"paragraph\",\"content\":\"You sigh inwardly as you pick up the rest of the flasks on the desk. Time for another errand session it is, then.\"}]},\"1_library_room.answer_1\":{\"id\":\"1_library_room.answer_1\",\"onArrival\":[{\"$code\":\"Q['darlyne_mood'] = (Q['darlyne_mood'] || 0) - 1;\"}],\"options\":[{\"id\":\"@1_library_room.what_is_that\",\"title\":\"\\\"What are those?\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"...My apologies, Your Highness. There might've been too many things on minds recently,\\\" you say as you bow your head slightly in apology.\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne swiftly shakes her head. \\\"No, it's fine, Levon. I was just wondering where you were a while back.\\\"\"},{\"type\":\"paragraph\",\"content\":\"As Princess Darlyne moves to sit on the seat next to you, you notice her carrying a small bag filled with several flasks.\"}]},\"deadlock_in_imperial_forum.king_reaction\":{\"id\":\"deadlock_in_imperial_forum.king_reaction\",\"options\":[{\"id\":\"@deadlock_in_imperial_forum.supreme_court_role\",\"title\":\"What about the Supreme Court's role?\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"The King, of course, showed immense displeasure upon hearing the suggestion. However, due to the suggestion being supported by a supermajority, the King reluctantly had to agree with them.\"},{\"type\":\"paragraph\",\"content\":\"Of course, the veto power can overrule any and all motions from the Forum. However, doing so would risk losing the nobility's already declining trust in his rule and even potentially risk a major revolt.\"},{\"type\":\"paragraph\",\"content\":\"And so, the King agreed, but with the amendment that the trial must be carried out by none other than the Supreme Court of the Kingdom of Nocturnia.\"}]},\"first_summon_received.greet\":{\"id\":\"first_summon_received.greet\",\"options\":[{\"id\":\"@first_summon_received.skip_meeting\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"With our utmost respect, we greet, Your Grace.\\\"\"},{\"type\":\"paragraph\",\"content\":\"As you finish your greetings, the King gestures both of you to stand up.\"},{\"type\":\"paragraph\",\"content\":\"\\\"I think...\\\" the King takes a deep breath as he pauses. \\\"...the two of you have understood the reason behind why I am summoning the two of you here.\\\"\"},{\"type\":\"paragraph\",\"content\":\"You gulp inwardly as you nod. \\\"Yes, Your Grace.\\\"\"},{\"type\":\"paragraph\",\"content\":\"The King let out a long sigh.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Before I begin... I would like for everyone in here — with the exception of Princess Darlyne and her assistant — to exit this room at once.\\\"\"},{\"type\":\"paragraph\",\"content\":\"Silently, the guards standing next to the throne disperse, and you can also hear footsteps getting further away from where you are standing.\"},{\"type\":\"paragraph\",\"content\":\"As the sound of footsteps slowly disappear, you can hear the doors closing from way behind you...\"}]},\"game_over.you_survive\":{\"id\":\"game_over.you_survive\",\"title\":\"You have survived, somehow.\",\"tags\":[\"endings\"],\"goTo\":[{\"id\":\"game_over.eg_menu\"}],\"content\":{\"content\":\"(You still survive despite Princess Darlyne losing the trial, without losing much wealth; just minor reputational loss.)\",\"type\":\"paragraph\"}},\"end_of_day_1.headline\":{\"id\":\"end_of_day_1.headline\",\"options\":[{\"id\":\"@end_of_day_1.no_way\",\"title\":\"...There is no way.\"}],\"content\":{\"type\":\"heading\",\"content\":\"PRINCESS CAUGHT IN A WEB OF AFFAIRS!\"}},\"opening.intro_news\":{\"id\":\"opening.intro_news\",\"title\":\"And then...\",\"viewIf\":{\"$code\":\"return (((((Q['intro_myself_seen'] || 0)) !== 0) && (((Q['intro_job_seen'] || 0)) !== 0)) && (((Q['intro_darlyne_seen'] || 0)) !== 0));\"},\"options\":[{\"id\":\"@opening.head_out\",\"title\":\"It's time to head out.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Before you realize it, the sun is already well and above the horizon, and the sky has already turned a rather bright blue.\"},{\"type\":\"paragraph\",\"content\":\"You quickly finish up your preparation before heading towards the door. Everything is nicely put into the bag, and you are now ready to go.\"}]},\"king_public_statement.wait_what\":{\"id\":\"king_public_statement.wait_what\",\"title\":\"...What?\",\"newPage\":true,\"goTo\":[{\"id\":\"king_public_statement.option_visit\"}],\"options\":[{\"id\":\"@king_public_statement.silent_again\",\"title\":\"...\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"...What?\\\"\"},{\"type\":\"paragraph\",\"content\":[\"It's the only word that could come out of your mouth after hearing such a suggestion. Her Royal Highness, \",{\"type\":\"emphasis-1\",\"content\":\"The Princess herself\"},\", on trial?\"]},{\"type\":\"paragraph\",\"content\":\"You could see Rea holding back a laugh on her face. In its place, instead, is a rather sarcastic smile. You can feel that the smile isn't exactly directed towards you, however.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Well, what else would you expect for them to suggest?\\\" Rea shrugs nonchalantly as she picks another artbook from the table. \\\"The factions were almost evenly split as well, so that would be a guaranteed headache either way.\\\"\"}]},\"library.lib_judiciary\":{\"id\":\"library.lib_judiciary\",\"goTo\":[{\"id\":\"library.library_menu\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"Supreme Court of the Kingdom of Nocturnia\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"The Supreme Court of the Kingdom of Nocturnia, commonly called simply as the Supreme Court, is the highest existing court in the Kingdom of Nocturnia. This court handles cases that are either highly controversial or involving high-profile individuals. The head of this court is often the most senior and experienced judge in the Kingdom, and their decisions are considered final and can never be appealed afterwards.\"}]},\"1_alchemy_chamber.not_bring_up\":{\"id\":\"1_alchemy_chamber.not_bring_up\",\"onArrival\":[{\"$code\":\"Q['knowledge_alchemy'] = (Q['knowledge_alchemy'] || 0) + 2;\"}],\"options\":[{\"id\":\"@1_alchemy_chamber.next_file\",\"title\":\"Let's get back to work.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"By the way, Your Highness, if I may ask... why pink?\\\" You ask, deciding to break the silence with a more simple question.\"},{\"type\":\"paragraph\",\"content\":\"You still have no idea if it would be worth it to tell her right now, and you might end up giving the newspaper too much attention than what they would've gotten otherwise.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Hm?\\\" She seems visibly surprised. \\\"What do you mean?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"I was wondering if there are any specific reasons for you to choose pink for this potion's color.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh, that! It's because pink is the color of love!\\\" Princess Darlyne answers enthusiastically as she points to the ribbon on her chest. \\\"That was actually one of the reasons why the color pink dominates most of my dresses, you know.\\\"\"},{\"type\":\"paragraph\",\"content\":\"You hold back a chuckle. Although that is very much in-character of her to do, but her commitment to the cause still surprises you quite a bit.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh right, before I forget,\\\" Princess Darlyne remarks as she stands up from her seat, motioning you to follow her with several flasks in her hand. \\\"Come on, help me put these flasks back in the cabinet. We're not going to use much of these today.\\\"\"},{\"type\":\"paragraph\",\"content\":\"You sigh inwardly as you pick up the rest of the flasks on the floor. Time for another errand session it is, then.\"}]},\"1_princess_office.hope\":{\"id\":\"1_princess_office.hope\",\"onArrival\":[{\"$code\":\"Q['relation_darlyne'] = (Q['relation_darlyne'] || 0) + 1;\\nQ['darlyne_mood'] = (Q['darlyne_mood'] || 0) + 1;\"}],\"options\":[{\"id\":\"@1_princess_office.next_file\",\"title\":\"Let's get back to work.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"It's fine, we can hope that nothing big happens,\\\" you reply with a reassuring grin on your face. \\\"Nothing ever happens anyway.\\\"\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne lets out a chuckle. She is still visibly unconvinced, but you get the feeling that she just chooses to believe your words anyway.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Pfft, thank you, my dear assistant,\\\" Princess Darlyne cheekily responds, and you notice that tears are no longer falling from her eyes. \\\"I hope I can always count on you.\\\"\"},{\"type\":\"paragraph\",\"content\":\"You give a nod, this time with a more sincere smile. \\\"Of course, Your Highness. I wouldn't be here if I couldn't do so.\\\"\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne replies with a silent nod, visibly pleased with the answer.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Now, come on, help me put these flasks back in the cabinet.\\\" She motions you to follow her with several flasks in hand.\"},{\"type\":\"paragraph\",\"content\":\"You sigh inwardly as you pick up the rest of the flasks on the desk. Time for another errand session it is, then.\"}]},\"1_library_room.answer_2\":{\"id\":\"1_library_room.answer_2\",\"onArrival\":[{\"$code\":\"Q['darlyne_mood'] = (Q['darlyne_mood'] || 0) + 2;\"}],\"options\":[{\"id\":\"@1_library_room.what_is_that\",\"title\":\"\\\"What are those?\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"...My apologies, Your Highness, I was intending to finish my part of research first,\\\" you say as you bow your head slightly in apology. \\\"I think some of the things I've written down here will be useful in the future.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"...I suppose that's fair.\\\" Princess Darlyne sighs as she shakes her head. \\\"Tasks have been piling up over the last few days, after all.\\\"\"},{\"type\":\"paragraph\",\"content\":\"As Princess Darlyne moves to sit on the seat next to you, you notice her carrying a small bag filled with several flasks.\"}]},\"deadlock_in_imperial_forum.supreme_court_role\":{\"id\":\"deadlock_in_imperial_forum.supreme_court_role\",\"options\":[{\"id\":\"@deadlock_in_imperial_forum.next_page\",\"title\":\"So... what next?\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"The Supreme Court enters the discussion\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"The Supreme Court, as it stands, is set to be the one carrying out the trial.\"},{\"type\":\"paragraph\",\"content\":\"As the highest existing court in this Kingdom, a trial overseen by the Supreme Court would hold the strongest acknowledgement from everyone regardless of the result.\"},{\"type\":\"paragraph\",\"content\":[\"The biggest reason for their involvement, however, is the fact that there is no precedent for putting a Royal Family member on trial. In fact, this would be the first ever instance, not only in Nocturnia, but \",{\"type\":\"emphasis-1\",\"content\":\"in the history of this world\"},\". Whether they will utilize an existing procedure or create a special one from scratch remains to be seen.\"]}]},\"first_summon_received.skip_meeting\":{\"id\":\"first_summon_received.skip_meeting\",\"title\":\"...and the meeting can finally begin.\",\"newPage\":true,\"options\":[{\"id\":\"@first_summon_received.meeting_skip_1\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"game_over.you_demoted\":{\"id\":\"game_over.you_demoted\",\"title\":\"You have survived... but at what cost?\",\"tags\":[\"endings\"],\"goTo\":[{\"id\":\"game_over.eg_menu\"}],\"content\":{\"content\":\"(You survive despite Princess Darlyne losing the trial, but you basically lost almost everything else due to your association with Darlyne.)\",\"type\":\"paragraph\"}},\"end_of_day_1.no_way\":{\"id\":\"end_of_day_1.no_way\",\"options\":[{\"id\":\"@end_of_day_1.no_way_2\",\"title\":\"There's no way it could get any worse.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"...There's no way.\\\"\"},{\"type\":\"paragraph\",\"content\":\"You squint your eyes as you read through the headline, and then following it up with a scan through the articles below.\"},{\"type\":\"paragraph\",\"content\":\"Somehow, true to your worst expectation, the news has survived the day. Even worse, it snatches up another headline.\"}]},\"opening.head_out\":{\"id\":\"opening.head_out\",\"newPage\":true,\"options\":[{\"id\":\"@opening.newspaper_1\",\"title\":\"The morning newspaper has arrived!\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"king_public_statement.silent_again\":{\"id\":\"king_public_statement.silent_again\",\"content\":[{\"type\":\"paragraph\",\"content\":\"Once again, you don't really know what to say in response. Perhaps it's because there are too many informations that you need to process in such a short time.\"},{\"type\":\"paragraph\",\"content\":\"Rea is already focusing once more on the artbook she is reading, leaving you with your own papers and thoughts once again.\"},{\"type\":\"paragraph\",\"content\":\"You begin to ponder what to do after you're done with this paper.\"}]},\"library.lib_royal_tribunal\":{\"id\":\"library.lib_royal_tribunal\",\"viewIf\":{\"$code\":\"return ((Q['royal_tribunal_formed'] || 0)===1);\"},\"goTo\":[{\"id\":\"library.library_menu\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"Royal Tribunal of the Kingdom of Nocturnia\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"The Royal Tribunal of the Kingdom of Nocturnia, commonly called simply as the Royal Tribunal, is a special tribunal formed in order to try Princess Darlyne Nightbloom, the heir-apparent to the Kingdom of Nocturnia. The tribunal is overseen directly by the Supreme Court.\"}]},\"1_alchemy_chamber.next_file\":{\"id\":\"1_alchemy_chamber.next_file\",\"goTo\":[{\"id\":\"end_of_day_1\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"1_alchemy_chamber\":{\"id\":\"1_alchemy_chamber\",\"type\":\"scene\",\"title\":\"Alchemy chamber scene #1\",\"newPage\":true,\"options\":[{\"id\":\"@1_alchemy_chamber.what_that_mean\",\"title\":\"\\\"What is that supposed to mean?\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Right as you open the brewing room, the strong smell of various mixed potions inside immediately pierces through your nose.\"},{\"type\":\"paragraph\",\"content\":\"You try to cough several times as you repeatedly clap your chest. Even after so many times, your body has still not yet adapted to the air inside this alchemy chamber.\"},{\"type\":\"paragraph\",\"content\":\"As you look around the room for a bit, you notice so many scattered flasks around. Some of them have a little bit of liquid in it, but most are already empty.\"},{\"type\":\"paragraph\",\"content\":\"Another thing you notice is the fact that Princess Darlyne herself is nowhere to be found inside.\"},{\"type\":\"paragraph\",\"content\":\"That particular thought does not last long, however, as you hear a rather familiar voice from behind you.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh, morning, Levon! You're quite early today. That's surprising.\\\"\"},{\"type\":\"paragraph\",\"content\":\"You turn your head towards the direction of the voice. There stands Princess Darlyne in her usual attire: a sleeveless brown dress with a pink ribbon on her chest.\"}]},\"1_princess_office.not_bring_up\":{\"id\":\"1_princess_office.not_bring_up\",\"onArrival\":[{\"$code\":\"Q['knowledge_alchemy'] = (Q['knowledge_alchemy'] || 0) + 2;\"}],\"options\":[{\"id\":\"@1_princess_office.next_file\",\"title\":\"Let's get back to work.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"By the way, Your Highness, if I may ask... why pink?\\\" You ask, deciding to break the silence with a more simple question.\"},{\"type\":\"paragraph\",\"content\":\"You still have no idea if it would be worth it to tell her right now, and you might end up giving the newspaper too much attention than what they would've gotten otherwise.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Hm?\\\" She seems visibly surprised. \\\"What do you mean?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"I was wondering if there are any specific reasons for you to choose pink for this potion's color.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh, that! It's because pink is the color of love!\\\" Princess Darlyne answers enthusiastically as she picks up another paper from the desk. \\\"That was actually one of the reasons why the color pink dominates most of my dresses, you know.\\\"\"},{\"type\":\"paragraph\",\"content\":\"You hold back a chuckle. Although that is very much in-character of her to do, but her commitment to the cause still surprises you quite a bit.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh right, before I forget,\\\" Princess Darlyne suddenly remarks as she stands up from her seat, motioning you to follow her after picking up several flasks in her hand. \\\"Come on, help me put these flasks back in the cabinet. We're not going to use much of these today.\\\"\"},{\"type\":\"paragraph\",\"content\":\"You sigh inwardly as you pick up the rest of the flasks on the desk. Time for another errand session it is, then.\"}]},\"1_library_room.what_is_that\":{\"id\":\"1_library_room.what_is_that\",\"options\":[{\"id\":\"@1_library_room.bring_up\",\"title\":\"Bring it up.\"},{\"id\":\"@1_library_room.not_bring_up\",\"title\":\"Avoid the subject.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"What are those?\\\" You inquire with your eyes still staring at the empty flasks. Princess Darlyne is a bit confused at what you are referring to at first, but then seems to realize it from what your eyes are staring at.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh, this?\\\" Princess Darlyne pointed to the bag she is carrying. \\\"I'm planning to put these back in the cabinet since I don't think we'll need them today.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh...? That's... surprising.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Mm-hmm...\\\"\"},{\"type\":\"paragraph\",\"content\":\"As the conversation settles into a temporary lull, you wonder if you should bring up the newspaper you read this morning.\"}]},\"deadlock_in_imperial_forum.next_page\":{\"id\":\"deadlock_in_imperial_forum.next_page\",\"options\":[{\"id\":\"@deadlock_in_imperial_forum.lets_go\",\"title\":\"Well, time to go to the Princess's office.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"So... what next?\\\"\"},{\"type\":\"paragraph\",\"content\":\"You inwardly mutter to yourself as you continue scribbling on your paper. The newspapers haven't caught wind of any of this yet, but it would be easy for them to sense that something big is coming.\"},{\"type\":\"paragraph\",\"content\":[\"Though rumours have begun swirling about the possibility of putting the Princess on a public trial, there is still no consensus as to \",{\"type\":\"emphasis-1\",\"content\":\"who\"},\" or \",{\"type\":\"emphasis-1\",\"content\":\"what\"},\" specifically would oversee such a trial.\"]},{\"type\":\"paragraph\",\"content\":\"As you ponder once more over your scribbles, you decide that perhaps meeting Princess Darlyne would be better to clear things up.\"}]},\"first_summon_received.meeting_skip_1\":{\"id\":\"first_summon_received.meeting_skip_1\",\"title\":\"The meeting continues...\",\"newPage\":true,\"options\":[{\"id\":\"@first_summon_received.meeting_skip_2\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"game_over.you_exile\":{\"id\":\"game_over.you_exile\",\"title\":\"You have joined Darlyne Nightbloom together in her exile.\",\"tags\":[\"endings\"],\"goTo\":[{\"id\":\"game_over.eg_menu\"}],\"content\":{\"content\":\"(Out of pure loyalty, you decide to join with Princess Darlyne in exile.)\",\"type\":\"paragraph\"}},\"end_of_day_1.no_way_2\":{\"id\":\"end_of_day_1.no_way_2\",\"options\":[{\"id\":\"@end_of_day_1.noble_involved\",\"title\":\"So... what next?\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"You shake your head once more. There is no way this could get any worse, right?\"},{\"type\":\"paragraph\",\"content\":\"At least... that was until you spot the paragraph on the bottom-left corner of the article.\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-1\",\"content\":\"Multiple victims of these cases of infidelity which the Princess is being accused to be complicit of have also revealed to have been under the protection of several noble families. It is not inconceivable to say that her status as a member of royalty may turn out to be far more precarious than it was from the last incident.\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"Fear begins to creep in as the weight of this impending crisis slowly dawns upon you.\"}]},\"opening.newspaper_1\":{\"id\":\"opening.newspaper_1\",\"subtitle\":\"You wonder what the headline has in store for the day.\",\"newPage\":true,\"options\":[{\"id\":\"@opening.headline\",\"title\":\"And the headline reads...\"}],\"content\":{\"content\":\"The morning newspaper arrives in front of the door right as you are about to head out. Curious, you decide to pick it up to read what the headline said.\",\"type\":\"paragraph\"}},\"king_public_statement.option_visit\":{\"id\":\"king_public_statement.option_visit\",\"options\":[{\"id\":\"@king_public_statement.visit_if\",\"title\":\"Visit the Imperial Forum?\"},{\"id\":\"@king_public_statement.visit_dadar\",\"title\":\"Meet with Princess Darlyne?\"},{\"id\":\"@king_public_statement.return_home\",\"title\":\"Go back home?\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"library.lib_informants\":{\"id\":\"library.lib_informants\",\"viewIf\":{\"$code\":\"return ((Q['monarch_available'] || 0)===1);\"},\"goTo\":[{\"id\":\"library.library_menu\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"Informants\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"Ignis Grimoire is . . . (. . . Ignis Grimoire . . .)\"},{\"type\":\"paragraph\",\"content\":\"Valthea Nankila is . . . (. . . Valthea Nankila . . .)\"}]},\"1_princess_office.next_file\":{\"id\":\"1_princess_office.next_file\",\"goTo\":[{\"id\":\"end_of_day_1\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"1_princess_office\":{\"id\":\"1_princess_office\",\"type\":\"scene\",\"title\":\"Princess' office scene #1\",\"newPage\":true,\"options\":[{\"id\":\"@1_princess_office.desk_messy\",\"title\":\"\\\"The desk is as messy as usual, huh?\\\"\"},{\"id\":\"@1_princess_office.why_right\",\"title\":\"\\\"Why the right time?\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"It does not take long for you to reach the princess' office. It isn't that far from the main gate, after all, and you have been working here long enough to memorize many of the routes inside the Royal Palace.\"},{\"type\":\"paragraph\",\"content\":\"Standing in front of the office, you give a light knock towards the door. Normally, the princess would be inside early in the morning, before she heads towards either the library or the alchemy chamber.\"},{\"type\":\"paragraph\",\"content\":\"Just moments later, you can hear Princess Darlyne shouting from the inside. \\\"Come in!\\\"\"},{\"type\":\"paragraph\",\"content\":\"You open the door slowly, bowing your head as you enter the office to greet her. \\\"Good morning, Your Highness.\\\"\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne smiles. \\\"Morning, Levon. You came in at the right time!\\\"\"},{\"type\":\"paragraph\",\"content\":\"As you lift your head, you notice that her desk is still... a bit messy, to say the least. Several half-empty flasks are put on the corner of the desks, while several stacks of papers are left on the opposite side from them.\"},{\"type\":\"paragraph\",\"content\":\"Even though it's something that you have seen quite often since you've worked here, you still couldn't help but be surprised at how much of a workaholic the princess has been.\"}]},\"1_library_room.bring_up\":{\"id\":\"1_library_room.bring_up\",\"onArrival\":[{\"$code\":\"Q['brought_up'] = 1;\"}],\"options\":[{\"id\":\"@1_library_room.apologize\",\"title\":\"\\\"Your Highness, I apologize in advance, but...\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Inwardly, you take a deep breath.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Um... Your Highness?\\\"\"},{\"type\":\"paragraph\",\"content\":\"The princess, still counting the flasks in her bag before, immediately stops as she turns her gaze to you. \\\"Yes?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Have you heard any worrying news recently?\\\" You ask, trying to sound as nonchalant as possible. Inwardly, you hope that she has at least had an idea of the news so you don't have to be the first to tell her about it.\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne tilted her head. \\\"Worrying news? Hmm... Not really, at least not since the threats from that chaos a while back, but I don't think there has been much more to it.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"...\\\"\"},{\"type\":\"paragraph\",\"content\":\"You take another deep breath.\"},{\"type\":\"paragraph\",\"content\":\"As you open the bag to pull out the newspaper from this morning, you reply with a cautious voice.\"}]},\"deadlock_in_imperial_forum.lets_go\":{\"id\":\"deadlock_in_imperial_forum.lets_go\",\"goTo\":[{\"id\":\"discussion_with_princess\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"deadlock_in_imperial_forum\":{\"id\":\"deadlock_in_imperial_forum\",\"type\":\"scene\",\"title\":\"Deadlock inside the Forum intensifies\",\"newPage\":true,\"options\":[{\"id\":\"@deadlock_in_imperial_forum.new_day_1\",\"title\":\"Another day passes by...\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"first_summon_received.meeting_skip_2\":{\"id\":\"first_summon_received.meeting_skip_2\",\"title\":\"...and the meeting goes on...\",\"newPage\":true,\"options\":[{\"id\":\"@first_summon_received.meeting_skip_3\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"game_over.nocturnia_stable\":{\"id\":\"game_over.nocturnia_stable\",\"title\":\"The Kingdom of Nocturnia stands strong.\",\"tags\":[\"endings\"],\"goTo\":[{\"id\":\"game_over.eg_menu\"}],\"content\":{\"content\":\"(Princess Darlyne wins the trial and life continues as normal in Nocturnian politics.)\",\"type\":\"paragraph\"}},\"end_of_day_1.noble_involved\":{\"id\":\"end_of_day_1.noble_involved\",\"options\":[{\"id\":\"@end_of_day_1.second_meet\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[\"The news will grow bigger, and it will soon turn into an unstoppable catastrophe. For the princess, for the Royal Family, for \",{\"type\":\"emphasis-1\",\"content\":\"you\"},\", and for the fate of the Kingdom itself.\"]},{\"type\":\"paragraph\",\"content\":[\"This situation has a very clear direction on where it is going next, and you're quite sure that it will \",{\"type\":\"emphasis-1\",\"content\":\"not\"},\" be for the best.\"]},{\"type\":\"paragraph\",\"content\":\"Quickly, you fold the newspaper into the bag as you run as fast as you can towards the nearest carriage to the Royal Palace.\"}]},\"opening.headline\":{\"id\":\"opening.headline\",\"audio\":\"music/dadar_intro.mp3 loop\",\"options\":[{\"id\":\"@opening.what\",\"title\":\"...What?\"}],\"content\":{\"type\":\"heading\",\"content\":\"REVEALED: THE CRIMES OF NOCTURNIA’S PRINCESS!\"}},\"king_public_statement.visit_dadar\":{\"id\":\"king_public_statement.visit_dadar\",\"maxVisits\":1,\"goTo\":[{\"id\":\"king_public_statement.option_visit\"}],\"onArrival\":[{\"$code\":\"Q['darlyne_relation'] = (Q['darlyne_relation'] || 0) + 2;\\nQ['darlyne_mood'] = (Q['darlyne_mood'] || 0) + 2;\\nQ['visit_dadar_seen'] = 1;\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"You think of meeting up with Princess Darlyne once more, especially as you have just gained important pieces of information from your last conversation with Rea. However, you soon discover that she is still too busy with her own paperworks.\"},{\"type\":\"paragraph\",\"content\":\"Though she appreciates you going out of your way to look for her, but it would still take another hour or two before she is available.\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"Perhaps there are other, better things that could be done. \",\"predicate\":0},\" \",{\"type\":\"conditional\",\"content\":\"Is going home really the only option left now? \",\"predicate\":1},\"\"]}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (!(((Q['visit_if_seen'] || 0)) !== 0));\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['visit_if_seen'] || 0)) !== 0);\"}}]},\"countVisitsMax\":1},\"library.lib_freelancers\":{\"id\":\"library.lib_freelancers\",\"viewIf\":{\"$code\":\"return ((Q['ori_tata_available'] || 0)===1);\"},\"goTo\":[{\"id\":\"library.library_menu\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"Freelancers\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"Oriana Solstair is . . . (. . . Oriana Solstair . . .)\"},{\"type\":\"paragraph\",\"content\":\"Thalita Sylvaine is . . . (. . . Thalita Sylvaine . . .)\"}]},\"1_library_room.apologize\":{\"id\":\"1_library_room.apologize\",\"options\":[{\"id\":\"@1_library_room.its_fine\",\"title\":\"\\\"Don't worry, I will always help you.\\\"\"},{\"id\":\"@1_library_room.hope\",\"title\":\"\\\"I hope nothing big happens.\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Your Highness, I apologize in advance, but... you are being accused in the news this morning of being complicit in several cases of infidelity.\\\"\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne's eyes immediately goes wide.\"},{\"type\":\"paragraph\",\"content\":\"Her gaze slowly trails from your eyes down to the newspaper as you hand it over to her. \\\"I saw it in this newspaper's headline. I hope this is nothing but some sensationalist nonsense, but...\\\"\"},{\"type\":\"paragraph\",\"content\":\"Her eyes carefully read through the article, furiously flipping the pages with an intensity you have almost never seen before.\"},{\"type\":\"paragraph\",\"content\":\"After what feels like an eternity of her flipping back and forth between pages with her eyes scanning up and down over and over, she finally hands the newspaper back to you.\"},{\"type\":\"paragraph\",\"content\":\"Her eyes still hold the same wide-eyed, horrified expression from before.\"},{\"type\":\"paragraph\",\"content\":\"Actually, it's even worse now.\"},{\"type\":\"paragraph\",\"content\":\"She almost seems to be on the verge of tears. You don't exactly know what to do in this situation, and you're now unsure whether it was truly the right choice to tell her now.\"},{\"type\":\"paragraph\",\"content\":[\"\\\"That... That's not true, is it?\\\" She asks, almost in a pleading fashion. \\\"I'm not one to commit infidelity. \",{\"type\":\"emphasis-1\",\"content\":\"Never.\"},\"\\\"\"]},{\"type\":\"paragraph\",\"content\":\"\\\"I understand, Your Highness-\\\"\"},{\"type\":\"paragraph\",\"content\":[\"\\\"\",{\"type\":\"emphasis-2\",\"content\":\"Never!\"},\"\\\" Princess Darlyne shouts in visible fury as she aggressively stands up from her seat. She looks completely immersed in her rage.\"]},{\"type\":\"paragraph\",\"content\":\"You decide to remain silent in your seat for now, waiting for her to come back to her senses before anything else.\"},{\"type\":\"paragraph\",\"content\":[\"As much as you want to assure her by saying \",{\"type\":\"emphasis-1\",\"content\":\"No, it's nothing but an empty rumour\"},\", you know that this matter is completely out of your hands.\"]},{\"type\":\"paragraph\",\"content\":\"The next few minutes is spent in near-silence as Princess Darlyne tries to calm herself down with several consecutive deep breaths. You patiently wait without saying a word until her anger subsides.\"},{\"type\":\"paragraph\",\"content\":\"\\\"...I'm sorry you had to witness that,\\\" Princess Darlyne apologizes with a raspy voice as she wipes her watery eyes. \\\"I thought the chaos from last time has subsided, but...\\\"\"}]},\"first_summon_received.meeting_skip_3\":{\"id\":\"first_summon_received.meeting_skip_3\",\"title\":\"...and the meeting finally comes to an end.\",\"subtitle\":\"At last!\",\"newPage\":true,\"options\":[{\"id\":\"@first_summon_received.cheer_up\",\"title\":\"Offer her some words of comfort, perhaps?\"},{\"id\":\"@first_summon_received.let_her_be\",\"title\":\"Give her some space to sort her thoughts out.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"The meeting had lasted for another two hours before it can finally come to a conclusion.\"},{\"type\":\"paragraph\",\"content\":\"In the end, the King declares that he would do his utmost to support Princess Darlyne and you in the event of a major backlash from the nobility. However, though he claims that it is his duty as a father to ensure that no harms befall upon his daughter, the King also plainly states that there is no guarantee that his effort would fully work.\"},{\"type\":\"paragraph\",\"content\":\"The world of nobility is ruthless, after all. Perhaps even more than what you imagined sometimes.\"},{\"type\":\"paragraph\",\"content\":\"You could see an expression of regret in the Princess's face. Even as she walked through the red carpet and towards the door, she has looked rather... gloomy, to say the least.\"},{\"type\":\"paragraph\",\"content\":\"As you walk steadily behind her, you wonder if you should probably say something to soften the mood.\"}]},\"game_over.nocturnia_waiting\":{\"id\":\"game_over.nocturnia_waiting\",\"title\":\"The Kingdom of Nocturnia awaits its upcoming fate.\",\"tags\":[\"endings\"],\"goTo\":[{\"id\":\"game_over.eg_menu\"}],\"content\":{\"content\":\"(Princess Darlyne loses the trial and the Kingdom now has to deal with the loss of the only heiress-apparent it had before.)\",\"type\":\"paragraph\"}},\"end_of_day_1.second_meet\":{\"id\":\"end_of_day_1.second_meet\",\"title\":\"Time to go to work.\",\"subtitle\":\"Before everything comes crashing down.\",\"goTo\":[{\"id\":\"palace_day_2\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"end_of_day_1\":{\"id\":\"end_of_day_1\",\"type\":\"scene\",\"title\":\"End of Day 1\",\"newPage\":true,\"options\":[{\"id\":\"@end_of_day_1.option_intro_1\",\"title\":\"Another day comes to an end...\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"opening.what\":{\"id\":\"opening.what\",\"options\":[{\"id\":\"@opening.accuse\",\"title\":\"...Infidelity?\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Crimes of... the princess?\\\"\"},{\"type\":\"paragraph\",\"content\":\"Your eyes remain glued to the headline written in large, bold letters on the top of the newspaper. There is only one Princess of Nocturnia, after all. What has she done to warrant such an astounding, accusatory headline?\"},{\"type\":\"paragraph\",\"content\":\"You decide to continue reading through the article on the next page.\"}]},\"king_public_statement.visit_if\":{\"id\":\"king_public_statement.visit_if\",\"maxVisits\":1,\"goTo\":[{\"id\":\"king_public_statement.option_visit\"}],\"onArrival\":[{\"$code\":\"Q['knowledge_politics'] = (Q['knowledge_politics'] || 0) + 2;\\nQ['visit_if_seen'] = 1;\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":[\"As you consider your options, you get reminded that it \",{\"type\":\"emphasis-1\",\"content\":\"has\"},\" been quite a while since you visited the Imperial Forum.\"]},{\"type\":\"paragraph\",\"content\":[\"When you are already a short distance away from the Imperial Forum's building, however, you see that it is crowded outside. \",{\"type\":\"emphasis-1\",\"content\":\"Very\"},\" crowded, in fact. You can hear several passersby in front of you wonder about what could the meeting have been like that the Forum is still closed \\\"\",{\"type\":\"emphasis-1\",\"content\":\"even after those people have been going back-and-forth inside for several hours\"},\"\\\".\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"Perhaps there are other, better things that could be done. \",\"predicate\":0},\" \",{\"type\":\"conditional\",\"content\":\"Is going home really the only option left now? \",\"predicate\":1},\"\"]}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (!(((Q['visit_dadar_seen'] || 0)) !== 0));\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['visit_dadar_seen'] || 0)) !== 0);\"}}]},\"countVisitsMax\":1},\"library.remove_when_done\":{\"id\":\"library.remove_when_done\",\"newPage\":true,\"options\":[{\"id\":\"@the_trial_begins\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"library\":{\"id\":\"library\",\"type\":\"scene\",\"title\":\"Library\",\"newPage\":true,\"isSpecial\":true,\"goTo\":[{\"id\":\"library.library_menu\"}],\"content\":[{\"type\":\"heading\",\"content\":\"The Library\"},{\"type\":\"paragraph\",\"content\":\"Herein contains relevant information about the Kingdom of Nocturnia in this era.\"}]},\"1_library_room.its_fine\":{\"id\":\"1_library_room.its_fine\",\"onArrival\":[{\"$code\":\"Q['relation_darlyne'] = (Q['relation_darlyne'] || 0) + 3;\\nQ['darlyne_mood'] = (Q['darlyne_mood'] || 0) + 2;\"}],\"options\":[{\"id\":\"@1_library_room.next_file\",\"title\":\"Let's get back to work.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Don't worry, if anything happens, I'll always help you,\\\" you confidently reply with a grin on your face.\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne chuckles, and inwardly, you feel an immense sense of relief washing over you. She is not that weak of a princess, after all.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Pfft, thank you, my dear assistant,\\\" Princess Darlyne cheekily responds, and you notice that tears are no longer falling from her eyes. \\\"I knew I can count on you.\\\"\"},{\"type\":\"paragraph\",\"content\":\"You give a nod, this time with a more sincere smile. \\\"You're always welcome, Your Highness.\\\"\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne replies with a silent nod, visibly pleased with the answer.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Now, come on, help me put these flasks back in there.\\\" She stands up from her seat with several flasks in hand as she motions you to follow her.\"},{\"type\":\"paragraph\",\"content\":\"You sigh inwardly as you pick up the rest of the flasks. Time for another errand session it is, then.\"}]},\"first_summon_received.cheer_up\":{\"id\":\"first_summon_received.cheer_up\",\"onArrival\":[{\"$code\":\"Q['darlyne_mood'] = (Q['darlyne_mood'] || 0) + 2;\\nQ['darlyne_relation'] = (Q['darlyne_relation'] || 0) + 1;\"}],\"options\":[{\"id\":\"@first_summon_received.next_page\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[\"It's quite hard to see her being so... out of it. As you quicken your pace to walk next to her, you try to think of something — \",{\"type\":\"emphasis-1\",\"content\":\"anything\"},\" — to say that could help her ease her mind.\"]},{\"type\":\"paragraph\",\"content\":\"\\\"Your Highness... I know that many things are happening beyond any of our control, but...\\\" you trail off briefly, taking a deep breath as you let out a smile, \\\"...as the saying goes, there's always a light at the end of the tunnel, right?\\\"\"},{\"type\":\"paragraph\",\"content\":\"You pause once more, trying to come up with something more to say. Princess Darlyne remains quiet next to you, but she seems to be carefully listening.\"},{\"type\":\"paragraph\",\"content\":[\"\\\"We — or rather, \",{\"type\":\"emphasis-1\",\"content\":\"you\"},\", Your Highness — have gone through this before, and you've managed to win,\\\" you continue, now in a much more confident tone. \\\"We can definitely win it again.\\\"\"]},{\"type\":\"paragraph\",\"content\":\"She still does not give a reply, but this time, you could see a small smile appear on her lips.\"},{\"type\":\"paragraph\",\"content\":\"No more words are exchanged until the two of you return to the Princess's office, but you could feel that her mood has improved noticeably.\"}]},\"game_over.end_game\":{\"id\":\"game_over.end_game\",\"gameOver\":true,\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"game_over\":{\"id\":\"game_over\",\"type\":\"scene\",\"title\":\"Game Over.\",\"newPage\":true,\"goTo\":[{\"id\":\"game_over.eg_menu\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"opening.accuse\":{\"id\":\"opening.accuse\",\"options\":[{\"id\":\"@opening.posthink\",\"title\":\"Perhaps this is nothing but made-up rumours?\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"...Infidelity?\\\" You whisper under your breath, eyes now open wide.\"},{\"type\":\"paragraph\",\"content\":\"The article written on the newspaper accuses Princess Darlyne of being complicit in various acts of infidelity across Nocturnia and beyond. Even worse, the article included an interview with a villager who claimed to be a victim due to her vaguely-described \\\"acts of complicity\\\".\"},{\"type\":\"paragraph\",\"content\":[\"Gears begin turning inside your head. \",{\"type\":\"emphasis-1\",\"content\":\"Of course\"},\", you think, \",{\"type\":\"emphasis-1\",\"content\":\"how could someone like Princess Darlyne be accused of something so vile?\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"Granted, rumours about the Royal Family are not so rare amongst the common populace. Several underground newspapers have even gotten notoriously popular by publishing those kind of things. However, nothing that you've read or heard before could compare to the one you read just now.\"}]},\"king_public_statement.return_home\":{\"id\":\"king_public_statement.return_home\",\"viewIf\":{\"$code\":\"return ((((Q['visit_dadar_seen'] || 0)) !== 0) || (((Q['visit_if_seen'] || 0)) !== 0));\"},\"options\":[{\"id\":\"@king_public_statement.head_home\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Well, when no preferrable alternatives come to mind, going back home is rarely a bad idea, isn't it?\"},{\"type\":\"paragraph\",\"content\":\"In the end, you decide to head straight back to your house after there are no more paperworks to be done for the day.\"}]},\"1_library_room.hope\":{\"id\":\"1_library_room.hope\",\"onArrival\":[{\"$code\":\"Q['relation_darlyne'] = (Q['relation_darlyne'] || 0) + 1;\\nQ['darlyne_mood'] = (Q['darlyne_mood'] || 0) + 1;\"}],\"options\":[{\"id\":\"@1_library_room.next_file\",\"title\":\"Let's get back to work.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"It's fine, we can hope that nothing big happens,\\\" you reply with a reassuring grin on your face. \\\"Nothing ever happens anyway.\\\"\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne doesn't seem to be too impressed by your attempt at a joke, but she lets out a chuckle anyway. She is still visibly unconvinced, and you get the feeling that she simply chooses to believe your words.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Pfft, thank you, my dear assistant,\\\" Princess Darlyne cheekily responds, and you notice that tears are no longer falling from her eyes. \\\"I hope I can always count on you.\\\"\"},{\"type\":\"paragraph\",\"content\":\"You give a nod, this time with a more sincere smile. \\\"Of course, Your Highness. I wouldn't be here if I couldn't do so.\\\"\"},{\"type\":\"paragraph\",\"content\":\"Princess Darlyne replies with a silent nod, visibly pleased with the answer.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Now, come on, help me put these flasks back in there.\\\" She stands up from her seat with several flasks in hand as she motions you to follow her.\"},{\"type\":\"paragraph\",\"content\":\"You sigh inwardly as you pick up the rest of the flasks from the bag. Time for another errand session it is, then.\"}]},\"first_summon_received.let_her_be\":{\"id\":\"first_summon_received.let_her_be\",\"onArrival\":[{\"$code\":\"Q['darlyne_relation'] = (Q['darlyne_relation'] || 0) + 2;\\nQ['darlyne_mood'] = (Q['darlyne_mood'] || 0) + 1;\"}],\"options\":[{\"id\":\"@first_summon_received.next_page\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"It's quite hard to see her being so... out of it. However, you don't exactly know whether giving her a word of comfort is a good idea or not.\"},{\"type\":\"paragraph\",\"content\":\"Sometimes, giving a bit of space is the more preferable course of action. Whatever you want to say has probably crossed her mind before, and piling it up seems rather... unnecessary, to say the least.\"},{\"type\":\"paragraph\",\"content\":\"In the end, you decide to hold back from saying anything towards her.\"},{\"type\":\"paragraph\",\"content\":\"You still keep your walking distance close to her, even as you remain quiet. Perhaps this small gesture could be enough to make her feel... less alone.\"},{\"type\":\"paragraph\",\"content\":\"No more words are exchanged until the two of you return to the Princess's office, but you could feel that your understanding of the Princess have improved considerably.\"}]},\"opening.posthink\":{\"id\":\"opening.posthink\",\"onArrival\":[{\"$code\":\"Q['brought_up'] = 0;\"}],\"options\":[{\"id\":\"@opening.first_meet_1\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"You try to keep your thoughts positive, hoping that this would be nothing but a typical sensasionalist hearsay on a slow news day.\"},{\"type\":\"paragraph\",\"content\":\"The sun is already shining brightly in the sky. You decide to fold the newspaper into the bag and hurry towards the Royal Palace.\"},{\"type\":\"paragraph\",\"content\":\"Those rumours can wait until the next break, after all... right?\"}]},\"king_public_statement.head_home\":{\"id\":\"king_public_statement.head_home\",\"title\":\"Time to finish the rest of the day.\",\"goTo\":[{\"id\":\"deadlock_in_imperial_forum\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"king_public_statement\":{\"id\":\"king_public_statement\",\"type\":\"scene\",\"title\":\"The King's statement\",\"newPage\":true,\"options\":[{\"id\":\"@king_public_statement.new_day\",\"title\":\"The next day has arrived.\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"1_library_room.not_bring_up\":{\"id\":\"1_library_room.not_bring_up\",\"onArrival\":[{\"$code\":\"Q['knowledge_alchemy'] = (Q['knowledge_alchemy'] || 0) + 2;\"}],\"options\":[{\"id\":\"@1_library_room.next_file\",\"title\":\"Let's get back to work.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"...What were those flasks for?\\\" You ask, deciding to break the silence with a simple question.\"},{\"type\":\"paragraph\",\"content\":\"You still have no idea if it would be worth it to tell her right now, and you might end up giving the newspaper too much attention than what they would've gotten otherwise.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh, I've just finished one of the later steps in my research!\\\" Princess Darlyne replies with a radiant expression on her face.\"},{\"type\":\"paragraph\",\"content\":\"You couldn't help but be amused at the overjoyed expression on her face. She is supposed to be the quiet, introverted Princess of Nocturnia, after all. And yet, right now, she is anything but.\"},{\"type\":\"paragraph\",\"content\":\"It's a privilege that probably nobody other than the Royal Family and the royal maids have ever gotten. Somehow, you feel a good amount of pride in yourself swell once again.\"},{\"type\":\"paragraph\",\"content\":\"\\\"That reminds me now,\\\" Princess Darlyne remarks as she stands up from her seat, motioning you to follow her with several flasks in her hand. \\\"Come on, help me put these flasks back in there!\\\"\"},{\"type\":\"paragraph\",\"content\":\"You sigh inwardly as you pick up the rest of the flasks from the bag. Time for another errand session it is, then.\"}]},\"first_summon_received.next_page\":{\"id\":\"first_summon_received.next_page\",\"title\":\"Well, time to go back to work.\",\"subtitle\":\"And finish the rest of the day.\",\"goTo\":[{\"id\":\"king_public_statement\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"first_summon_received\":{\"id\":\"first_summon_received\",\"type\":\"scene\",\"title\":\"You are summoned by the King\",\"newPage\":true,\"options\":[{\"id\":\"@first_summon_received.meet_1\",\"title\":\"A summoning decree has arrived.\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"opening.first_meet_1\":{\"id\":\"opening.first_meet_1\",\"title\":\"Time to go to work.\",\"subtitle\":\"Those rumours can wait after the break.\",\"goTo\":[{\"id\":\"first_meeting_palace\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"opening\":{\"id\":\"opening\",\"type\":\"scene\",\"title\":\"Opening\",\"setBg\":\"img/wbmap.jpg\",\"newPage\":true,\"options\":[{\"id\":\"@opening.intro_1\",\"title\":\"And another day begins anew.\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"1_library_room.next_file\":{\"id\":\"1_library_room.next_file\",\"goTo\":[{\"id\":\"end_of_day_1\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"1_library_room\":{\"id\":\"1_library_room\",\"type\":\"scene\",\"title\":\"Library scene #1\",\"newPage\":true,\"options\":[{\"id\":\"@1_library_room.chemistry\",\"title\":{\"type\":\"emphasis-1\",\"content\":\"Natural Alchemy of the World Ahead.\"}},{\"id\":\"@1_library_room.law\",\"title\":{\"type\":\"emphasis-1\",\"content\":\"Under the Nightbloom: Evolution of Law and Order in Nocturnia.\"}},{\"id\":\"@1_library_room.relations\",\"title\":{\"type\":\"emphasis-1\",\"content\":\"Circles and Squares: Between the Nobility's Handshakes\"}}],\"content\":[{\"type\":\"paragraph\",\"content\":\"The library is as quiet as it has always been whenever you've been in here, and this time, it's no different. Normally, Princess Darlyne would already be here, reading some chemical books that you have never even heard of before.\"},{\"type\":\"paragraph\",\"content\":\"Indeed, the Royal Palace's library boasted some, if not the vastest collections of articles, books, and just about any written stuff throughout the continent.\"},{\"type\":\"paragraph\",\"content\":[\"That is also one of the reasons why \",{\"type\":\"emphasis-1\",\"content\":\"any\"},\" position in the Royal Palace, especially one like your current role as the Princess' assistant, is a highly coveted one. After all, who wouldn't be envious of a role with such ease of access to one of the greatest libraries in the world?\"]},{\"type\":\"paragraph\",\"content\":\"As you walk through the library, your eyes wander from shelves to shelves in search of some interesting books to study. Finally, you found a book titled...\"}]}},\"qualities\":{},\"qdisplays\":{\"darlyne_relation\":{\"id\":\"darlyne_relation\",\"type\":\"qdisplay\",\"content\":[{\"max\":5,\"output\":\"Stranger\"},{\"min\":6,\"max\":12,\"output\":\"Acquaintance\"},{\"min\":13,\"max\":18,\"output\":\"Friend\"},{\"min\":19,\"output\":\"Confidant\"}]},\"knowledges\":{\"id\":\"knowledges\",\"type\":\"qdisplay\",\"content\":[{\"max\":5,\"output\":\"Unfamiliar\"},{\"min\":6,\"max\":10,\"output\":\"Average\"},{\"min\":11,\"max\":15,\"output\":\"Knowledgeable\"},{\"min\":16,\"output\":\"Expert\"}]},\"prosec_strength\":{\"id\":\"prosec_strength\",\"type\":\"qdisplay\",\"content\":[{\"max\":-6,\"output\":\"strong\"},{\"min\":-5,\"max\":-2,\"output\":\"confident\"},{\"min\":-1,\"max\":1,\"output\":\"cautious\"},{\"min\":2,\"max\":5,\"output\":\"doubtful\"},{\"min\":6,\"output\":\"divided\"}]},\"trial_balance\":{\"id\":\"trial_balance\",\"type\":\"qdisplay\",\"content\":[{\"max\":-6,\"output\":\"strongly in favour of the Prosecution\"},{\"min\":-5,\"max\":-2,\"output\":\"leaning in favour of the Prosecution\"},{\"min\":-1,\"max\":1,\"output\":\"roughly equal\"},{\"min\":2,\"max\":5,\"output\":\"leaning in favour of the Defense Counsel\"},{\"min\":6,\"output\":\"strongly in favour of the Defense Counsel\"}]},\"relationships\":{\"id\":\"relationships\",\"type\":\"qdisplay\",\"content\":[{\"max\":5,\"output\":\"Stranger\"},{\"min\":6,\"max\":13,\"output\":\"Dubious\"},{\"min\":14,\"max\":20,\"output\":\"Potential ally\"},{\"min\":21,\"output\":\"Allied\"}]},\"mood\":{\"id\":\"mood\",\"type\":\"qdisplay\",\"content\":[{\"max\":-8,\"output\":\"depressed\"},{\"min\":-7,\"max\":-3,\"output\":\"annoyed\"},{\"min\":-2,\"max\":2,\"output\":\"neutral\"},{\"min\":3,\"max\":7,\"output\":\"content\"},{\"min\":8,\"output\":\"joyous\"}]},\"defend_strength\":{\"id\":\"defend_strength\",\"type\":\"qdisplay\",\"content\":[{\"max\":-6,\"output\":\"divided\"},{\"min\":-5,\"max\":-2,\"output\":\"doubtful\"},{\"min\":-1,\"max\":1,\"output\":\"cautious\"},{\"min\":2,\"max\":5,\"output\":\"confident\"},{\"min\":6,\"output\":\"strong\"}]}},\"tagLookup\":{\"secret_actions\":{\"secret_action\":true},\"events\":{\"iggy_media_1_news\":true,\"ori_action_news\":true,\"iggy_media_2_news\":true,\"val_action_news\":true,\"tata_action_news\":true},\"endings\":{\"game_over.darlyne_survive\":true,\"game_over.darlyne_exile\":true,\"game_over.darlyne_life_prison\":true,\"game_over.you_win\":true,\"game_over.you_survive\":true,\"game_over.you_demoted\":true,\"game_over.you_exile\":true,\"game_over.nocturnia_stable\":true,\"game_over.nocturnia_waiting\":true},\"card_actions\":{\"knowledge\":true,\"strategic_meeting\":true,\"secret_meeting\":true,\"relations\":true}}}"};(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* dendry
 * http://github.com/idmillington/dendry
 *
 * MIT License
 */
/*jshint indent:2 */
(function() {
  'use strict';

  // To avoid the need to include any utility libraries when this is
  // used in a browser, define some helper functions we'd normally
  // rely on libraries for.

  var assert = function(mustBeTrue) {
    /* istanbul ignore if */
    if (!mustBeTrue) {
      throw new Error('Assertion failed.');
    }
  };

  var each = function(array, fn) {
    for (var i = 0; i < array.length; ++i) {
      fn(array[i]);
    }
  };

  var objEach = function(obj, fn) {
    for (var key in obj) {
      fn(key, obj[key]);
    }
  };

  var merge = function() {
    var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var obj = arguments[i];
      for (var key in obj) {
        result[key] = obj[key];
      }
    }
    return result;
  };

  // Credit: Taken from Lodash (MIT License). See CREDITS.
  var isObject = function(value) {
    var type = typeof value;
    return type === 'function' || (value && type === 'object') || false;
  };

  var makeFunctionFromSource = function(source) {
    source = source.trim();
    /*jshint -W054 */
    var fn = new Function('state', 'Q', source);
    /*jshint +W054 */
    fn.source = source;
    return fn;
  };

  var runActions = function(actions, context, state) {
    if (actions === undefined) {
      return;
    }
    each(actions, function(fn) {
      try {
        fn.call(context, state, state.qualities);
      } catch (err) {
        // Ignore errors. TODO: Log them somehow?
        console.log('Error:', err);
      }
    });
  };

  var runPredicate = function(predicate, default_, context, state) {
    var result = default_;
    if (predicate === undefined) {
      return result;
    }
    try {
      result = !!predicate.call(context, state, state.qualities);
    } catch (err) {
      // Ignore errors. TODO: Log them somehow?
      console.log('Error:', err);
    }
    return result;
  };

  var runExpression = function(expression, default_, context, state) {
    var result = default_;
    if (expression === undefined) {
      return result;
    }
    try {
      result = expression.call(context, state, state.qualities);
    } catch (err) {
      // Ignore errors. TODO: Log them somehow?
      console.log('Error in expression', expression, ':', err);
    }
    return result;
  };

  var convertJSONToGame = function(json, callback) {
    var reviver = function(key, value) {
      if (isObject(value) && value.$code !== undefined) {
        return makeFunctionFromSource(value.$code);
      } else {
        return value;
      }
    };

    try {
      var game = JSON.parse(json, reviver);
      return callback(null, game);
    } catch (err) {
      return callback(err);
    }
  };

  var simpleContent = function(text) {
    return [{type:'paragraph', content:text}];
  };

  var getCardinalNumber = function(value) {
    if (Math.floor(value) === value && value >= 0 && value <= 12) {
      // Integer, so use word.
      return ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
              'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'][value];
    } else {
      return value.toString();
    }
  };

  var getOrdinalNumber = function(value) {
    if (Math.floor(value) === value && value >= 0) {
      if (value <= 12) {
        return ['zeroth', 'first', 'second', 'third', 'fourth', 'fifth',
                'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh',
                'twelfth'][value];
      } else {
        value = value.toString();
        if (/1[0-9]$/.test(value)) {
          return value + 'th';
        } else {
          var last = value.substr(value.length - 1, 1);
          switch (last) {
            case '1': return value + 'st';
            case '2': return value + 'nd';
            case '3': return value + 'rd';
            default: return value + 'th';
          }
        }
      }
    } else {
      return value.toString();
    }
  };

  var getFudgeDisplay = function(value) {
    if (Math.floor(value) === value) {
      if (value > 3) {
        return 'superb+' + (value - 3);
      } else if (value < -3) {
        return 'terrible' + (value + 3);
      } else {
        switch (value) {
          case  3: return 'superb';
          case  2: return 'great';
          case  1: return 'good';
          case  0: return 'fair';
          case -1: return 'mediocre';
          case -2: return 'poor';
          case -3: return 'terrible';
        }
      }
    } else {
      return value.toString();
    }
  };

  var getUserQDisplay = function(value, qdisplay) {
    for (var i = 0; i < qdisplay.content.length; ++i) {
      var case_ = qdisplay.content[i];
      var min = case_.min;
      var max = case_.max;
      if ((min === undefined || min <= value) &&
          (max === undefined || max >= value)) {
        if (case_.output !== undefined) {
          return case_.output;
        } else {
          return value.toString();
        }
      }
    }
    return value.toString();
  };

  // broad difficulty from https://fallenlondon.wiki/wiki/Broad_difficulty
  
  var calculateBroadDifficulty = function(quality, difficulty, scaler, random) {
    if (!scaler) {
      scaler = 0.6;
    }
    if (scaler > 1) {
      scaler = scaler/100;
    }
    var success_prob = scaler*(quality/difficulty);
    if (success_prob > 1) {
      success_prob = 1;
    }
    return success_prob;
 };

  // narrow difficulty from https://fallenlondon.wiki/wiki/Narrow_difficulty
  var calculateNarrowDifficulty = function(quality, difficulty, increment) {
    if (!increment) {
      increment = 0.1;
    }
    if (increment > 1) {
      increment = increment/100;
    }
    var success_prob = (quality - difficulty)*increment + 0.5;
    if (success_prob > 1) {
      success_prob = 1;
    } else if (success_prob < increment) {
      success_prob = increment;
    }
    return success_prob;
  };

  // this function actually does the roll for success.
  var rollDifficulty = function(success_prob, random) {
    var rn;
    if (random) {
      rn = random.random();

    } else {
      rn = Math.random();
    }
    if (rn < success_prob) {
      return true;
    }
    return false;   
  };


  // use the storynexus adjectives
  var displayDifficulty = function(success_prob) {
    if (success_prob <= 0.1) {
      return "almost impossible";
    } else if (success_prob <= 0.3) {
      return "high-risk";
    } else if (success_prob <= 0.4) {
      return "tough";
    } else if (success_prob <= 0.5) {
      return "very chancy";
    } else if (success_prob <= 0.6) {
      return "chancy";
    } else if (success_prob <= 0.7) {
      return "modest";
    } else if (success_prob <= 0.8) {
      return "very modest";
    } else if (success_prob <= 0.9) {
      return "low risk";
    } else {
      return "straightforward";
    }
  };


  // ------------------------------------------------------------------------

  // Objects with this interface are passed to a game state to have it
  // display content.
  var UserInterface = function() {};
  UserInterface.prototype.beginGame = function() {};
  UserInterface.prototype.displayContent = function(paragraphs, faceImage) {};
  // these are the dendrynexus display functions
  // displays the decks
  UserInterface.prototype.displayDecks = function(decks) {};
  // displays cards in hand
  UserInterface.prototype.displayHand = function(hand) {};
  // displays pinned cards (these are basically an alternate way of displaying choices)
  UserInterface.prototype.displayPinnedCards = function(cards) {};

  UserInterface.prototype.displayChoices = function(choices) {};
  UserInterface.prototype.displayGameOver = function() {
    this.displayContent(simpleContent('Game Over'));
  };
  UserInterface.prototype.removeChoices = function() {};
  // Called when the player makes a choice and new content is about to be
  // added (i.e. isn't called between output when the next scene is arrived
  // at via go-to).
  UserInterface.prototype.beginOutput = function() {};
  UserInterface.prototype.endOutput = function() {};
  UserInterface.prototype.newPage = function() {};
  UserInterface.prototype.setStyle = function(style) {};
  UserInterface.prototype.signal = function(data) {};
  UserInterface.prototype.setBg = function(img) {};
  UserInterface.prototype.setSprites = function(data) {};
  UserInterface.prototype.setSpriteStyle = function(loc, style) {};
  UserInterface.prototype.audio = function(audio) {};
  // Not part of the UI, but allows us to simply subclass.
  UserInterface.makeParentOf = function(OtherConstructor) {
    OtherConstructor.prototype = new UserInterface();
    OtherConstructor.constructor = OtherConstructor;
  };

  // ------------------------------------------------------------------------

  // An engine is given a user interface, the game and the current
  // game state (can be omitted). It is responsible for the logic of
  // the game.
  var DendryEngine = function(ui, game) {
    this.ui = ui;
    this.game = game;
  };

  DendryEngine.prototype.displayGameOver = function() {
    this.ui.displayGameOver();
    return this;
  };

  DendryEngine.prototype.displayChoices = function() {
    // TODO: dendrynexus - if the current scene is a hand, display the decks, hand, and pinned cards.
    var choices = this.getCurrentChoices();
    assert(choices);
    var scene = this.getCurrentScene();
    if (scene.isHand) {
      // separate choices into decks and pinned cards
      var decks = [];
      var pinnedCards = [];
      for (var c of choices) {
        var choiceScene = this.game.scenes[c.id];
        if (choiceScene.isDeck) {
          // if the deck has
          if (!this._drawFromDeck(c.id)) {
            c.canChoose = false;
            c.subtitle = c.unavailableSubtitle || "No cards available from deck.";
          } else {
            c.canChoose = true;
          }
          c.isDeck = true;
          c.image = choiceScene.cardImage;
          decks.push(c);
        } else if (choiceScene.isPinnedCard) {
          c.isDeck = false;
          c.image = choiceScene.cardImage;
          pinnedCards.push(c);
        }
      }
      if (!this.state.currentHands[this.state.sceneId]) {
        this.state.currentHands[this.state.sceneId] = [];
      }
      var currentHand = this.state.currentHands[this.state.sceneId];
      // TODO: check the viewIf/chooseIf conditions for all cards in the current hand, and filter them if they no longer work...
      var handIds = {};
      for (var card of currentHand) {
        handIds[card.id] = card;
      }
      handIds = this.__filterViewable(handIds);
      for (var i = 0; i < currentHand.length; i++) {
        while (currentHand[i] && !handIds[currentHand[i].id]) {
          currentHand.splice(i, 1);
        }
      }
      if (decks.length > 0) {
          this.ui.displayDecks(decks);
      }
      if (scene.maxCards > 0) {
          this.ui.displayHand(currentHand, scene.maxCards);
      }
      this.ui.displayPinnedCards(pinnedCards);
    } else {
      if (this.state.enableTranscript) {
        this.transcript.push(choices);
      }
      this.ui.displayChoices(choices);
    }
    return this;
  };

  DendryEngine.prototype.displaySceneContent = function(restorePage) {
    var scene = this.getCurrentScene();
    assert(scene);
    // TODO: displaying images
    var faceImage = null;
    if (scene.faceImage) {
      faceImage = scene.faceImage;
    }
    var sceneSignal = scene.signal || this.game.sceneSignal;
    if (sceneSignal !== undefined) {
      this.ui.signal({signal:sceneSignal,
                      event:'scene-display',
                      id:this.state.sceneId});
    }
    if (restorePage) {
      this.ui.newPage();
      this.ui.displayContent(this.state.tempCurrentContent, faceImage);
      this.state.currentContent = this.state.tempCurrentContent.slice();
    } else if (scene.newPage) {
      this.ui.newPage();
      this.state.currentContent = [];
    }
    this.ui.setStyle(scene.style);
    this.ui.removeChoices();

    if (scene.content !== undefined && !restorePage) {
      var displayContent = this._makeDisplayContent(scene.content, true);
      if (this.state.enableTranscript) {
        this.transcript = this.transcript.concat(displayContent);
      }
      this.state.currentContent = this.state.currentContent.concat(displayContent);
      this.ui.displayContent(displayContent, faceImage);
    }
    this._runActions(scene.onDisplay);

    return this;
  };

  DendryEngine.prototype.choose = function(choiceIndex) {
    var choices = this.choiceCache;

    // Check for valid choice.
    assert(choices);
    if (choices.length <= choiceIndex) {
      throw new Error('No choice at index ' + choiceIndex + ', only ' +
                      choices.length + ' choices are available.');
    }

    // Commit the choice.
    var choice = choices[choiceIndex];
    if (!choice.canChoose) {
      throw new Error('Attempted to choose index ' + choiceIndex + ', but ' +
                      'that choice is unavailable.');
    }

    var id = choice.id;
    if (this.state.enableTranscript) {
      this.transcript.push('> ' + choice.title);
    }

    delete this.choiceCache;
    this.goToScene(id);

    return this;
  };

  DendryEngine.prototype.chooseSceneId = function(sceneId) {
    delete this.choiceCache;
    this.goToScene(id);

    return this;
  };

  // TODO: dendrynexus - draw card
  DendryEngine.prototype.drawCard = function(deckId) {
    var currentSceneId = this.state.sceneId;
    var scene = this.getCurrentScene();
    assert(scene);
    
    var currentHand = this.state.currentHands[currentSceneId];
    // return a message saying that there are too many cards
    if (scene.maxCards <= currentHand.length) {
      return {id: null, title: 'no_space_in_hand'};
    }
    // get an available card from deckId
    // card is {id: id, title: title}
    var card = this._drawFromDeck(deckId);
    // distinguish between the "no space left in hand" and "no card in deck" situations?
    if (!card) {
      return {id: null, title: 'no_card_in_deck'};
    }
    this.state.lastDrawnCard = card;
    var image = this.game.scenes[card.id].cardImage;
    card.image = image;
    this.state.currentHands[currentSceneId].push(card);

    // display the hand
    this.ui.displayHand(this.state.currentHands[currentSceneId], scene.maxCards);
    return card;
  };


  // dendrynexus - play a card (remove it from the current hand)
  // should this be the code for pinned cards as well?
  DendryEngine.prototype.playCard = function(cardId) {
    var currentSceneId = this.state.sceneId;
    var currentHand = this.state.currentHands[currentSceneId];
    // remove card from hand
    for (var i = 0; i < currentHand.length; i++) {
      if (currentHand[i].id == cardId) {
        currentHand.splice(i, 1);
        break;
      }
    }
    this.state.lastPlayedCard = this.game.scenes[cardId];
    delete this.choiceCache;
    this.goToScene(cardId);
  };

  DendryEngine.prototype.playPinnedCard = function(cardId) {
    delete this.choiceCache;
    this.goToScene(cardId);
  };

  DendryEngine.prototype.goToScene = function(id) {
    this.state.sceneIdsSinceGoTo = [];
    this.ui.beginOutput();
    this.__changeScene(id);
    this.ui.endOutput();
  };

  DendryEngine.prototype.beginGame = function(rndSeeds) {
    this.random = rndSeeds ? Random.fromSeeds(rndSeeds) : Random.fromUnique();
    this.state = {
      sceneId: null,
      sceneIdsSinceGoTo: [],
      rootSceneId: this.game.rootScene || this.game.firstScene || 'root',
      gameOver: false,
      visits: {},
      qualities: {},
      currentRandomState: null,
      currentContent: [],
      // tempCurrentContent is used for when the
      // player visits the stats or settings pages in order to remember
      // where the previous page was?
      tempCurrentContent: [],
      // prevSpecialSceneId is only set when visiting scene tagged with
      // isSpecial = true, and is the scene before the special scene.
      prevSpecialSceneId: null,
      prevSceneId: null,
      // every time a top-level scene changes,
      // this record the last-visited qualified id within that scene.
      prevTopSceneId: null,
      // jumpScene is defined within a scene file, indicating the scene that
      // @jumpScene will go to. Basically it's used to make subroutines.
      jumpSceneId: null,
      // achievements is a dict of all the current achievements.
      // persist achievements in the browser through localstorage?
      achievements: {},
      // current background image
      bg: null,
      // sceneStack is used for goSub
      sceneStack: [],
      // true if just popped out of a returnScene
      justReturned: false,
      // just returned from a goSubStart
      justReturnedStart: false,
      // just returned from a goSubEnd
      justReturnedEnd: false,
      // sprites is a mapping from location to file
      sprites: {},
      // dendrynexus stuff
      // mapping from sceneId to list of sceneIds - indicating the current hand in each of those scenes.
      currentHands: {},
      // last drawn card
      lastDrawnCard: null,
      lastPlayedCard: null,

      enableTranscript: false,
      // whether or not to disable saves
      disableSaves: false,
    };
    // TODO: transcript
    this.transcript = [];

    this._setUpQualities();
    this._loadAchievements();

    this.ui.beginGame();

    var id = this.game.firstScene || this.state.rootSceneId;
    this.goToScene(id);

    return this;
  };

  DendryEngine.prototype._loadAchievements = function() {
    if (typeof localStorage !== 'undefined') {
        if (localStorage[this.game.title + '_achievements']) {
            this.state.achievements = JSON.parse(
                localStorage[this.game.title + '_achievements']);
            // add a special quality named 'achievement_'
            for (var achievement in this.state.achievements) {
                this.state.qualities['achievement_' + achievement] = 1;
            }
        }
    }
  };

  DendryEngine.prototype.gameOver = function() {
    this.state.gameOver = true;
    this.displayGameOver();
    return this;
  };

  DendryEngine.prototype.isGameOver = function() {
    return this.state.gameOver;
  };

  DendryEngine.prototype.getCurrentScene = function() {
    var scene = this.game.scenes[this.state.sceneId];
    assert(scene !== undefined);
    return scene;
  };

  // Returns the choices for the current scene. Choices are objects
  // with an id and a title property, not to be confused with the
  // option objects in a scene (though options are used to generate
  // choices). Choices are compiled from the options belonging to the
  // current scene.
  DendryEngine.prototype.getCurrentChoices = function() {
    return this.choiceCache;
  };

  // Sets the current state of the engine from an exportable state.
  DendryEngine.prototype.setState = function(state) {
    // Set the state.
    this.state = state;
    this._setUpQualities();
    this.random = Random.fromState(this.state.currentRandomState);
    this._loadAchievements();

    // Display the current state.
    if (this.isGameOver()) {
      this.displayGameOver();
    } else {
      var scene = this.getCurrentScene();
      this.choiceCache = this._compileChoices(scene);
      this.ui.newPage();
      this.ui.removeChoices();
      this.ui.displayContent(this.state.currentContent);
      this.displayChoices();
      this.ui.setSprites(this.state.sprites);
      this.ui.setBg(this.state.bg);
    }
    return this;
  };

  // Returns a data structure for exporting without any accessors or
  // complex classes.
  DendryEngine.prototype.getExportableState = function() {
    // Because we only have complex state in the qualities (they have
    // accessors), and because we save with JSON (which calls
    // accessors correctly), we don't have to worry about giving the
    // actual state. Note that, if you want to keep this object, however,
    // you want to clone it somehow (turning it to and from json,
    // for example), otherwise it will change as the engine updates.
    return this.state;
  };

  // ------------------------------------------------------------------------

  DendryEngine.prototype._getQDisplay = function(value, qDisplayId) {
    switch (qDisplayId) {
    case 'cardinal': case 'number':
      return getCardinalNumber(value);
    case 'ordinal':
      return getOrdinalNumber(value);
    case 'fudge':
      return getFudgeDisplay(value);
    default:
      var qdisplay = this.game.qdisplays[qDisplayId];
      assert(qdisplay !== undefined);
      return getUserQDisplay(value, qdisplay);
    }
  };

  DendryEngine.prototype._evaluateStateDependencies = function(defs) {
    var result = [];

    for (var i = 0; i < defs.length; ++i) {
      var value;
      var def = defs[i];
      var fn = def.fn;
      switch (def.type) {
      case 'insert':
        value = this._runExpression(fn);
        if (def.qdisplay) {
          value = this._getQDisplay(value, def.qdisplay);
        } else {
          value = value.toString();
        }
        break;

      default:
        assert(def.type === 'predicate');
        value = this._runPredicate(fn);
        break;
      }

      // Recurse the resolution into the resulting value, if needed.
      if (value.stateDependencies !== undefined) {
        // We have to resolve the nested state dependencies.
        value = this._makeDisplayContent(value, false);
      }
      result.push(value);
    }
    return result;
  };

  DendryEngine.prototype._mergeStateEvalsInArray = function(array, evals) {
    if (!Array.isArray(array)) {
      array = [array];
    }
    var result = [];
    for (var i = 0; i < array.length; ++i) {
      result = result.concat(this._mergeStateEvals(array[i], evals));
    }
    return result;
  };

  DendryEngine.prototype._mergeStateEvals = function(content, evals) {
    if (content.type === undefined) {
      return [content];
    }

    var result;
    switch (content.type) {
    case 'conditional':
      if (evals[content.predicate]) {
        result = this._mergeStateEvalsInArray(content.content, evals);
      } else {
        result = [];
      }
      break;
    case 'insert':
      result = evals[content.insert];
      break;
    default:
      var newE = {type:content.type};
      newE.content = this._mergeStateEvalsInArray(content.content, evals);
      result = [newE];
      break;
    }
    return result;
  };

  DendryEngine.prototype._makeDisplayContent = function(content, useParas) {
    // Raw content can just be returned.
    if (content.content === undefined) {
      if (Array.isArray(content)) {
        return content;
      } else if (useParas) {
        return [{type:'paragraph', content:content}];
      } else {
        return [content];
      }
    } else if (content.stateDependencies === undefined &&
               content.type !== undefined) {
      return [content];
    }

    // Merge in dependencies if we have them
    var stateDepDefs = content.stateDependencies;
    var displayContent = content.content;
    if (stateDepDefs && stateDepDefs.length > 0) {
      var evals = this._evaluateStateDependencies(stateDepDefs);
      if (!Array.isArray(displayContent)) {
        displayContent = [displayContent];
      }
      displayContent = this._mergeStateEvalsInArray(
        displayContent, evals
      );
    }
    return displayContent;
  };

  DendryEngine.prototype._setUpQualities = function() {
    var _Q = this._qualitiesAccessorsPrivate = {};
    var Q = this.state.qualities;
    var that = this;
    objEach(this.game.qualities, function(id, quality) {
      var min = quality.min;
      var max = quality.max;
      var signal = quality.signal || that.game.qualitySignal;
      var predicate = quality.isValid;
      var needsAccessors = (
        min !== undefined ||
        max !== undefined ||
        signal !== undefined ||
        predicate !== undefined
      );
      if (needsAccessors) {
        if (Q[id] !== undefined) {
          _Q[id] = Q[id];
        }
        Q.__defineGetter__(id, function() {
          return _Q[id];
        });
        Q.__defineSetter__(id, function(value) {
          if (min !== undefined && value < min) {
            value = min;
          }
          if (max !== undefined && value > max) {
            value = max;
          }
          var was = _Q[id];
          _Q[id] = value;

          // Check if the new value is not allowed.
          if (!that._runPredicate(predicate, true)) {
            // Reverse the change.
            _Q[id] = value = was;
          }

          // Signal after the change is made.
          if (signal !== undefined && value !== was) {
            var signalObj = {
              signal: signal,
              event: 'quality-change',
              id: id,
              now: value
            };
            if (was !== undefined) {
              signalObj.was = was;
            }
            that.ui.signal(signalObj);
          }
        });
      }
      if (quality.initial !== undefined && Q[id] === undefined) {
        Q[id] = quality.initial;
      }
    });
  };

  DendryEngine.prototype._runActions = function(actions) {
    runActions(actions, this, this.state);
  };

  DendryEngine.prototype._runPredicate = function(predicate, default_) {
    return runPredicate(predicate, default_, this, this.state);
  };

  DendryEngine.prototype._runExpression = function(expression, default_) {
    return runExpression(expression, default_, this, this.state);
  };

  DendryEngine.prototype.__changeScene = function(id) {
    if (this.state.justReturned) {
        this.state.justReturned = false;
    }
    var scene = null;
    var restorePage = false;
    // if id is 'prevScene', go to the previous scene.
    if (id == 'prevScene') {
      if (this.prevSceneId === null) {
        // this really only comes up on the very first scene of the game.
      }
      scene = this.game.scenes[this.state.prevSceneId];
      id = this.state.prevSceneId;
      assert(scene);
    } else if (id == 'prevTopScene') {
      scene = this.game.scenes[this.state.prevTopSceneId];
      id = this.state.prevTopSceneId;
      assert(scene);
    } else if (id == 'jumpScene') {
      scene = this.game.scenes[this.state.jumpSceneId];
      id = this.state.jumpSceneId;
      assert(scene);
    } else if (id === 'backSpecialScene') {
      scene = this.game.scenes[this.state.prevSpecialSceneId];
      id = this.state.prevSpecialSceneId;
      restorePage = true;
      assert(scene);
      // if prevSpecialSceneId is null, this indicates that
      // we're not within a specialScene, and we can set a jump point.
      this.state.prevSpecialSceneId = null;
    } else {
      scene = this.game.scenes[id];
      assert(scene);
    }


    // Leave previous scene.
    var fromId = this.state.sceneId;
    var lastScene = this.game.scenes[fromId];
    if (!!fromId) {
      this.state.prevSceneId = fromId;
      if (lastScene.newPage) {
        this.state.prevTopSceneId = fromId;
      }
      if (scene.isSpecial && this.state.prevSpecialSceneId === null) {
        this.state.tempCurrentContent = this.state.currentContent.slice();
        this.state.prevSpecialSceneId = fromId;
      }
      var from = this.getCurrentScene();
      this._runActions(from.onDeparture);
      var fromSignal = from.signal || this.game.sceneSignal;
      if (fromSignal !== undefined) {
        this.ui.signal({signal:fromSignal,
                        event:'scene-departure',
                        id:this.state.sceneId,
                        'to':id});
      }
    }

    // Arrive at current scene.
    this.state.sceneId = id;
    this.state.sceneIdsSinceGoTo.push(id);

    if (scene.setRoot) {
      this.state.rootSceneId = id;
    }
    if (scene.setJump) {
      this.state.jumpSceneId = scene.setJump;
    }

    if (scene.countVisitsMax !== undefined) {
      if (this.state.visits[id] === undefined) {
        this.state.visits[id] = 1;
      } else if (this.state.visits[id] < scene.countVisitsMax) {
        this.state.visits[id]++;
      }
    }

    if (!restorePage && !this.state.justReturned) {
        // If we go back from a special scene (e.g. the stats page),
        // we probably don't want to run the scene actions again.
        this._runActions(scene.onArrival);
        // TODO: After running onArrival, we should run call if call has
        if (scene.call) {
          var callScene = this.game.scenes[scene.call];
          this._runActions(callScene.onArrival);
        }
    }
    var sceneSignal = scene.signal || this.game.sceneSignal;
    if (sceneSignal !== undefined) {
      var signal = {
        signal: sceneSignal,
        event: 'scene-arrival',
        id: id
      };
      if (!!fromId) {
        signal.from = fromId;
      }
      this.ui.signal(signal);
    }

    // We're done with any code that might generate random numbers
    // (except go-to, which will recurse into this method anyway), so we
    // can store the seed which can be used to replay the behavior
    // from here.
    this.state.currentRandomState = this.random.getState();
    //if (!this.state.justReturned) {
        // if the state has just returned from a goSub, we don't display
        // the content?
        // TODO: i'm not sure what the best logic for this is...
        // Maybe the text pre-gosub should be displayed only after the goSub?
    this.displaySceneContent(restorePage);
    //}
    // display background
    if (scene.setBg) {
        this.state.bg = scene.setBg;
        this.ui.setBg(scene.setBg);
    }
    if (scene.setSprites) {
        this.state.sprites = scene.setSprites;
        this.ui.setSprites(scene.setSprites);
    }
    if (scene.audio) {
        this.ui.audio(scene.audio);
    }
    // TODO: there has got to be a better way of doing this.
    if (scene.setTopLeftStyle) {
        this.ui.setSpriteStyle('topLeft', scene.setTopLeftStyle);
    }
    if (scene.setTopRightStyle) {
        this.ui.setSpriteStyle('topRight', scene.setTopRightStyle);
    }
    if (scene.setBottomLeftStyle) {
        this.ui.setSpriteStyle('bottomLeft', scene.setBottomLeftStyle);
    }
    if (scene.setBottomRightStyle) {
        this.ui.setSpriteStyle('bottomRight', scene.setBottomRightStyle);
    }
    // update achievement
    if (scene.achievement) {
        this.achieve(scene.achievement);

    }

    // Check if we have any reason to leave the scene, or end the game.
    var done = false;
    if (scene.gameOver === true) {
      done = true;
      this.gameOver();
    } else if (scene.goSubEnd && !this.state.justReturnedEnd) {
      // goSub
      var validSubs = [];
      for (var s1 = 0; s1 < scene.goSub.length; ++s1) {
        var sub = scene.goSub[s1];
        if (sub.predicate === undefined ||
            this._runPredicate(sub.predicate)) {
          validSubs.push(sub.id);
        }
      }
    } else if (scene.goTo) {
      // Find all valid gotos.
      var validGoToIds = [];
      for (var i = 0; i < scene.goTo.length; ++i) {
        var goTo = scene.goTo[i];
        if (goTo.predicate === undefined ||
            this._runPredicate(goTo.predicate)) {
          validGoToIds.push(goTo.id);
        }
      }
      if (validGoToIds.length === 1) {
        done = true;
        this.__changeScene(validGoToIds[0]);
      } else if (validGoToIds.length > 1) {
        var randomNumber = this.random.uint32();
        var choice = randomNumber % validGoToIds.length;
        var chosenGoToId = validGoToIds[choice];
        done = true;
        this.__changeScene(chosenGoToId);
      }
    } else if (scene.goToRef) {
      // do some gotoref
      var validRefs = [];
      for (var s = 0; s < scene.goToRef.length; ++s) {
        var ref = scene.goToRef[s];
        if (ref.predicate === undefined ||
            this._runPredicate(ref.predicate)) {
          validRefs.push(ref.id);
        }
      }
      if (validRefs.length === 1) {
        done = true;
        this.__changeScene(this.state.qualities[validRefs[0]]);
      } else if (validRefs.length > 1) {
        var c = this.random.uint32() % validRefs.length;
        var chosenRef = validRefs[c];
        done = true;
        this.__changeScene(this.state.qualities[chosenRef]);
      }
    }

    // dendrynexus: calculate checks
    // WHAT IF scenes have gotos and checks. huh. don't do that. Let's just say that is undefined behavior.
    var hasCheck = false;
    var successProb, isSuccess;
    if (scene.checkQuality && scene.broadDifficulty && scene.checkSuccessGoTo && scene.checkFailureGoTo) {
      var scaler = 0.6;
      if (scene.difficultyScaler) {
        scaler = scene.difficultyScaler;
      }
      successProb = calculateBroadDifficulty(this.state.qualities[scene.checkQuality] || 0, scene.broadDifficulty, scaler);
      hasCheck = true;
    } else if (scene.checkQuality && scene.narrowDifficulty && scene.checkSuccessGoTo && scene.checkFailureGoTo) {
      var increment = 0.1;
      if (scene.difficultyIncrement) {
        increment = scene.difficultyIncrement;
      }
      successProb = calculateNarrowDifficulty(this.state.qualities[scene.checkQuality] || 0, scene.narrowDifficulty, increment);
      hasCheck = true;
    }
    if (hasCheck) {
      isSuccess = rollDifficulty(successProb, this.random); 
      // logic for changing the scene on success/failure of the check
      done = true;
      if (isSuccess) {
        this.__changeScene(scene.checkSuccessGoTo);
      } else {
        this.__changeScene(scene.checkFailureGoTo);
      }
    }

    // If we've not ended, nor found a valid go-to, then we try choices.
    if (!done) {
      this.choiceCache = this._compileChoices(scene);
      if (this.choiceCache === null) {
        // Explicitly disallowing game over keeps us stuck here.
        if (scene.gameOver !== false) {
          this.gameOver();
        }
      } else {
        this.displayChoices();
      }
    }
  };

  DendryEngine.prototype.achieve = function(achievementName) {
    this.state.achievements[achievementName] = 1;
    // add a special quality named 'achievement_'
    this.state.qualities['achievement_' + achievementName] = 1;
    // add a new quality indicating that the achievement has been done for the current game
    this.state.qualities['game_achievement_' + achievementName] = 1;
    // set localStorage for achievement
    if (typeof localStorage !== 'undefined') {
      localStorage[this.game.title + '_achievements'] = JSON.stringify(this.state.achievements);
    }
    if (window && window.onAchieve) {
        window.onAchieve(achievementName);
    }
  };

  DendryEngine.prototype.__getChoiceSelectionData = function(idToInfoMap) {
    var result = [];
    for (var id in idToInfoMap) {
      var optionScene = this.game.scenes[id];
      var optionInfo = idToInfoMap[id];

      optionInfo.order = optionInfo.order || optionScene.order || 0;
      optionInfo.priority = optionInfo.priority || optionScene.priority || 1;
      // Because 'null' is a valid frequency, we can't use || to do this.
      if (optionInfo.frequency === undefined) {
        optionInfo.frequency = optionScene.frequency;
        if (optionInfo.frequency === undefined) {
          optionInfo.frequency = 100;
        }
      }
      // get variable frequencies
      if (optionScene.frequencyVar) {
        optionInfo.frequency = this.runExpression(optionScene.frequencyVar);
      }
      optionInfo.selectionPriority = 0; // Used by __filterByPriority

      result.push(optionInfo);
    }
    return result;
  };

  DendryEngine.prototype.__filterViewable = function(idToInfoMap) {
    var result = {};
    for (var id in idToInfoMap) {
      var thisScene = this.game.scenes[id];

      // This id fails if it is past its max visits.
      var maxVisits = thisScene.maxVisits;
      if (maxVisits !== undefined) {
        var visits = this.state.visits[id] || 0;
        if (visits >= maxVisits) {
          continue;
        }
      }
      if (thisScene.maxVisitsVar !== undefined) {
        maxVisits = this._runExpression(thisScene.maxVisitsVar);
        var v2 = this.state.visits[id] || 0;
        if (v2 >= maxVisits) {
          continue;
        }
      }

      // Fiter out scenes that can't be viewed.
      var canView = this._runPredicate(thisScene.viewIf, true);
      if (!canView) {
        continue;
      }

      // It passes otherwise.
      result[id] = idToInfoMap[id];
    }
    return result;
  };

  DendryEngine.prototype.__getChoiceIdsFromOptions = function(options) {
    var that = this;

    var choices = {};
    each(options, function(option) {
      // Filter out options that can't be viewed.
      if (!that._runPredicate(option.viewIf, true)) {
        return;
      }

      if (option.id.substr(0, 1) === '@') {
        // This is an id, use it.
        var trimmedId = option.id.substring(1);
        var choice = merge(option, {id:trimmedId});
        choices[trimmedId] = choice;
      } else {
        assert(option.id.substr(0, 1) === '#');
        // This is a tag, add all matching ids.
        var ids = that.game.tagLookup[option.id.substring(1)];
        objEach(ids, function(id) {
          if (choices[id] === undefined) {
            choices[id] = merge(option, {id:id});
          }
        });
      }
    });
    return choices;
  };

  // Code based on Undum (MIT License). See CREDITS.
  DendryEngine.prototype.__filterByPriority = function(choices,
                                                       minChoices,
                                                       maxChoices) {
    assert(minChoices === null ||
           maxChoices === null ||
           maxChoices >= minChoices);
    var that = this;

    var committed = [];
    var candidates = [];
    var choice;

    // Work in descending priority order.
    choices.sort(function(a, b) {
      return b.priority - a.priority;
    });

    // First phase: we make sure we have at least our minimum number
    // of choices, and that we consider the minimum possible number of
    // priorities to reach that minimum.
    var lastPriority;
    for (var i = 0; i < choices.length; ++i) {
      choice = choices[i];
      if (choice.priority !== lastPriority) {
        if (lastPriority !== undefined) {
          // Priority has decreased, use the candidates if there are enough.
          if (minChoices === null || i >= minChoices) {
            break;
          }
        }

        // We're going on, so commit our current candidates.
        committed.push.apply(committed, candidates);
        candidates = [];
        lastPriority = choice.priority;
      }
      candidates.push(choice);
    }

    // Second phase: we commit as many candidates as we can without
    // exceeding our maximum.
    // TODO: think about tag choices vs builtin choices
    var committedChoices = committed.length;
    var totalChoices = committedChoices + candidates.length;
    if (maxChoices === null || maxChoices >= totalChoices) {
      // We can use all the candidates without exceeding our maximum.
      committed.push.apply(committed, candidates);
    } else {
      // Take a subset of the candidates, using their relative frequency.
      each(candidates, function(choice) {
        if (choice.frequency === null) {
          choice.selectionPriority = 0; // Always choose.
        } else {
          choice.selectionPriority = that.random.random() / choice.frequency;
        }
      });
      candidates.sort(function(a, b) {
        return a.selectionPriority - b.selectionPriority;
      });
      var extraChoices = maxChoices - committedChoices;
      var chosen = candidates.slice(0, extraChoices);
      committed.push.apply(committed, chosen);
    }

    return committed;
  };

  DendryEngine.prototype.__getChoiceDisplayData = function(choicesSelected) {
    var choiceOutput = [];
    var numChoosable = 0;

    for (var i = 0; i < choicesSelected.length; ++i) {
      var choice = choicesSelected[i];
      var choiceScene = this.game.scenes[choice.id];

      // Figure out if this choice can be chosen.
      var canChoose = true;
      if (choice.chooseIf) {
        canChoose = this._runPredicate(choice.chooseIf, true);
      }
      if (canChoose && choiceScene.chooseIf) {
        canChoose = this._runPredicate(choiceScene.chooseIf, true);
      }

      var title = choice.title || choiceScene.title;
      assert(title);

      var subtitle = null;
      if (!canChoose) {
        subtitle = choice.unavailableSubtitle ||
                   choiceScene.unavailableSubtitle;
      }
      if (!subtitle) {
        subtitle = choice.subtitle || choiceScene.subtitle;
      }


      var finalChoice = {
        id:choice.id,
        canChoose:canChoose,
        title:this._makeDisplayContent(title, false)
      };
      if (subtitle) {
        finalChoice.subtitle = this._makeDisplayContent(subtitle, false);
      }
      // dendrynexus - add success/failure probabilities, and challenges.
      var successProb;
      if (choiceScene.checkQuality && choiceScene.broadDifficulty && choiceScene.checkSuccessGoTo && choiceScene.checkFailureGoTo) {
        var scaler = 0.6;
        if (choiceScene.difficultyScaler) {
          scaler = choiceScene.difficultyScaler;
        }
        successProb = calculateBroadDifficulty(this.state.qualities[choiceScene.checkQuality] || 0, choiceScene.broadDifficulty, scaler);
        finalChoice.checkQuality = choiceScene.checkQuality;
        finalChoice.successProb = successProb;
        finalChoice.difficulty = displayDifficulty(successProb);
      } else if (choiceScene.checkQuality && choiceScene.narrowDifficulty && choiceScene.checkSuccessGoTo && choiceScene.checkFailureGoTo) {
        var increment = 0.1;
        if (choiceScene.difficultyIncrement) {
          increment = choiceScene.difficultyIncrement;
        }
        successProb = calculateNarrowDifficulty(this.state.qualities[choiceScene.checkQuality] || 0, choiceScene.narrowDifficulty, increment);
        finalChoice.checkQuality = choiceScene.checkQuality;
        finalChoice.successProb = successProb;
        finalChoice.difficulty = displayDifficulty(successProb);
      }

      choiceOutput.push(finalChoice);
      if (canChoose) {
        ++numChoosable;
      }
    }

    return {choices:choiceOutput, numChoosable:numChoosable};
  };

  DendryEngine.prototype._compileChoices = function(scene) {
    assert(scene);

    var options = scene.options;
    var choiceOutput = [];
    var numChoosable = 0;
    if (options !== undefined) {

      var choiceIds = this.__getChoiceIdsFromOptions(options);
      choiceIds = this.__filterViewable(choiceIds);

      var validChoiceData = this.__getChoiceSelectionData(choiceIds);
      var minChoices = scene.minChoices || null;
      var maxChoices = scene.maxChoices || null;
      validChoiceData = this.__filterByPriority(validChoiceData,
                                                minChoices, maxChoices);

      // Sort the result into display order.
      validChoiceData.sort(function(a, b) {
        return a.order - b.order;
      });

      // Now we've chosen our selection, get the final displayable data.
      var data = this.__getChoiceDisplayData(validChoiceData);
      choiceOutput = data.choices;
      numChoosable = data.numChoosable;
    }

    if (numChoosable === 0) {
      // We have no choosable options, so add the default option (NB:
      // this may take us over the max-choices limit).
      var root = this.state.rootSceneId;
      if (root !== this.state.sceneId) {
        var rootSceneChoose = this.game.scenes[root].chooseIf;
        if (!rootSceneChoose || this._runPredicate(rootSceneChoose, true)) {
          choiceOutput.push({id:root, title:'Continue...', canChoose:true});
          ++numChoosable;
        }
      }
    }
    if (numChoosable > 0) {
      return choiceOutput;
    } else {
      return null;
    }
  };


  // dendrynexus - this returns a single available card from the given deck, formatted as an object of the type {id: id, title: title}
  DendryEngine.prototype._drawFromDeck = function(deckId) {
    var scene = this.game.scenes[deckId];
    var viewableScenes = this._compileChoices(scene);
    if (!viewableScenes) {
      return null;
    }
    var choosableScenes = [];
    var currentHand = this.state.currentHands[this.state.sceneId];
    if (!currentHand) {
        currentHand = [];
    }
    currentHand = currentHand.map((x)=>x.id);
    for (var x of viewableScenes) {
      var choiceScene = this.game.scenes[x.id];
      // filter for whether the card is in the hand
      if (x.canChoose && choiceScene.isCard &&  currentHand.indexOf(x.id) < 0) {
        choosableScenes.push(x);
      }
    }
    if (!choosableScenes) {
      return null;
    }
    var randomNumber = this.random.uint32();
    var choice = randomNumber % choosableScenes.length;
    // this.state.currentRandomState = this.random.getState();
    return choosableScenes[choice];
  };

  // ------------------------------------------------------------------------

  // Marsaglia, George (July 2003). 'Xorshift RNGs'.
  // Journal of Statistical Software 8 (14).
  var Random = function(v, w, x, y, z) {
    this.getState = function() {
      return [v, w, x, y, z];
    };
    var uint32Multiply = function(a, b) {
      var aHigh = (a >> 16) & 0xffff;
      var aLow = a & 0xffff;
      var bHigh = (b >> 16) & 0xffff;
      var bLow = b & 0xffff;
      var prodHigh = ((aHigh * bLow) + (aLow * bHigh)) & 0xffff;
      return ((prodHigh << 16) >>> 0) + (aLow * bLow);
    };
    this.uint32 = function() {
      var t = (x ^ (x >>> 7)) >>> 0;
      x = y;
      y = z;
      z = w;
      w = v;
      v = (v ^ (v << 6)) ^ (t ^ (t << 13)) >>> 0;
      return uint32Multiply((y + y + 1), v) >>> 0;
    };
    this.random = function() {
      return this.uint32() * 2.3283064365386963e-10;
    };
  };

  var __next = 1;
  Random.fromUnique = function() {
    var seed = new Date().getTime();
    return Random.fromSeeds([seed, __next++]);
  };

  Random.fromTime = function() {
    return Random.fromSeeds([new Date().getTime()]);
  };

  Random.fromSeeds = function(seeds) {
    var v = 886756453;
    var w = 88675123;
    var x = 123456789;
    var y = 362436069;
    var z = 521288629;

    // The seed hashing function is based on Mash 0.9 (MIT License).
    // See CREDITS.
    var hashSeed = function(data) {
      data = data.toString();
      var n = 0xefc8249d;
      for (var i = 0; i < data.length; i++) {
        n += data.charCodeAt(i);
        var h = 0.02519603282416938 * n;
        n = h >>> 0;
        h -= n;
        h *= n;
        n = h >>> 0;
        h -= n;
        n += h * 0x100000000;
      }
      return (n >>> 0) * 2.3283064365386963e-10;
    };

    for (var i = 0; i < seeds.length; i++) {
      var hashedSeed = hashSeed(seeds[i]) * 0x100000000;
      v ^= hashedSeed;
      w ^= hashedSeed;
      x ^= hashedSeed;
      y ^= hashedSeed;
      z ^= hashedSeed;
    }
    return new Random(v, w, x, y, z);
  };

  Random.fromState = function(state) {
    return new Random(state[0], state[1], state[2], state[3], state[4]);
  };

  // ------------------------------------------------------------------------

  module.exports = {
    makeFunctionFromSource: makeFunctionFromSource,
    runActions: runActions,
    runPredicate: runPredicate,
    runExpression: runExpression,
    convertJSONToGame: convertJSONToGame,
    simpleContent: simpleContent,

    getCardinalNumber: getCardinalNumber,
    getOrdinalNumber: getOrdinalNumber,
    getUserQDisplay: getUserQDisplay,
    getFudgeDisplay: getFudgeDisplay,

    DendryEngine: DendryEngine,
    UserInterface: UserInterface,
    NullUserInterface: UserInterface,

    Random: Random
  };
}());

},{}],2:[function(require,module,exports){
/* dendry
 * http://github.com/idmillington/dendry
 *
 * MIT License
 */
/*jshint indent:2 */
(function($) {
  'use strict';

  var contentToHTML = require('./content/html');
  var engine = require('../engine');

  var BrowserUserInterface = function(game, $content) {
    this.game = game;
    this.$content = $content;
    this._registerEvents();

    this.dendryEngine = new engine.DendryEngine(this, game);
    // TODO: refactor how the settings work - move it all within a single object
    this.base_settings = {'disable_bg': false, 'animate':false, 'animate_bg': true, 'disable_audio': false, 'show_portraits': true, 'dark_mode': false, 'font_size': 1.1, 'volume': 1};
    // current settings...
    // font size is in ems - 1.1em
    this.current_settings = {'disable_bg': false, 'animate':false, 'animate_bg': true, 'disable_audio': false, 'show_portraits': true, 'dark_mode': false, 'font_size': 1.1, 'volume': 1};
    this.disable_bg = false;
    this.animate = false;
    this.animate_bg = true;
    this.disable_audio = false;
    // backgrounds and portraits are 100% optional, and most games will not use them.
    this.show_portraits = true;
    this.fade_time = 600;
    this.bg_fade_out_time = 200;
    this.bg_fade_in_time = 1000;
    this.sound_fade_time = 2000;
    this.volume = 1;
    this.font_size = 1.1;
    this.contentToHTML = contentToHTML;

    // sprites
    this.spriteLocs = {'topLeft': 1, 'topRight': 1, 'bottomLeft': 1, 'bottomRight': 1};
    // current HTMLAudioElement
    this.currentAudio = null;
    // current audio url
    this.currentAudioURL = '';
    this.audioQueue = [];
    // playlist is used for shuffling...
    this.audioPlaylist = [];
    this.audioVolume = 1;
    // flag for determining if we're on a new page, up until the first choice.
    this.onNewPage = false;

    // for saving
    this.save_prefix = game.title + '_' + game.author + '_save';
    this.max_slots = 8; // max save slots
    this.DateOptions = {hour: 'numeric',
                 minute: 'numeric',
                 second: 'numeric',
                 year: 'numeric', 
                 month: 'short', 
                 day: 'numeric' };
  };
  engine.UserInterface.makeParentOf(BrowserUserInterface);

  // ------------------------------------------------------------------------
  // Main API

  //load a game as a json file from a url, and then run the game...
  BrowserUserInterface.prototype.loadGame = function(url) {
      var that = this;
      if (!url.endsWith('.json')) { 
          if (url.endsWith('/')) { 
              url = url + 'game.json';
          } else { 
              url = url + '/game.json';
          } 
      } 
      fetch(url)
      .then(response => response.text())
      .then(json => { 
          game = engine.convertJSONToGame(json, function(err, game) {
              if (err) {
                throw err;
              }
              return game;
          });
          that.game = game;
          that.dendryEngine = new engine.DendryEngine(that, game);

          that.dendryEngine.beginGame();
      })
      .catch(err => console.log(err));
  };


  BrowserUserInterface.prototype.displayContent = function(paragraphs, faceImage) {
    var $html = $(contentToHTML.convert(paragraphs));
    // TODO: maybe face image visibility should be controlled by a different setting?
    var hasImage = false;
    if (faceImage && this.show_portraits) {
        hasImage = true;
        // convert faceImage into an html object
        console.log(faceImage);
        //var cardEl = $('<div>').addClass('face-figure');
        var cardEl = document.createElement('div');
        cardEl.className = "face-figure";
        //var $image = $('<img>').addClass('face-img').attr({src : faceImage});
        var image = new Image();
        image.className = "face-img";
        cardEl.appendChild(image);
        $html.splice(1, 0, cardEl);
        image.src = faceImage;
        /*
        if (!this.animate) {
            var that = this;
            image.onload = function() {
                that.$content.append($html);
                console.log('image loaded');
            };
            image.src = faceImage;
        }
        */
    }
    if (this.animate) {
        $html.fadeIn(this.fade_time);
        this.$content.append($html);
    } else {
        if (!hasImage) {
            this.$content.append($html);
        } else {
            this.$content.append($html);
        }
    }
    $html.focus();
    // allow user to add custom stuff on display content (for sidebar in this case)
    if (window && window.onDisplayContent) {
        window.onDisplayContent();
    }
  };

  BrowserUserInterface.prototype.displayGameOver = function() {
    var $p = $('<p>').text(this.getGameOverMsg()).addClass('game-over');
    if (this.animate) {
        $p.fadeIn(this.fade_time);
        this.$content.append($p);
    } else {
        this.$content.append($p);
    }
    $p.focus();
  };

  BrowserUserInterface.prototype.displayChoices = function(choices) {
    var $ul = $('<ul>').addClass('choices');
    for (var i = 0; i < choices.length; ++i) {
      var choice = choices[i];

      var title = contentToHTML.convertLine(choice.title);
      var subtitle = "";
      if (choice.subtitle !== undefined) {
        subtitle = contentToHTML.convertLine(choice.subtitle);
      }

      var $li = $('<li>');
      var $titleHolder = $li;
      if (choice.canChoose) {
        $titleHolder = $('<a>').attr({href: '#', 'data-choice': i});
        $li.html($titleHolder);
      } else {
        $titleHolder.addClass('unavailable');
      }
      $titleHolder.html(title);
      if (choice.checkQuality && choice.difficulty && choice.successProb !== undefined) {
        if (subtitle) {
          subtitle += '<br>';
        }
        subtitle += 'Check: ' + choice.checkQuality + '<br>';
        subtitle += 'Difficulty: ' + choice.difficulty + ' (' + Math.floor(choice.successProb*100) + '%)';
      }
      if (subtitle) {
        $li.append($('<div>').addClass('subtitle').html(subtitle));
      }

      $ul.append($li);
    }
    if (this.animate) {
        $ul.fadeIn(this.fade_time);
        this.$content.append($ul);
    }
    else {
        this.$content.append($ul);
    }
    $ul.focus();
    if (this.onNewPage) {
      this.onNewPage = false;
      if (window && window.onNewPage) {
        window.onNewPage();
      }
    }
  };

  BrowserUserInterface.prototype.newPage = function() {
    if (this.animate) {
        var $content = this.$content;
        this.$content.empty();
        this.$content.children().fadeOut(this.fade_time, function() {
        });
    } else {
        this.$content.empty();
    }
    this.onNewPage = true;

  };

  BrowserUserInterface.prototype.setStyle = function(style) {
    this.$content.removeClass();
    if (style !== undefined) {
      this.$content.addClass(style);
    }
  };

  BrowserUserInterface.prototype.removeChoices = function() {
    $('.choices', this.$content).remove();
    $('.hidden', this.$content).remove();
  };

  BrowserUserInterface.prototype.beginOutput = function() {
    $("#read-marker", this.$content).remove();
    this.$content.append($('<hr>').attr('id', 'read-marker'));
  };

  BrowserUserInterface.prototype.endOutput = function() {
    var $marker = $("#read-marker");
    if (this.animate) {
        if ($marker.length > 0) {
          $('html, body').animate({scrollTop: $marker.offset().top}, this.fade_time);
        } else {
          $('html, body').animate({scrollTop: 0}, this.fade_time);
        }
    }
  };

  BrowserUserInterface.prototype.signal = function(data) {
    // TODO: implement signals - signals contain signal, event, and id
    console.log(data);
    var signal = data.signal;
    var event = data.event; // scene-arrival, scene-display, scene-departure, quality-change
    var scene_id = data.id;
    // TODO: handle this in the game.js for each specific game
    if (window && window.handleSignal) {
        window.handleSignal(signal, event, scene_id);
    }
  };

  // dendrynexus displays
  // displays the hand.
  BrowserUserInterface.prototype.displayHand = function(hand, maxCards) {
    if (window && window.displayHand) {
      window.displayHand(hand, maxCards);
      return null;
    }
    var handDescription = 'Hand - click a card to play.';
    if (window.handDescription) {
      handDescription = window.handDescription;
    }
    if (this.dendryEngine.state.qualities.handDescription) {
      handDescription = this.dendryEngine.state.qualities.handDescription;
    }
    var $handEl = $('.hand');
    var hasOldHand = false;
    if ($handEl.length == 0) {
        $handEl = $('<ul>').addClass('hand');
        this.$content.append($('<hr>'));
        this.$content.append($('<p>').addClass('hand-description').text(handDescription));
    } else {
        $handEl.empty();
        hasOldHand = true;
    }
    // display the hand
    for (var i = 0; i < maxCards; i++) {
      var $cardEl = $('<li>').addClass('card-in-hand');
      if (hand[i]) {
        var card = hand[i];
        // create an <a> element, with an image nested inside.
        var $cardLink = $('<a>').addClass('card').attr({href: '#', 'card-id': card.id, title: card.title});
        var $title = $('<span>').addClass('card-caption').text(card.title);
        // if there is an image, set the image; otherwise, set image to a gradient?
        if (card.image) {
          var $cardImage = $('<img>').addClass('card-img').attr({src: card.image});
          $cardLink.append($cardImage);
        } else {
        }
        if (card.subtitle) {
          var $cardSubtitle = $('<span>').addClass('card-tooltip').text(card.subtitle);
          $cardLink.append($cardSubtitle);
        }
        $cardEl.append($cardLink);
        $cardEl.append($title);
        $handEl.append($cardEl);
      } else {
        var $blankCardDiv = $('<div>').addClass('blank-card');
        $cardEl.append($blankCardDiv);
      }
      $handEl.append($cardEl);
    }
    if (!hasOldHand) {
        this.$content.append($handEl);
    }
  };


  BrowserUserInterface.prototype.displayDecks = function(decks) {
    if (window && window.displayDecks) {
      window.displayDecks(decks);
      return null;
    }
    var deckDescription = 'Decks - click a deck to draw a card.';
    if (window.deckDescription) {
      deckDescription = window.deckDescription;
    }
    if (this.dendryEngine.state.qualities.deckDescription) {
      deckDescription = this.dendryEngine.state.qualities.deckDescription;
    }
    this.$content.append($('<hr>'));
    this.$content.append($('<p>').addClass('deck-description').text(deckDescription));
    var $decksEl = $('<ul>').addClass('decks');
    for (var deck of decks) {
      var $deckEl = $('<li>').addClass('deck');
      // create an <a> element, with an image nested inside.
      var $deckLink = $('<a>').addClass('card').attr({href: '#', 'card-id': deck.id, title: deck.title});
      var $title = $('<span>').addClass('card-caption').text(deck.title);
      // if there is an image, set the image; otherwise, set image to a gradient?
      if (deck.image) {
        var $deckImage = $('<img>').addClass('card-img').attr({src: deck.image});
        $deckLink.append($deckImage);
      } else {
        // TODO: set alternative background for $deckLink to a gradient
      }
      if (deck.subtitle) {
        // if there's a subtitle, create a tooltip
        var $deckSubtitle = $('<span>').addClass('card-tooltip').text(deck.subtitle);
        $deckLink.append($deckSubtitle);
      }
      if (!deck.canChoose) {
        $deckEl = $deckEl.addClass('unavailable-card');
      }
      $deckEl.append($deckLink);
      $deckEl.append($title);
      $decksEl.append($deckEl);
    }
    this.$content.append($decksEl);
  };

  // displays pinned cards for dendrynexus
  BrowserUserInterface.prototype.displayPinnedCards = function(cards) {
    if (cards.length == 0) {
      return null;
    }
    if (window && window.displayPinnedCards) {
      window.displayPinnedCards(cards);
      return null;
    }
    var pinnedCardsDescription = 'Pinned cards - click a card to play.';
    if (window.pinnedCardsDescription) {
      pinnedCardsDescription = window.pinnedCardsDescription;
    }
    if (this.dendryEngine.state.qualities.pinnedCardsDescription) {
      pinnedCardsDescription = this.dendryEngine.state.qualities.pinnedCardsDescription;
    }
    this.$content.append($('<hr>'));
    this.$content.append($('<p>').addClass('pinned-text-description').text(pinnedCardsDescription));
    var $cardsEl = $('<ul>').addClass('pinned-cards');
    for (var card of cards) {
      var $cardEl = $('<li>').addClass('pinned-card');
      // create an <a> element, with an image nested inside.
      var $cardLink = $('<a>').addClass('card').attr({href: '#', 'card-id': card.id, title: card.title});
      var $title = $('<span>').addClass('card-caption').text(card.title);
      // if there is an image, set the image; otherwise, set image to a gradient?
      if (card.image) {
        var $cardImage = $('<img>').addClass('card-img').attr({src: card.image});
        $cardLink.append($cardImage);
      } else {
      }
      if (card.subtitle) {
        var $cardSubtitle = $('<span>').addClass('card-tooltip').text(card.subtitle);
        $cardLink.append($cardSubtitle);
      }
      $cardEl.append($cardLink);
      $cardEl.append($title);
      $cardsEl.append($cardEl);
    }
    this.$content.append($cardsEl);
  };

  // visual extensions

  BrowserUserInterface.prototype.setBg = function(image_url) {
      if (this.disable_bg) {
            $('#bg1').addClass('content_hidden');
            $('#bg1').removeClass('content_visible');
            $('#bg1').css('background-image', 'none'); 
      }
      else if (!image_url || image_url == 'none' || image_url == 'null') {
          if (this.animate_bg) {
            $('#bg1').addClass('content_hidden');
            $('#bg1').removeClass('content_visible');
            setTimeout(function() {
                $('#bg1').css('background-image', 'none'); 
                $('#bg1').removeClass('content_hidden');
                $('#bg1').addClass('content_visible');
            },
            100);
          } else {
              $('#bg1').css('background-image', 'none'); 
          }
      } else if (image_url.startsWith('#') || image_url.startsWith('rgba(') || image_url.startsWith('rgb(')) {
          if (this.animate_bg) {
            $('#bg1').fadeOut(this.bg_fade_out_time, function() {
                $('#bg1').css('background-image', 'none'); 
                $('#bg1').css('background-color', image_url);
            });
            $('#bg1').fadeIn(this.bg_fade_in_time, function() {
                $('#bg2').css('background-image', 'none'); 
            });
            console.log('changing background color ' + image_url);
          } else {
              $('#bg1').css('background-image', 'none'); 
              $('#bg1').css('bacground-color', image_url);
          }
      } else if (image_url.startsWith('linear-gradient(')) {
          if (this.animate_bg) {
            $('#bg1').fadeOut(this.bg_fade_out_time, function() {
                $('#bg1').css('background-image', image_url); 
            });
            $('#bg1').fadeIn(this.bg_fade_in_time, function() {
                $('#bg2').css('background-image', image_url); 
            });
            console.log('changing background gradient ' + image_url);
          } else {
              $('#bg1').css('background-image', image_url); 
          }
      } else {
          if (this.animate_bg) {
            $('#bg1').fadeOut(this.bg_fade_out_time, function() {
                $('#bg1').css('background-image', 'url("' + image_url + '")'); 
            });
            $('#bg1').fadeIn(this.bg_fade_in_time, function() {
                $('#bg2').css('background-image', $('#bg1').css('background-image'));
            });
      } else {
          $('#bg1').css('background-image', 'url("' + image_url + '")'); 
      }
    }
  };

  // set sprites given data
  // data is a list of two-element lists, where the first element is location
  // (one of topLeft, topRight, bottomLeft, bottomRight)
  // and the second element is the sprite.
  BrowserUserInterface.prototype.setSprites = function(data) {
      if (window && window.setSprites) {
          window.setSprites(data);
          return;
      }
      if (!this.show_portraits || data == 'none' || data == 'clear') {
          $('#topLeftSprite').children().fadeOut(this.fade_time, function() {$('#topLeftSprite').empty();});
          $('#topRightSprite').children().fadeOut(this.fade_time, function() {$('#topRightSprite').empty();});
          $('#bottomLeftSprite').children().fadeOut(this.fade_time, function() {$('#bottomLeftSprite').empty();});
          $('#bottomRightSprite').children().fadeOut(this.fade_time, function() {$('#bottomRightSprite').empty();});
          return;
      } else {
          if (data instanceof Array) {
              for (var i = 0; i < data.length; i++) {
                  var loc = data[i][0];
                  var img = data[i][1];
                  this.setSprite(loc, img);
              }
          } else if (data) {
                for (var key in Object.keys(data)) {
                  sprites.push([key, data[key]]);
              }
          }
      }
  };

  BrowserUserInterface.prototype.setSprite = function(loc, img) {
      if (!this.show_portraits) {
          return;
      }
      if (window && window.setSprite) {
          window.setSprite(loc, img);
          return;
      }
      loc = loc.toLowerCase();
      var targetSprite;
      if (loc == 'topleft') {
          targetSprite = $('#topLeftSprite');
      } else if (loc == 'topright') {
          targetSprite = $('#topRightSprite');
      } else if (loc == 'bottomleft') {
          targetSprite = $('#bottomLeftSprite');
      } else if (loc == 'bottomright') {
          targetSprite = $('#bottomRightSprite');
      }
      //targetSprite.empty();
      if (img == 'none' || img == 'clear') {
          delete this.dendryEngine.state.sprites[loc];
          targetSprite.fadeOut(this.fade_time, function() {targetSprite.empty();});
          return;
      } else {
          this.dendryEngine.state.sprites[loc] = img;
          targetSprite.fadeOut(this.fade_time, function() {
              targetSprite.emtpy();
              var image = new Image();
              image.src = img;
              targetSprite.append(image);
              console.log('fadeIn');
              targetSprite.fadeIn(this.fade_time);
          });
      }
  };

  BrowserUserInterface.prototype.setSpriteStyle = function(loc, style) {
      if (window && window.setSpriteStyle) {
          window.setSpriteStyle(loc, style);
          return;
      }
      var targetSprite;
      if (loc == 'topleft') {
          targetSprite = $('#topLeftSprite');
      } else if (loc == 'topright') {
          targetSprite = $('#topRightSprite');
      } else if (loc == 'bottomleft') {
          targetSprite = $('#bottomLeftSprite');
      } else if (loc == 'bottomright') {
          targetSprite = $('#bottomRightSprite');
      } else {
          return;
      }
      targetSprite.css(style);
  };

  // play audio with js
  // audio is a space-separated string with at least one entry.
  // the first entry will be a file url.
  // the second-nth entries are words describing how the file will be played:
  // 'queue' for playing the music next after the current audio ends
  // 'loop' if this music will loop indefinitely.
  // 'nofade' if the sound will be played instantly without a fadein or fadeout.
  // TODO: have a list of audio files...
  BrowserUserInterface.prototype.audio = function(audio) {
      if (this.disable_audio) {
          if (this.currentAudio) {
              this.currentAudio.pause();
              this.currentAudio.loop = false;
          }
          return;
      }
      var audioData = audio.split(' ');
      var audioFiles = [];
      var isLoop = false;
      var isQueue = false;
      var noFade = false;
      var isShuffle = false;
      var isClear = false;
      for (var name of audioData) {
          if (name == 'loop') {
              isLoop = true;
          } else if (name == 'queue') {
              isQueue = true;
          } else if (name == 'nofade') {
              noFade = true;
          } else if (name == 'shuffle') {
              isShuffle = true;
          } else if (name == 'clear') {
              isClear = true;
          } else {
              audioFiles.push(name);
          }
      }
      if (isClear) {
          this.audioPlaylist = [];
          this.audioQueue = [];
      }
      if (audioFiles.length >= 1 || isShuffle) {
          this.audioPlaylist = this.audioPlaylist.concat(audioFiles);
      }
      var audioFile = audioFiles[0];
      var currentAudio = this.currentAudio;
      var fadeTime = this.sound_fade_time;
      var loopCurrent = false;
      var playlist = this.audioPlaylist;
      // stop playing
      if (audioFile == 'null' || audioFile == 'none') {
          if (this.currentAudio) {
              $(currentAudio).animate({volume: 0},
                  this.sound_fade_time,
                  function() {
                      currentAudio.pause();
              });
              this.currentAudio.loop = false;
          }
      } else {
          // fadeout current audio, then fade-in new audio
          console.log('new audio:', audioFile, 'current audio:',  this.currentAudioURL);

          if (this.currentAudio && (this.currentAudioURL == audioFile || isQueue || isShuffle)) {
              if (!currentAudio.ended && !currentAudio.paused) {
                  console.log('adding music to queue');
                  this.audioQueue.push(audioFile);
                  var audioQueue = this.audioQueue;
                  this.currentAudio.onended = function() {
                      var newAudio;
                      if (isQueue) {
                          newAudio = audioQueue.pop();
                          console.log('playing from queue');
                      } else if (isShuffle) {
                          var index = Math.floor(Math.random()*playlist.length);
                          newAudio = playlist[index];
                          console.log('playing from playlist');
                      }
                      if (newAudio) {
                          currentAudio.src = newAudio;
                          console.log('Now playing', newAudio);
                          currentAudio.play();
                          $(currentAudio).animate({volume: this.volume},
                              fadeTime);
                          window.dendryUI.currentAudioURL = newAudio;
                          if (window && window.updateAudio) {
                              window.updateAudio();
                          }
                      }
                  };
              } else {
                  this.currentAudioURL = audioFile;
                  currentAudio.src = audioFile;
                  console.log('Fading in new audio');
                  currentAudio.volume = 0;
                  currentAudio.play();
                  $(currentAudio).animate({volume: this.volume},
                      fadeTime);
                  this.currentAudio.onended = function() {
                      var newAudio;
                      if (isQueue) {
                          newAudio = audioQueue.pop();
                          console.log('playing from queue');
                      } else if (isShuffle) {
                          var index = Math.floor(Math.random()*playlist.length);
                          newAudio = playlist[index];
                          console.log('playing from playlist');
                      }
                      if (newAudio) {
                          currentAudio.src = newAudio;
                          console.log('Now playing', newAudio);
                          currentAudio.play();
                          $(currentAudio).animate({volume: this.volume},
                              fadeTime);
                          window.dendryUI.currentAudioURL = newAudio;
                      }
                      if (window && window.updateAudio) {
                          window.updateAudio();
                      }
                  };
              }
          } else if (this.currentAudio) {
              // not queue or shuffle, so we stop playing the current audio.
              this.currentAudioURL = audioFile;
              console.log('currentAudio present,  fading out current audio');
              // reset the current audio function
              currentAudio.onended = function() {};
              if (noFade) {
                  currentAudio.pause();
                  currentAudio.src = audioFile;
                  currentAudio.play();
              } else {
                  $(currentAudio).animate({volume: 0},
                      this.sound_fade_time,
                      function() {
                          console.log(currentAudio);
                          currentAudio.src = audioFile;
                          console.log('Fading in new audio');
                          currentAudio.play();
                          $(currentAudio).animate({volume: this.volume},
                              fadeTime);
                          if (window && window.updateAudio) {
                              window.updateAudio();
                          }
                  });
              }
          } else if (!this.currentAudio) {
              this.currentAudio = new Audio(audioFile);
              this.currentAudio.volume = 0;
              this.currentAudio.play();
              $(this.currentAudio).animate({volume: this.volume}, this.sound_fade_time);
              currentAudio = this.currentAudio;
              if (isShuffle) {
                  this.currentAudio.onended = function() {
                    var index = Math.floor(Math.random()*playlist.length);
                    var newAudio = playlist[index];
                    if (newAudio) {
                       currentAudio.src = newAudio;
                       console.log('playing from shuffle');
                       console.log('Now playing', newAudio);
                       currentAudio.play();
                       $(currentAudio).animate({volume: this.volume},
                              fadeTime);
                          // asdkfl;;sajd;lkjafdsdsaf;kjldjsfa;kl
                       window.dendryUI.currentAudioURL = newAudio;
                    }
                    if (window && window.updateAudio) {
                        window.updateAudio();
                    }
                  };
              }
          }
          if (isLoop) {
              this.currentAudio.loop = true;
          } else {
              this.currentAudio.loop = false;
          }
          // https://stackoverflow.com/questions/7451508/html5-audio-playback-with-fade-in-and-fade-out
      }
      if (window && window.updateAudio) {
          console.log('updating audio display...');
          this.currentAudioURL = audioFile;
          window.updateAudio(audioFile);
      }
  };

  BrowserUserInterface.prototype.saveSettings = function() {
    if (typeof localStorage !== 'undefined') {
        localStorage[this.game.title + '_animate'] = this.animate;
        localStorage[this.game.title + '_disable_bg'] = this.disable_bg;
        localStorage[this.game.title + '_animate_bg'] = this.animate_bg;
        localStorage[this.game.title + '_show_portraits'] = this.show_portraits;
        localStorage[this.game.title + '_disable_audio'] = this.disable_audio;
        localStorage[this.game.title + '_dark_mode'] = this.dark_mode;
        localStorage[this.game.title + '_font_size'] = this.font_size;
        localStorage[this.game.title + '_settings'] = JSON.stringify(this.current_settings);
    }
  };

  // TODO: this could be much cleaner...
  BrowserUserInterface.prototype.loadSettings = function(defaultSettings) {
    if (typeof localStorage !== 'undefined') {
        if (localStorage[this.game.title + '_settings']) {
            this.current_settings = JSON.parse(localStorage[this.game.title + '_settings']);
        }
        for (var prop in this.base_settings) {
            var lsKey = this.game.title + '_' + prop;
            if (lsKey in localStorage) {
                if (prop == "font_size" || prop == "volume") {
                    this[prop] = Number(localStorage[lsKey]);
                    this.current_settings[prop] = Number(localStorage[lsKey]);
                } else {
                    this[prop] = localStorage[lsKey] != 'false';
                    this.current_settings[prop] = localStorage[lsKey] != 'false';
                }
            } else {
                if (defaultSettings && defaultSettings.hasOwnProperty(prop)) {
                    this[prop] = defaultSettings[prop];
                    this.current_settings[prop] = defaultSettings[prop];
                } else {
                    this[prop] = this.base_settings[prop];
                }
            }
        }
    }
  };

  BrowserUserInterface.prototype.toggle_audio = function(enable_audio) {
      if (enable_audio) {
          this.disable_audio = false;
          if (this.currentAudio) {
              this.currentAudio.play();
          }
      } else {
          if (this.currentAudio) {
              this.currentAudio.pause();
              this.currentAudio.loop = false;
          }
          this.disable_audio = true;
      }
  };


  // save functions
  BrowserUserInterface.prototype.autosave = function() {
      var oldData = localStorage[this.save_prefix+'_a0'];
      if (oldData) {
          localStorage[this.save_prefix+'_a1'] = oldData;
          localStorage[this.save_prefix+'_timestamp_a1'] = localStorage[this.save_prefix+'_timestamp_a0'];
      }
      var slot = 'a0';
      var saveData = this.dendryEngine.getExportableState()
      saveData['audioPlaylist'] = this.audioPlaylist;
      saveData['audioQueue'] = this.audioQueue;
      saveData['currentAudioURL'] = this.currentAudioURL;
      var saveString = JSON.stringify(saveData);
      localStorage[this.save_prefix + '_' + slot] = saveString;
      var scene = this.dendryEngine.state.sceneId;
      var date = new Date(Date.now());
      date = scene + '\n(' + date.toLocaleString(undefined, this.DateOptions) + ')';
      localStorage[this.save_prefix +'_timestamp_' + slot] = date;
      this.populateSaveSlots(slot + 1, 2);
  };

  BrowserUserInterface.prototype.quickSave = function() {
    var saveData = this.dendryEngine.getExportableState()
    saveData['audioPlaylist'] = this.audioPlaylist;
    saveData['audioQueue'] = this.audioQueue;
    saveData['currentAudioURL'] = this.currentAudioURL;
    var saveString = JSON.stringify(saveData);
    localStorage[this.save_prefix + '_q'] = saveString;
    window.alert('Saved.');
  };

  BrowserUserInterface.prototype.saveSlot = function(slot) {
    var saveData = this.dendryEngine.getExportableState()
    saveData['audioPlaylist'] = this.audioPlaylist;
    saveData['audioQueue'] = this.audioQueue;
    saveData['currentAudioURL'] = this.currentAudioURL;
    var saveString = JSON.stringify(saveData);
    localStorage[this.save_prefix + '_' + slot] = saveString;
    var scene = this.dendryEngine.state.sceneId;
    var date = new Date(Date.now());
    date = scene + '\n(' + date.toLocaleString(undefined, this.DateOptions) + ')';
    localStorage[this.save_prefix + '_timestamp_' + slot] = date;
    this.populateSaveSlots(slot + 1, 2);
  };

  BrowserUserInterface.prototype.loadAudio = function(gameState) {
      var audioString = "";
      var hasAudio = false;
      if (gameState.currentAudioURL) {
          this.currentAudioURL = '';
          this.audioPlaylist = [];
          this.audioQueue = [];
          if (this.currentAudio) {
              this.currentAudio.pause();
              this.currentAudio = null;
          }
          hasAudio = true;
      }
      if (hasAudio) {
          // TODO: play the current audio - lol just construct a string...
          if (gameState.audioPlaylist) {
              audioString += "shuffle ";
          }
          if (gameState.audioQueue) {
              audioString += "queue ";
          }
          audioString += gameState.currentAudioURL + " ";
          if (gameState.audioPlaylist) {
              for (var song of gameState.audioPlaylist) {
                  audioString += song + " ";
              }
          }
          if (gameState.audioQueue) {
              for (var song of gameState.audioQueue) {
                  audioString += song + " ";
              }
          }
          gameState.currentAudioURL = null;
          gameState.audioPlaylist = null;
          gameState.audioQueue = null;
          this.audio(audioString);
      }
  };

  BrowserUserInterface.prototype.quickLoad = function() {
    if (localStorage[this.save_prefix + '_q']) {
      var saveString = localStorage[this.save_prefix + '_q'];
      var gameState = JSON.parse(saveString)
      this.loadAudio(gameState);
      this.dendryEngine.setState(gameState);
      if (window && window.onLoad) {
          window.onLoad();
      }
      window.alert('Loaded.');
    } else {
      window.alert('No save available.');
    }
  };

  BrowserUserInterface.prototype.loadSlot = function(slot) {
    if (localStorage[this.save_prefix + '_' + slot]) {
      var saveString = localStorage[this.save_prefix + '_' + slot];
      var gameState = JSON.parse(saveString)
      this.loadAudio(gameState);
      this.dendryEngine.setState(gameState);
      // have a function for loading the game...
      if (window && window.onLoad) {
          window.onLoad();
      }
      this.hideSaveSlots();
      window.alert('Loaded.');
    } else {
      window.alert('No save available.');
    }
  };

  BrowserUserInterface.prototype.deleteSlot = function(slot) {
    if (localStorage[this.save_prefix + '_' + slot]) {
      localStorage[this.save_prefix + '_' + slot] = '';
      localStorage[this.save_prefix + '_timestamp_' + slot] = '';
      this.populateSaveSlots(slot + 1, 2);
    } else {
      window.alert('No save available.');
    }
  };

  BrowserUserInterface.prototype.exportSlot = function(slot) {
    if (localStorage[this.save_prefix + '_' + slot]) {
      var data = localStorage[this.save_prefix + '_' + slot];
      var a = document.createElement("a");
      var file = new Blob([data], {type: 'text/plain'});
      a.href = URL.createObjectURL(file);
      a.download = 'save.txt';
      a.click();
    } else {
      window.alert('No save available.');
    }
  };

  BrowserUserInterface.prototype.importSave = function(doc_id) {
      var that = this;
      function onFileLoad(e) {
          var data = e.target.result;
          that.dendryEngine.setState(JSON.parse(data));
          that.hideSaveSlots();
          window.alert('Loaded.');
      }
      var uploader = document.getElementById(doc_id);
      var reader = new FileReader();
      var file = uploader.files[0];
      console.log(uploader.files);
      reader.onload = onFileLoad;
      reader.readAsText(file);
  };

  BrowserUserInterface.prototype.populateSaveSlots = function(max_slots, max_auto_slots) {
    // this fills in the save information
    var that = this;
    function createLoadListener(i) {
      return function(evt) {
        that.loadSlot(i);
      };
    }
    function createSaveListener(i) {
      return function(evt) {
        that.saveSlot(i);
      };
    }
    function createDeleteListener(i) {
      return function(evt) {
        that.deleteSlot(i);
      };
    }
    function createExportListener(i) {
      return function(evt) {
        that.exportSlot(i);
      };
    }
      function populateSlot(id) {
          var save_element = document.getElementById('save_info_' + id);
          var save_button = document.getElementById('save_button_' + id);
          var delete_button = document.getElementById('delete_button_' + id);
          if (localStorage[that.save_prefix + '_' + id]) {
              var timestamp = localStorage[that.save_prefix+'_timestamp_' + id];
              save_element.textContent = timestamp;
              save_button.textContent = "Load";
              save_button.onclick = createLoadListener(id);
              delete_button.onclick = createDeleteListener(id);
          } else {
              save_button.textContent = "Save";
              save_element.textContent = "Empty";
              save_button.onclick = createSaveListener(id);
          }
          try {
              var export_button = document.getElementById('export_button_' + id);
              if (localStorage[that.save_prefix + '_' + id]) {
                  export_button.onclick = createExportListener(id);
              }
          } catch(error) {
          }

      }
      for (var i = 0; i < max_slots; i++) {
          populateSlot(i);
      }
      for (i = 0; i < max_auto_slots; i++) {
          populateSlot('a'+i);
      }

  };

  BrowserUserInterface.prototype.showSaveSlots = function() {
    if (this.dendryEngine.state.disableSaves) {
        window.alert('Saving and loading is currently disabled.');
        return;
    }
    var save_element = document.getElementById('save');
    save_element.style.display = 'block';
    this.populateSaveSlots(this.max_slots, 2);
    var that = this;
    if (!save_element.onclick) {
      save_element.onclick = function(evt) {
        var target = evt.target;
        var save_element = document.getElementById('save');
        if (target == save_element) {
          that.hideSaveSlots();
        }
      };
    }
  };

  BrowserUserInterface.prototype.hideSaveSlots = function() {
    var save_element = document.getElementById('save');
    save_element.style.display = 'none';
  };


  // functions for dealing with options
  BrowserUserInterface.prototype.setOption = function(option, toggle) {
      this[option] = toggle; 
      this.saveSettings();
  };

  BrowserUserInterface.prototype.populateOptions = function() {
    var disable_bg = this.disable_bg;
    var animate = this.animate;
    var animate_bg = this.animate_bg;
    if (disable_bg) {
        $('#backgrounds_no')[0].checked = true;
    } else {
        $('#backgrounds_yes')[0].checked = true;
    }
    if (animate) {
        $('#animate_yes')[0].checked = true;
    } else {
        $('#animate_no')[0].checked = true;
    }
    if (animate_bg) {
        $('#animate_bg_yes')[0].checked = true;
    } else {
        $('#animate_bg_no')[0].checked = true;
    }
  };

  BrowserUserInterface.prototype.hideOptions = function() {
      var save_element = document.getElementById('options');
      save_element.style.display = "none";
  };

  BrowserUserInterface.prototype.showOptions = function() {
      var that = this;
      var save_element = document.getElementById('options');
      this.populateOptions();
      save_element.style.display = "block";
      if (!save_element.onclick) {
          save_element.onclick = function(evt) {
              var target = evt.target;
              var save_element = document.getElementById('options');
              if (target == save_element) {
                  that.hideOptions();
              }
          };
      }
  };

  // ------------------------------------------------------------------------
  // Additional methods

  BrowserUserInterface.prototype.getGameOverMsg = function() {
    return 'Game Over (reload to read again)';
  };

  BrowserUserInterface.prototype._registerEvents = function() {
    var that = this;
    this.$content.on('click', 'ul.choices li a', function(event) {
      event.preventDefault();
      event.stopPropagation();
      var choice = parseInt($(this).attr('data-choice'));
      that.dendryEngine.choose(choice);
      return false;
    });
    this.$content.on('click', 'ul.choices li', function(event) {
      event.preventDefault();
      event.stopPropagation();
      $('a', this).click();
      return false;
    });
    // dendrynexus - onclick for decks and cards
    this.$content.on('click', 'ul.decks li a', function(event) {
      event.preventDefault();
      event.stopPropagation();
      var choice = $(this).attr('card-id');
      that.dendryEngine.drawCard(choice);
      return false;
    });
    this.$content.on('click', 'ul.hand li a', function(event) {
      event.preventDefault();
      event.stopPropagation();
      var choice = $(this).attr('card-id');
      that.dendryEngine.playCard(choice);
      return false;
    });
    this.$content.on('click', 'ul.pinned-cards li a', function(event) {
      event.preventDefault();
      event.stopPropagation();
      var choice = $(this).attr('card-id');
      that.dendryEngine.playPinnedCard(choice);
      return false;
    });
  };

  // ------------------------------------------------------------------------
  // Run when loaded.

  var main = function() {
    engine.convertJSONToGame(window.game.compiled, function(err, game) {
      if (err) {
        throw err;
      }

      var ui = new BrowserUserInterface(game, $('#content'));
      window.dendryUI = ui;
      // Allow the ui system to be customized before use.
      if (window.dendryModifyUI !== undefined) {
        // If it returns true, then we don't need to begin the game.
        var dontStart = window.dendryModifyUI(ui);
        if (dontStart) {
          return;
        }
      }
      ui.dendryEngine.beginGame();
    });
  };
  $(main);

}(jQuery));

},{"../engine":1,"./content/html":3}],3:[function(require,module,exports){
/* dendry
 * http://github.com/idmillington/dendry
 *
 * MIT License
 */
/*jshint indent:2 */
(function() {
  'use strict';

  var _contentObjectToHTML = function(contentObj) {
    if (contentObj.type === undefined) {
      // if the game defines the function window.displayText, then that function is called to format the text.
      // this is used for game-specific formatting.
      if (typeof(window) !== "undefined" && window.displayText) {
          contentObj = window.displayText(contentObj);
      }
      return contentObj;
    } else {
      switch (contentObj.type) {
      case 'emphasis-1':
        return '<em>' + _contentToHTML(contentObj.content) + '</em>';
      case 'emphasis-2':
        return '<strong>' + _contentToHTML(contentObj.content) + '</strong>';
      case 'emphasis-3':
        return '<code>' + _contentToHTML(contentObj.content) + '</code>';
      case 'hidden':
        return '<span class="hidden">' + _contentToHTML(contentObj.content) +
          '</span>';
      case 'line-break':
        return '<br>';

      // We can't handle elements that require state-dependency.
      // raw html for magic
      case 'magic':
        return contentObj.content;
      case 'insert':
        /* falls through */
      case 'conditional':
        throw new Error(
          contentObj.type + ' should have been evaluated by now.'
          );
      }
    }
  };

  var _contentToHTML = function(content) {
    if (Array.isArray(content)) {
      var result = [];
      for (var i = 0; i < content.length; ++i) {
        var contentObj = content[i];
        result.push(_contentObjectToHTML(contentObj));
      }
      return result.join('');
    } else {
      return _contentObjectToHTML(content);
    }
  };

  var _paragraphsToHTML = function(paragraphs) {
    var result = [];
    for (var i = 0; i < paragraphs.length; ++i) {
      var paragraph = paragraphs[i];
      switch (paragraph.type) {
      case 'heading':
        result.push('<h1>');
        result.push(_contentToHTML(paragraph.content));
        result.push('</h1>');
        break;
      case 'paragraph':
        result.push('<p>');
        result.push(_contentToHTML(paragraph.content));
        result.push('</p>');
        break;
      case 'quotation':
        result.push('<blockquote>');
        result.push(_contentToHTML(paragraph.content));
        result.push('</blockquote>');
        break;
      case 'attribution':
        result.push('<blockquote class="attribution">');
        result.push(_contentToHTML(paragraph.content));
        result.push('</blockquote>');
        break;
      case 'magic':
        result.push(paragraph.content);
        break;
      case 'hrule':
        result.push('<hr>');
        break;
      }
    }
    return result.join('');
  };

  module.exports = {
    convert: _paragraphsToHTML,
    convertLine: _contentToHTML
  };
}());

},{}]},{},[2]);
