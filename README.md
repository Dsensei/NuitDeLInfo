BORDERLESS FAMILY
================

The project was thinked first with the full JS stack named mean (see
http://mean.io), but we had some implementation difficulties at the middle of
the development so we switched to the combinaison of node.js + express since we
can reuse some of our previous work.

We wanted to have a great scalable plateform composed by a root server that
host the main database, and what we call operators. Operators are sort of
coordinator that are part of the organization. These person are in charge of
count and register every refugee. The high value of this way of thinking is
that de operator can register every family in the refugee camp when offline on
his operator account. When he get connectivity data are pushed to the root
server and dispatched to the whole world.

There is two type of basic account:

* Seeker: Person outside the refugee camp that search for someone.
* Refugee : Registered when entering in the refugee camp.

When a Seeker search for a refugee the root server makes possible match and
notify refugees. If some of them respond to the notification then the process
of verification begin. Each part write some facts, more precisely secret and
then the root server if responses match give the full details of how to contact
the refugee. That is information on the camp and precise information on the
member registered under the refugee account so that there is no possible leak
of private information nor wrong person matching.
Also, please note that the registration in offline mode on operator computer is
protected by assymetric encryption so that as soon as the account is created a
encrypted archive is built, only recoverable by the root server itself.
The offline mode is interresting since connectivity may be not as stable nor
aivailable as we are used to.

![Borderless Family](https://raw.githubusercontent.com/Dsensei/NuitDeLInfo/4dfe47b087f0f72b7524c8497c524c5ec52ddea4/wallpaper.jpg)
